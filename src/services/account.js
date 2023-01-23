import { getDataLS } from "../helper/handlerLS";
import axios from "./index";

const sendVerifyCodeToPhoneNumber = async (mobile) => {
  try {
    const response = await axios.post(
      `/sendVerifyCode`,
      {
        mobile,
      },
      {
        headers: {
          "Content-Type": "application/json",
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
const login = async (mobile, code) => {
  try {
    const response = await axios.post(
      `/login`,
      {
        mobile,
        code,
      },
      {
        headers: {
          "Content-Type": "application/json",
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

const refreshToken = async () => {};
const editProfile = async () => {};
const profile = async () => {};

export {
  sendVerifyCodeToPhoneNumber,
  login,
  refreshToken,
  editProfile,
  profile,
};
