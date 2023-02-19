import Brands from "components/main/Brands";
import SpecialCategories from "components/main/SpecialCategories";
import SpecialComments from "components/main/SpecialComments";
import SpecialProducts from "components/main/SpecialProducts";
import SuggestedProducts from "components/main/SuggestedProducts";
import { useEffect, useState } from "react";
import { homePageData } from "services/homePage";
import LoadableLoading from "components/shared/LoadableLoading";
import slideImage from "assets/images/slide.jpg";

import boxImage from "assets/images/box.png";
import deliveryImage from "assets/images/delivery.png";
import createdImage from "assets/images/created.png";
import guaranteeImage from "assets/images/guarantee.png";

const HomePage = () => {
  const [speacial, setSpeacial] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [specialCategories, setSpecialCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const { speacialProducts, suggestedProducts, specialCategoriesData } =
        await homePageData();
      if (speacialProducts.status) setSpeacial(speacialProducts.data);
      if (suggestedProducts.status) setSuggested(suggestedProducts.data);
      if (specialCategoriesData.status)
        setSpecialCategories(specialCategoriesData.data);
      setLoading(false);
    };
    getData();
  }, []);
  return (
    <>
      <div class="flex flex-col justify-center">
        <div class="relative max-h-screen overflow-hidden">
          <img class="block w-full h-full object-cover" src={slideImage} />
          <div class="absolute bottom-0 left-0 bg-white hidden md:block md:h-32 lg:h-36 w-full ">
            <div class="bg-white absolute z-[1] w-full -left-1/2 -top-1/2 h-1/2 translate-x-1/2 translate-y-1/2 rounded-[50%]"></div>
            <div class="justify-evenly relative -top-1/2 hidden md:flex container xl:max-w-6xl mx-auto">
              <div class="flex flex-col flex-1 items-center  text-black font-bold justify-center z-[2] relative -top-1/3">
                <div class="w-20 h-20">
                  <img src={createdImage} alt="packing" />
                </div>
                <p class="mt-4 text-center font-bold">دست ساز</p>
              </div>
              <div class="flex flex-col flex-1 items-center  text-black font-bold justify-center z-[2] relative -top-1/2">
                <div class="w-20 h-20">
                  <img src={guaranteeImage} alt="packing" />
                </div>
                <p class="mt-4 text-center font-bold">ضمانت اصالت</p>
              </div>
              <div class="flex flex-col flex-1 items-center  text-black font-bold justify-center z-[2] relative -top-1/2">
                <div class="w-20 h-20">
                  <img src={deliveryImage} alt="packing" />
                </div>
                <p class="mt-4 text-center font-bold">ارسال سریع</p>
              </div>
              <div class="flex flex-col flex-1 items-center  text-black font-bold justify-center z-[2] relative -top-1/3">
                <div class="w-20 h-20">
                  <img src={boxImage} alt="packing" />
                </div>
                <p class="mt-4 text-center font-bold">بسته بندی ویژه</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && <LoadableLoading />}
      <SpecialProducts speacial={speacial} />
      <SpecialCategories specialCategories={specialCategories} />
      <SuggestedProducts suggested={suggested} />
      <SpecialComments />
      <Brands />
    </>
  );
};

export default HomePage;
