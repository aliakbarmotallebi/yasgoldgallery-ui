import giftsImage from "assets/images/gifts.png";
import CardProduct from "components/shared/CardProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const SuggestedProducts = ({ suggested: suggestedProducts }) => {
  return (
    <section className="bg-neutral-800 py-20">
      <div className="container mx-auto">
        <div className="text-center pb-10">
          <h2 className="text-4xl flex  flex-col sm:flex-row justify-center items-center font-bold text-white">
            <p>محصولات پیشنهادی</p>
            <span className="text-yellow-400 sm:mr-2">یاس</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-5 items-center">
          <div class="col-span-1  hidden lg:block">
            <div className="h-120 overflow-hidden flex justify-center">
              <img class="" src={giftsImage} />
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
              slidesPerView={4}
              spaceBetween={30}
              modules={[Autoplay, Navigation]}
              navigation
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="col-span-4 !p-4 !px-6"
            >
              {suggestedProducts?.map((product) => (
                <SwiperSlide key={product.productId}>
                  <CardProduct product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuggestedProducts;
