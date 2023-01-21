import axios from "axios";

axios.defaults.baseURL = "https://shop.talaayas.ir/api/v1";

const lastProducts = async (params) => {
  try {
    const response = await axios.get("/products/last", {
      params,
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

const productsWithTagId = async (tagId) => {
  try {
    const response = await axios.get(`/products/tag/${tagId}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw Error();
    }
  } catch (e) {
    console.log(e);
  }
};
const HomePageData = async () => {
  try {
    const [speacialProducts, suggestedProducts] = await axios.all([
      productsWithTagId(1),
      productsWithTagId(3),
    ]);
    return { speacialProducts, suggestedProducts };
  } catch (e) {
    console.log(e);
  }
};

const productWithId = async (product_id) => {
  try {
    const response = await axios.get(`/products/${product_id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw Error();
    }
  } catch (e) {
    console.log(e);
  }
};

const getCategories = async () => {
  try {
    const response = await axios.get(`/categories`);
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
  lastProducts,
  productsWithTagId,
  HomePageData,
  productWithId,
  getCategories,
};
