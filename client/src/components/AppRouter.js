import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../routes";
import News from "./News/News";
import Topics from "./Topics/Topics";

const AppRouter = () => {
  return (
    <div>
      <News />
      <Routes>
        {publicRoutes.map(({ path, Component }) => {
          return <Route path={path} element={<Component />} key={path} exact />;
        })}
        {/*<Route path="*" element={<Auditions />} />*/}
      </Routes>
      <Topics />
    </div>
  );
};

export default AppRouter;
