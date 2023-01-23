import { getDataLS } from "./handlerLS";
import jwt_decode from "jwt-decode";

const checkExpireUser = () => {
  const date = new Date();
  const { exp } = jwt_decode(getDataLS("user")?.token);
  console.log(date, new Date(exp));
};

export default checkExpireUser;
