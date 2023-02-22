import Image1 from "assets/images/brands/brand_1.jpg";
import Image2 from "assets/images/brands/brand_2.jpg";
import Image3 from "assets/images/brands/brand_3.jpg";
import Image4 from "assets/images/brands/brand_4.jpg";
import Image5 from "assets/images/brands/brand_5.jpg";
import Image6 from "assets/images/brands/brand_6.jpg";
import Image7 from "assets/images/brands/brand_7.jpg";
import Image8 from "assets/images/brands/brand_8.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Brands = () => {
  return (
    <section className="container xl:max-w-6xl mx-auto px-4 xl:px-0 h-60 dark-button-swiper">
      <div className="">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          navigation
          slidesPerView={5}
          spaceBetween={30}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="col-span-4 !p-4"
        >
          <SwiperSlide>
            <div className="whitespace-nowrap p-5">
              <div className="text-center text-2xl font-semibold gap-2 flex flex-col items-center">
                <div
                  tabIndex="0"
                  className="focus:outline-none h-40 w-40 mb-4 lg:mb-0"
                >
                  <img
                    src={Image1}
                    className="h-full w-full rounded-full overflow-hidden shadow border-black border-2"
                  />
                </div>
                Chopard
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="whitespace-nowrap p-5">
              <div className="text-center text-2xl font-semibold gap-2 flex flex-col items-center">
                <div
                  tabIndex="0"
                  className="focus:outline-none h-40 w-40 mb-4 lg:mb-0"
                >
                  <img
                    src={Image2}
                    className="h-full w-full rounded-full overflow-hidden shadow border-black border-2"
                  />
                </div>
                Bvlgari
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="whitespace-nowrap p-5">
              <div className="text-center text-2xl font-semibold gap-2 flex flex-col items-center">
                <div
                  tabIndex="0"
                  className="focus:outline-none h-40 w-40 mb-4 lg:mb-0"
                >
                  <img
                    src={Image3}
                    className="h-full w-full rounded-full overflow-hidden shadow border-black border-2"
                  />
                </div>
                Chanel
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="whitespace-nowrap p-5">
              <div className="text-center text-2xl font-semibold gap-2 flex flex-col items-center">
                <div
                  tabIndex="0"
                  className="focus:outline-none h-40 w-40 mb-4 lg:mb-0"
                >
                  <img
                    src={Image4}
                    className="h-full w-full rounded-full overflow-hidden shadow border-black border-2"
                  />
                </div>
                Louis Vuitton
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="whitespace-nowrap p-5">
              <div className="text-center text-2xl font-semibold gap-2 flex flex-col items-center">
                <div
                  tabIndex="0"
                  className="focus:outline-none h-40 w-40 mb-4 lg:mb-0"
                >
                  <img
                    src={Image5}
                    className="h-full w-full rounded-full overflow-hidden shadow border-black border-2"
                  />
                </div>
                Dior
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="whitespace-nowrap p-5">
              <div className="text-center text-2xl font-semibold gap-2 flex flex-col items-center">
                <div
                  tabIndex="0"
                  className="focus:outline-none h-40 w-40 mb-4 lg:mb-0"
                >
                  <img
                    src={Image6}
                    className="h-full w-full rounded-full overflow-hidden shadow border-black border-2"
                  />
                </div>
                Cartier
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="whitespace-nowrap p-5">
              <div className="text-center text-2xl font-semibold gap-2 flex flex-col items-center">
                <div
                  tabIndex="0"
                  className="focus:outline-none h-40 w-40 mb-4 lg:mb-0"
                >
                  <img
                    src={Image7}
                    className="h-full w-full rounded-full overflow-hidden shadow border-black border-2"
                  />
                </div>
                Tiffany & Co
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="whitespace-nowrap p-5">
              <div className="text-center text-2xl font-semibold gap-2 flex flex-col items-center">
                <div
                  tabIndex="0"
                  className="focus:outline-none h-40 w-40 mb-4 lg:mb-0"
                >
                  <img
                    src={Image8}
                    className="h-full w-full rounded-full overflow-hidden shadow border-black border-2"
                  />
                </div>
                Gucci
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="whitespace-nowrap p-5">
              <div className="text-center text-2xl font-semibold gap-2 flex flex-col items-center">
                <div
                  tabIndex="0"
                  className="focus:outline-none h-40 w-40 mb-4 lg:mb-0"
                >
                  <img
                    src={Image1}
                    className="h-full w-full rounded-full overflow-hidden shadow border-black border-2"
                  />
                </div>
                Van Cleef & Arpels
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;
