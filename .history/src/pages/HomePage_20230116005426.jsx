import Brands from "../components/Brands";
import GridImages from "../components/GridImages";
import SpecialComments from "../components/SpecialComments";
import SpecialProducts from "../components/SpecialProducts";
import SuggestedProducts from "../components/SuggestedProducts";
import Image4 from "../assets/images/image4.png";

const HomePage = () => {
  return (
    <>
      <div class="flex flex-col justify-center">
        <div class="relative h-[390px]">
          <img class="hidden sm:block w-full h-full" src="https://picsum.photos/id/1/1080/1080" />
          <img class="sm:hidden w-full h-full" src="https://picsum.photos/id/1/1080/1080" />
          <div class="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
            <p class="text-3xl sm:text-4xl font-semibold leading-9 text-white">
              با یاس میتونی بدرخشی 10سال تجربه
            </p>
          </div>
        </div>
      </div>
      <SpecialProducts />
      <GridImages />
      <SuggestedProducts />
      <SpecialComments />
      <Brands />
    </>
  );
};

export default HomePage;
