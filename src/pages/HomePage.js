import Brands from "../components/Brands";
import GridImages from "../components/GridImages";
import SpecialComments from "../components/SpecialComments";
import SpecialProducts from "../components/SpecialProducts";
import SuggestedProducts from "../components/SuggestedProducts";
import { useEffect, useState } from "react";
import { homePageData } from "../services/homePage";
import LoadableLoading from "../components/shared/LoadableLoading";
import slideImage from "../assets/images/slide.jpg";
import packingImage from "../assets/images/packing.jpeg";

const HomePage = () => {
  const [speacial, setSpeacial] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const { speacialProducts, suggestedProducts } = await homePageData();
      if (speacialProducts.status) setSpeacial(speacialProducts.data);
      if (suggestedProducts.status) setSuggested(suggestedProducts.data);
      setLoading(false);
    };
    getData();
  }, []);
  return (
    <>
      <div class="flex flex-col justify-center">
        <div class="relative h-screen overflow-hidden">
          <img
            class="hidden sm:block w-full h-full object-cover"
            src={slideImage}
          />
          <img
            class="sm:hidden w-full h-full object-cover"
            src="https://picsum.photos/1920/400"
          />
          <div class="absolute bottom-0 left-0 bg-white h-36 w-full flex justify-evenly">
            <div className="bg-white absolute z-10 w-full -left-1/2 -top-1/2 h-1/2 translate-x-1/2 translate-y-1/2 rounded-[50%]"></div>
            <div className="flex flex-col flex-1 items-center justify-center z-20 relative -top-1/3">
              <div className="w-20 h-20">
                <img src={packingImage} alt="packing" />
              </div>
              <p className="mt-4 text-center font-bold">دست ساز</p>
            </div>
            <div className="flex flex-col flex-1 items-center justify-center z-20 relative -top-1/2">
              <div className="w-20 h-20">
                <img src={packingImage} alt="packing" />
              </div>
              <p className="mt-4 text-center font-bold">ضمانت اصالت</p>
            </div>
            <div className="flex flex-col flex-1 items-center justify-center z-20 relative -top-1/2">
              <div className="w-20 h-20">
                <img src={packingImage} alt="packing" />
              </div>
              <p className="mt-4 text-center font-bold">ارسال سریع</p>
            </div>
            <div className="flex flex-col flex-1 items-center justify-center z-20 relative -top-1/3">
              <div className="w-20 h-20">
                <img src={packingImage} alt="packing" />
              </div>
              <p className="mt-4 text-center font-bold">بسته بندی ویژه</p>
            </div>
          </div>
        </div>
      </div>
      {loading && <LoadableLoading />}
      <SpecialProducts speacial={speacial} />
      <GridImages />
      <SuggestedProducts suggested={suggested} />
      <SpecialComments />
      <Brands />
    </>
  );
};

export default HomePage;

{
  /* <div className="h-20 w-20">
                <img
                  className="w-full h-auto object-cover"
                  src={packingImage}
                  alt="packing"
                />
              </div>
              <div className="h-20 w-20">
                <img
                  className="w-full h-auto object-cover"
                  src={packingImage}
                  alt="packing"
                />
              </div>
              <div className="h-20 w-20">
                <img
                  className="w-full h-auto object-cover"
                  src={packingImage}
                  alt="packing"
                />
              </div>
              <div className="h-20 w-20">
                <img
                  className="w-full h-auto object-cover"
                  src={packingImage}
                  alt="packing"
                />
              </div> */
}
