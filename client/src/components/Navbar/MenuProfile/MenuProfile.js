import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { check, report } from "../../../http/userAPI";
import { useContext } from "react";
import Context from "../../../index";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const MenuPopupState = observer(() => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  async function logout() {
    localStorage.removeItem("token");
    check();
    user.setIsAuth(false);
    user.setIsAdmin(false);
    navigate("/auditions");
  }
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              onClick={() => {
                popupState.close();
                navigate("/adddata");
              }}
            >
              Add record to db
            </MenuItem>
            {user.isAdmin ? (
              <MenuItem
                onClick={async () => {
                  popupState.close();
                  await report();
                }}
              >
                Get document
              </MenuItem>
            ) : null}
            <MenuItem
              onClick={() => {
                popupState.close();
                logout();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
});
export default MenuPopupState;
