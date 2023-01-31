import { getDataLS } from "helper/handlerLS";
import axios from "./index";

const viewAllAddress = async () => {
  try {
    const response = await axios.get("/address", {
      headers: {
        Authorization: `Bearer ${getDataLS("user")?.token}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw Error();
    }
  } catch (e) {
    console.log(e);
  }
};
const createNewAddress = async () => {};
const editAddress = async () => {};
const deleteAddress = async () => {};

export { viewAllAddress, createNewAddress, editAddress, deleteAddress };
