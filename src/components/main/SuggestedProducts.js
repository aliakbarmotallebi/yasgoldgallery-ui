import giftsImage from "assets/images/gifts.png";
import CardProduct from "components/shared/CardProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const SuggestedProducts = ({ suggested: suggestedProducts }) => {
  return (
    <section className="bg-neutral-800 py-20">
      <div className="container mx-auto">
        <div className="text-center py-10">
          <h2 className="text-4xl flex justify-center items-center font-bold text-white">
            <p>محصولات پیشنهادی</p>
            <span className="text-yellow-400 mr-2">یاس</span>
          </h2>
        </div>
        <div className="grid grid-cols-5 gap-3 p-5 items-center">
          <div class="max-w-sm">
            <div className="h-120 overflow-hidden flex justify-center">
              <img class="" src={giftsImage} />
            </div>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="col-span-4"
          >
            {suggestedProducts?.map((product) => (
              <SwiperSlide key={product.productId}>
                <CardProduct product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SuggestedProducts;
