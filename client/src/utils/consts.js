export const ACTORS_ROUTE = "/actors";
export const GROUP_ROUTE = "/group";
export const JOBS_ROUTE = "/jobs";
export const AUDITIONS_ROUTE = "/auditions";
export const LOGIN_ROUTE = "/login";
export const REGISTRATION_ROUTE = "/registration";
export const ADDDATA_ROUTE = "/adddata";
export const tables = [
  {
    name: "actors",
    url: "/api/actor/create",
    fields: ["sex", "age", "height", "img", "text"],
  },
  {
    name: "auditions",
    url: "/api/audition/create",
    fields: ["type", "sex", "age", "height", "img", "text"],
  },
  {
    name: "jobs",
    url: "/api/job/create",
    fields: ["type", "img", "text"],
  },
  {
    name: "groups",
    url: "/api/group/create",
    fields: ["type", "img", "text"],
  },
  {
    name: "news",
    url: "/api/news/create",
    fields: ["img", "text"],
  },
  {
    name: "topics",
    url: "/api/topic/create",
    fields: ["img", "text"],
  },
];
