import axios from "./index";

const addComment = async () => {};
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
