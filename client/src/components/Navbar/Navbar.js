import React, { useContext } from "react";
import classes from "./Navbar.module.css";
import Context from "../../index";
import { Link, NavLink } from "react-router-dom";
import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import {
  ACTORS_ROUTE,
  AUDITIONS_ROUTE,
  GROUP_ROUTE,
  JOBS_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../../utils/consts";
import { observer } from "mobx-react-lite";
import MenuProfile from "./MenuProfile/MenuProfile";

const Navbar = observer(() => {
  const { user } = useContext(Context);
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Movies
        </Typography>
        <div className={classes.nav_wrapper}>
          <div className={classes.navlinks}>
            <NavLink to={AUDITIONS_ROUTE} className={classes.link}>
              Auditions
            </NavLink>
            <Link to={JOBS_ROUTE} className={classes.link}>
              Jobs
            </Link>
            <Link to={ACTORS_ROUTE} className={classes.link}>
              Actors
            </Link>
            <Link to={GROUP_ROUTE} className={classes.link}>
              Group
            </Link>
          </div>
          <div className={classes.profile}>
            {user.isAuth === false ? (
              <>
                <Link to={LOGIN_ROUTE} className={classes.link}>
                  Login
                </Link>
                <Link to={REGISTRATION_ROUTE} className={classes.link}>
                  Registration
                </Link>
              </>
            ) : (
              <div className={classes.profile_wrapper}>
                {/*<img src={user.img} className={classes.profile_img} />*/}
                <MenuProfile />
              </div>
            )}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
});

export default Navbar;
