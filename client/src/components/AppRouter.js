import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { publicRoutes } from "../routes";
import { AUDITIONS_ROUTE } from "../utils/consts";
const AppRouter = () => {
  return (
    <Switch>
      {publicRoutes.map(({ path, component }) => (
        <Route path={path} component={component} exact />
      ))}
      <Redirect to={AUDITIONS_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
