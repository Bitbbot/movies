import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { publicRoutes } from "../routes";
const AppRouter = () => {
  return (
    <Switch>
      {publicRoutes.map(({ path, component }) => (
        <Route path={path} component={component} exact />
      ))}
    </Switch>
  );
};

export default AppRouter;
