import { $authHost, $host } from "./index";

export const addRecord = async (route, values) => {
  const { data } = await $authHost.post(route, values);
};

export const getAll = async (route) => {
  const { data } = await $host.get(route);
  return data;
};
