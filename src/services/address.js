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
const createNewAddress = async (address, post_code) => {
  try {
    const response = await axios.post(
      "/address",
      {
        address,
        post_code,
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
const editAddress = async (address_id, address, post_code) => {
  try {
    const response = await axios.post(
      `/address/${address_id}`,
      {
        address,
        post_code,
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
const deleteAddress = async (address_id) => {
  try {
    const response = await axios.delete(`/address/${address_id}`, {
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

export { viewAllAddress, createNewAddress, editAddress, deleteAddress };
