import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (name, login, password) => {
  const { data } = await $host.post("api/user/registration", {
    name,
    login,
    password,
  });
  localStorage.setItem("token", data);
  return jwt_decode(data);
};
export const login = async (login, password) => {
  const { data } = await $host.post("api/user/login", {
    login,
    password,
  });
  localStorage.setItem("token", data);
  return jwt_decode(data);
  // return response;
};
export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data);
  return jwt_decode(data);
  // return response;
};
export const report = async () => {
  const response = await $authHost({
    url: "api/user/report",
    responseType: "blob",
  });
  const href = URL.createObjectURL(response.data);
  const link = document.createElement("a");
  link.href = href;
  link.setAttribute("download", "Report.pdf"); //or any other extension
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(href);
  console.log(response);
};
