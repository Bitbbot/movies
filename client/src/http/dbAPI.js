import { $authHost } from "./index";

export const addRecord = async (route, values) => {
  // console.log(values);
  // const keys = Object.keys(values);
  // console.log(keys);
  const { data } = await $authHost.post(route, values);
};
