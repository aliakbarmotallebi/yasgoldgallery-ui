import { useEffect, useState } from "react";
import { productsWithCategory } from "../services/products";
import CardProduct from "./CardProduct";
import Spinner from "./shared/Spinner";
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
      if (res.status) {
        setRelatedProducts(res.data);
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <section className="py-10">
      <div className="text-center py-10">
        <h2 className="text-4xl font-bold text-neutral-800">محصولات مرتبط</h2>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-5 gap-3 p-5 items-center">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="col-span-5"
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
