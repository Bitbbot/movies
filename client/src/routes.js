import {
  LOGIN_ROUTE,
  JOBS_ROUTE,
  REGISTRATION_ROUTE,
  GROUP_ROUTE,
  ACTORS_ROUTE,
  AUDITIONS_ROUTE,
  ADDDATA_ROUTE,
} from "./utils/consts";
import Jobs from "./pages/Jobs/Jobs";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Actors from "./pages/Actors/Actors";
import Auditions from "./pages/Auditions/Auditions";
import Group from "./pages/Group/Group";
import AddData from "./components/AddData/AddData";
export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: JOBS_ROUTE,
    Component: Jobs,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Registration,
  },
  {
    path: ACTORS_ROUTE,
    Component: Actors,
  },
  {
    path: AUDITIONS_ROUTE,
    Component: Auditions,
  },
  {
    path: GROUP_ROUTE,
    Component: Group,
  },
  {
    path: ADDDATA_ROUTE,
    Component: AddData,
  },
];
