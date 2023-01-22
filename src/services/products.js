import axios from "./index";

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

const productsWithTag = async (tagId) => {
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

const productsWithCategory = async (categoryId) => {
  try {
    const response = await axios.get(`/products/category/${categoryId}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw Error();
    }
  } catch (e) {
    console.log(e);
  }
};

const tags = async () => {};
const categories = async () => {};
const categoriesForShowInHome = async () => {};
export {
  productWithId,
  lastProducts,
  productsWithTag,
  productsWithCategory,
  tags,
  categories,
  categoriesForShowInHome,
};
