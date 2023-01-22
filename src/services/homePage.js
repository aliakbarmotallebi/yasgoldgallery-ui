import axios from "./index";
import { productsWithTag } from "./products";

const homePageData = async () => {
  try {
    const [speacialProducts, suggestedProducts] = await axios.all([
      productsWithTag(1),
      productsWithTag(3),
    ]);
    return { speacialProducts, suggestedProducts };
  } catch (e) {
    console.log(e);
  }
};

export { homePageData };
