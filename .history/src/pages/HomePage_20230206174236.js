import Brands from "components/main/Brands";
import GridImages from "components/main/GridImages";
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
          <div class="absolute bottom-0 left-0 w-full ">
            <div className="">
              <div className="flex justify-between mx-auto px-10 translate-y-56 max-w-4xl relative z-50">
                <div className="text-center text-white">
                  <div className="w-20 h-20">
                    <img src={createdImage} alt="createdImage" />
                  </div>
                  <p className="mt-4 font-bold">دست ساز</p>
                </div>
                <div className="text-center text-white">
                  <div className="w-20 h-20">
                    <img src={guaranteeImage} alt="guaranteeImage" />
                  </div>
                  <p className="mt-4 font-bold">ضمانت اصالت</p>
                </div>
                <div className="text-center text-white">
                  <div className="w-20 h-20">
                    <img src={deliveryImage} alt="deliveryImage" />
                  </div>
                  <p className="mt-4 font-bold">ارسال سریع</p>
                </div>
                <div className="-translate-y-4 text-center text-white">
                  <div className="w-20 h-20">
                    <img src={boxImage} alt="boxImage" />
                  </div>
                  <p className="mt-4 font-bold">بسته بندی ویژه</p>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="bg-white w-full" viewBox="0 0 1440 320">
                <path fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,154.7C384,160,480,160,576,160C672,160,768,160,864,154.7C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
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
