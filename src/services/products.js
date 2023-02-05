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
const categories = async (limit) => {
  try {
    const response = await axios.get("/categories", {
      params: { limit },
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

const tags = async () => {
  try {
    const response = await axios.get("/tags");
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

const getAllDataWithTag = async (tagId) => {
  try {
    const [products, allTags] = await axios.all([
      productsWithTag(tagId),
      tags(),
    ]);
    return [products, allTags];
  } catch (e) {
    console.log(e);
  }
};
const getAllDataWithCategory = async (categoryId) => {
  try {
    const [products, allCategories] = await axios.all([
      productsWithCategory(categoryId),
      categories(),
    ]);
    return [products, allCategories];
  } catch (e) {
    console.log(e);
  }
};

const categoriesForShowInHome = async () => {};
export {
  productWithId,
  lastProducts,
  productsWithTag,
  productsWithCategory,
  tags,
  categories,
  categoriesForShowInHome,
  getAllDataWithTag,
  getAllDataWithCategory,
};
