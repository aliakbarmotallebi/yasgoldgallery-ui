import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadableLoading from "../components/LoadableLoading";
import RelatedProducts from "../components/RelatedProducts";
import { CartStore } from "../context/CartContext";
import replaceWithBr from "../helper/replaceWithBr";
import { productWithId } from "../services/main";
import HandleCart from "./HandleCart";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const {
    barcode,
    coverImage,
    description,
    images,
    productId,
    installment_terms,
    monthly_installment,
    prepayment,
    price,
    tags,
    title,
    wages,
  } = product;
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await productWithId(id);
      if (res.status) setProduct(res.data);
      setLoading(false);
    };
    getProduct();
  }, [id]);

  return (
    <div class="bg-gray-100 px-4 xl:px-4 py-14">
      {loading && <LoadableLoading />}
      <div className="container mx-auto">
        <div class="max-w-xl lg:max-w-6xl mx-auto text-neutral-900">
          <div class="flex flex-wrap -mx-4 mb-12">
            <div class="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div class="lg:w-112">
                <div
                  class="relative group block mb-6 h-96 w-full bg-blueGray-900 rounded-md"
                  href="#"
                >
                  <div class="absolute top-0 left-0 h-full w-full transform -translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                    <img
                      class="img-fluid w-full h-full object-cover rounded-md border-2 border-black"
                      src={coverImage}
                      alt={title}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 -mb-3 justify-start">
                  {images?.map((image, index) => (
                    <div key={index} class="w-1/6 xs:w-1/4 px-3 mb-3">
                      <a
                        class="relative group block h-16 w-full bg-blueGray-900 rounded-md"
                        href="#"
                      >
                        <div class="absolute top-0 left-0 h-full w-full transform -translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                          <img
                            class="img-fluid w-full h-full object-cover rounded-md border-2 border-black"
                            src={image}
                            alt={title}
                          />
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4">
              <div class="max-w-lg">
                <h2 class="text-4xl font-black mb-1">{title}</h2>
                <div className="flex">
                  {tags?.map((tag) => (
                    <span
                      key={tag.id}
                      class="block text-sm font-bold mb-5 text-blue-600 ml-4"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <span class="block text-2xl font-black text-green-500 mb-4">
                  {Number(price).toLocaleString()}
                  <span className="mr-1">تومان</span>
                </span>
                <ul class="list-inside font-medium mb-6">
                  <li>
                    <span className="text-bold after:content-[':'] text-neutral-800 ml-2">
                      بارکد
                    </span>
                    {barcode}
                  </li>
                  <li>
                    <span className="text-bold after:content-[':'] text-neutral-800 ml-2">
                      اجرت
                    </span>
                    {Number(wages).toLocaleString()}
                  </li>
                </ul>

                <div className="bg-white shadow-lg px-3 rounded-md py-4">
                  <div className="text-sm text-blue-700 pb-2">
                    شرایط اقساط در یاس
                  </div>
                  <ul class="list-inside font-medium">
                    <li>
                      <span className="font-bold after:content-[':'] text-neutral-800 ml-2">
                        شرایط اقساط
                      </span>
                      <br />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: replaceWithBr(installment_terms),
                        }}
                      ></div>
                    </li>
                    <li>
                      <span className="font-bold after:content-[':'] text-neutral-800 ml-2">
                        پیش قسط
                      </span>
                      {Number(prepayment).toLocaleString()}
                    </li>

                    <li>
                      <span className="font-bold after:content-[':'] text-neutral-800 ml-2">
                        قسط ماهانه
                      </span>
                      {Number(monthly_installment).toLocaleString()}
                    </li>
                  </ul>
                </div>
                <HandleCart productId={id} />
              </div>
            </div>
          </div>
          <div class="mb-8 border-b border-blue-600">
            <div class="flex flex-col md:flex-row -mb-px">
              <div class="inline-block px-2 pb-2 mb-3 md:mb-0 text-lg font-black text-blue-600 border-b-2 border-blue-600">
                توضیحات
              </div>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: replaceWithBr(description) }}
            className="pb-10 text-lg"
          ></div>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductPage;
