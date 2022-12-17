import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../routes";
const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => {
        return <Route path={path} element={<Component />} key={path} exact />;
      })}
      {/*<Route path="*" element={<Auditions />} />*/}
    </Routes>
  );
};

export default AppRouter;
