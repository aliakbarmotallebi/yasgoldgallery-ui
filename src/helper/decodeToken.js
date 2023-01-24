import jwt_decode from "jwt-decode";
import { getDataLS } from "./handlerLS";

const decodeToken = (key) => {
  let decodedToken = {};
  const token = getDataLS("user")?.token;
  decodedToken = token && jwt_decode(token);
  return decodedToken && decodedToken[key];
};

export default decodeToken;
