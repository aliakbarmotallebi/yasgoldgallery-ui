import { checkLS } from "./handlerLS";

const checkLoginUser = () => {
  if (checkLS("user").token) return true;
  return false;
};

export default checkLoginUser;
