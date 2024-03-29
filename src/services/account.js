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
    return response.data;
  } catch (e) {
    return e.response?.data;
  }
};
const editProfile = async (firstname, lastname) => {
  try {
    const response = await axios.post(
      "/edit-profile",
      {
        firstname,
        lastname,
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

const profile = async () => {
  try {
    const response = await axios.get("/profile", {
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
const refreshToken = async () => {
  try {
    const response = await axios.get("/refreshToken", {
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

export {
  sendVerifyCodeToPhoneNumber,
  login,
  refreshToken,
  editProfile,
  profile,
};
