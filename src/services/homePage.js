import axios from "./index";
import { productsWithTag, specialCategories } from "./products";

const homePageData = async () => {
  try {
    const [speacialProducts, suggestedProducts, specialCategoriesData] =
      await axios.all([
        productsWithTag(1),
        productsWithTag(3),
        specialCategories(),
      ]);
    return { speacialProducts, suggestedProducts, specialCategoriesData };
  } catch (e) {
    console.log(e);
  }
};

export { homePageData };
