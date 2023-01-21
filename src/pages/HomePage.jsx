import Brands from "../components/Brands";
import GridImages from "../components/GridImages";
import SpecialComments from "../components/SpecialComments";
import SpecialProducts from "../components/SpecialProducts";
import SuggestedProducts from "../components/SuggestedProducts";
import Image4 from "../assets/images/image4.png";
import { useEffect, useState } from "react";
import { HomePageData } from "../services/main";
import LoadableLoading from "../components/LoadableLoading";

const HomePage = () => {
  const [speacial , setSpeacial]=useState([]);
  const [suggested , setSuggested]=useState([]);
  const [loading , setLoading] =useState(false);
    useEffect(()=>{
      const getData = async()=>{
        setLoading(true)
       const {speacialProducts, suggestedProducts} = await HomePageData();
       if(speacialProducts.status) setSpeacial(speacialProducts.data);
       if(suggestedProducts.status) setSuggested(suggestedProducts.data);
       setLoading(false)
      }
      getData();
    } , [])
  return (
    <>
      <div class="flex flex-col justify-center">
        <div class="relative h-[390px]">
          <img class="hidden sm:block w-full h-full object-cover" src="https://picsum.photos/1920/400" />
          <img class="sm:hidden w-full h-full object-cover" src="https://picsum.photos/1920/400" />
          <div class="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
            <p class="text-3xl sm:text-4xl font-semibold leading-9 text-white">
              با یاس میتونی بدرخشی 10سال تجربه
            </p>
          </div>
        </div>
      </div>
      { loading && <LoadableLoading/>}
      <SpecialProducts speacial={speacial} />
      <GridImages />
      <SuggestedProducts suggested={suggested} />
      <SpecialComments />
      <Brands />
    </>
  );
};

export default HomePage;
