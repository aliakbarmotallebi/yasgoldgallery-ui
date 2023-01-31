import { getDataLS } from "helper/handlerLS";
import { async } from "q";
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

const getAllOrders = async () => {
  try {
    const response = await axios.get("/orders", {
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
const detailsOrder = async (order) => {
  try {
    const response = await axios.get(`/orders/${order}`, {
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

export { createOrder, getAllOrders, detailsOrder };
