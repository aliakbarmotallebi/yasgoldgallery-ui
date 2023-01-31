import { getDataLS } from "helper/handlerLS";
import axios from "./index";

const createOrder = async (orderDetails) => {
  try {
    const response = await axios.post(
      "/orders",
      {
        ...orderDetails,
      },
      {
        headers: {
          Authorization: `Bearer ${getDataLS("user")?.token}`,
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw Error();
    }
  } catch (e) {
    console.log(e);
  }
};

export { createOrder };
