import {
  LOGIN_ROUTE,
  JOBS_ROUTE,
  REGISTRATION_ROUTE,
  GROUP_ROUTE,
  ACTORS_ROUTE,
  AUDITIONS_ROUTE,
} from "./utils/consts";
import Jobs from "./pages/Jobs/Jobs";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Actors from "./pages/Actors/Actors";
import Auditions from "./pages/Auditions/Auditions";
import Group from "./pages/Group/Group";
export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    component: Login,
  },
  {
    path: JOBS_ROUTE,
    component: Jobs,
  },
  {
    path: REGISTRATION_ROUTE,
    component: Registration,
  },
  {
    path: ACTORS_ROUTE,
    component: Actors,
  },
  {
    path: AUDITIONS_ROUTE,
    component: Auditions,
  },
  {
    path: GROUP_ROUTE,
    component: Group,
  },
];
