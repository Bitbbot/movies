import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../routes";
import News from "./News/News";
import Topics from "./Topics/Topics";
import classes from "./AppRouter.module.css";

const AppRouter = () => {
  return (
    <div className={classes.wrapper}>
      <News classname={classes.news} />
      <div className={classes.page}>
        <Routes>
          {publicRoutes.map(({ path, Component }) => {
            return (
              <Route path={path} element={<Component />} key={path} exact />
            );
          })}
          {/*<Route path="*" element={<Auditions />} />*/}
        </Routes>
      </div>
      <Topics />
    </div>
  );
};

export default AppRouter;
