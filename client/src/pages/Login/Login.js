import React, { useContext, useState } from "react";
import classes from "./Login.module.css";
import {
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { login } from "../../http/userAPI";
import Context from "../../index";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const [loginVal, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleClickShowPassword = () => setIsPasswordVisible((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  async function onSubmit(e) {
    const response = await login(loginVal, password);
    user.setIsAuth(true);
    user.setIsAdmin(response.isAdmin);
    navigate("/auditions");
  }
  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <Typography variant="h5" component="h5">
          Login
        </Typography>
        <FormControl sx={{ m: 1, width: "270px" }} variant="filled">
          <InputLabel
            sx={{ color: "white" }}
            htmlFor="filled-adornment-password"
          >
            Login
          </InputLabel>
          <FilledInput
            sx={{ color: "white" }}
            id="filled-adornment-password"
            type={"text"}
            value={loginVal}
            onChange={(
              e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
            ) => setLogin(e.target.value)}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: "270px" }} variant="filled">
          <InputLabel
            sx={{ color: "white" }}
            htmlFor="filled-adornment-password"
          >
            Password
          </InputLabel>
          <FilledInput
            sx={{ color: "white" }}
            id="filled-adornment-password"
            type={isPasswordVisible ? "text" : "password"}
            value={password}
            onChange={(
              e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
            ) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          type="button"
          onClick={onSubmit}
          sx={{ width: "100px", marginTop: "20px" }}
          variant="contained"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
