import { getDataLS, removeDataLS } from "./handlerLS";
import decodeToken from "./decodeToken";

const checkExpireUser = () => {
  const date = new Date();
  const exp = getDataLS("user").token && decodeToken("exp") * 1000;
  const diff = exp - date;
  diff < 0 && removeDataLS("user");
};

export default checkExpireUser;
