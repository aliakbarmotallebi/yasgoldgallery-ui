import Image1 from "./assets/images/image1.png";
import Image2 from "./assets/images/image2.png";
import Image3 from "./assets/images/image3.png";
import Image4 from "./assets/images/image4.png";
import ImageSuggest from "./assets/images/box.png";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SpecialProducts from "./components/SpecialProducts";
import SuggestedProducts from "./components/SuggestedProducts";
import Brands from "./components/Brands";
import SuggestedProducts from "./components/SuggestedProducts";


function App() {



    return (
        <div className="flex flex-col mx-auto w-full min-h-screen bg-neutral-800 text-neutral-300">
            <Header />
            <Main>
                <SpecialProducts/>
                <div class="grid grid-cols-6 col-span-2 gap-2 py-10">
                    <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                        <img class="h-full w-full object-cover "
                            src="https://dioragallery.com/images/1401/03/24/16238-2.jpg"
                            alt="" />
                    </div>
                    <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                        <img class="h-full w-full object-cover  "
                            src="https://dioragallery.com/images/1401/03/24/16635-5.jpg"
                            alt="" />
                    </div>
                    <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                        <img class="h-full w-full object-cover "
                            src="https://dioragallery.com/images/1401/03/24/16229-2.jpg"
                            alt="" />
                    </div>
                    <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                        <img class="h-full w-full object-cover "
                            src="https://dioragallery.com/images/1401/03/02/untitled-design-28.jpg"
                            alt="" />
                    </div>
                    <div class="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                        <a
                            href="#"
                            class="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">
                            مشاهده بیشتر
                        </a>
                    </div>
                </div>
                <SuggestedProducts/>
                <SpecialComments />
                <Brands />
            </Main>
            <Footer />
        </div>
    );
}

export default App;
