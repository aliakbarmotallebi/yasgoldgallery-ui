import axios from "./index";
const { profile } = require("./account");
const { viewAllAddress } = require("./address");

const getCheckoutData = async () => {
  try {
    const [phoneNumber, addresses] = await axios.all([
      profile(),
      viewAllAddress(),
    ]);
    return [phoneNumber, addresses];
  } catch (err) {
    console.log(err);
  }
};

export { getCheckoutData };
