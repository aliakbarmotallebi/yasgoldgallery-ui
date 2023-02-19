import { useEffect, useState } from "react";
import { productsWithCategory } from "../../services/products";
import CardProduct from "../shared/CardProduct";
import Spinner from "../shared/Spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const RelatedProducts = ({ category: { id } }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await productsWithCategory(id);
      if (res?.status) {
        setRelatedProducts(res.data);
      }
      setLoading(false);
    };
    getData();
  }, []);
  return (
    <section class="py-10">
      <div class="text-center py-10">
        <h2 class="text-4xl font-bold text-white">محصولات مرتبط</h2>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div class="items-center container xl:max-w-6xl mx-auto px-4 xl:px-0">
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
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
            slidesPerView={5}
            spaceBetween={30}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            class="col-span-5 !p-4"
          >
            {relatedProducts.map((product) => (
              <SwiperSlide key={product.productId}>
                <CardProduct product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default RelatedProducts;
