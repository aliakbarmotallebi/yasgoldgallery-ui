import { getDataLS } from "helper/handlerLS";
import axios from "./index";

const createPayment = async (orderId) => {
  try {
    const response = await axios.get(`/checkout/payment/${orderId}`, {
      headers: {
        Authorization: `Bearer ${getDataLS("user")?.token}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};

const checkPayment = async (resnumber) => {
  try {
    const response = await axios.get("/payment/check", {
      headers: {
        Authorization: `Bearer ${getDataLS("user")?.token}`,
      },
      params: {
        resnumber,
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

const allPayments = async () => {
  try {
    const response = await axios.get("/payments", {
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

export { createPayment, checkPayment, allPayments };
