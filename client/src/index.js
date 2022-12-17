import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  actorsStore,
  auditionsStore,
  bannersStore,
  groupsStore,
  jobsStore,
  newsStore,
  topicsStore,
  userStore,
} from "./store/index";
import { BrowserRouter } from "react-router-dom";

const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: userStore,
        actors: actorsStore,
        auditions: auditionsStore,
        banners: bannersStore,
        groups: groupsStore,
        jobs: jobsStore,
        news: newsStore,
        topics: topicsStore,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);

export default Context;
