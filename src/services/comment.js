import { getDataLS } from "../helper/handlerLS";
import axios from "./index";

const addComment = async (product_id, comment) => {
  try {
    const response = await axios.post(
      `/addComment/${product_id}`,
      {
        product_id,
        comment,
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
const comments = async (productId) => {
  try {
    const response = await axios.get(`/comments/${productId}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw Error();
    }
  } catch (e) {
    console.log(e);
  }
};

export { addComment, comments };
