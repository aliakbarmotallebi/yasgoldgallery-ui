import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HandleCart from "components/shared/HandleCart";
import LoadableLoading from "components/shared/LoadableLoading";
import ProductComments from "components/productDetails/ProductComments";
import RelatedProducts from "components/productDetails/RelatedProducts";
import replaceWithBr from "helper/replaceWithBr";
import { productWithId } from "services/products";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const {
    barcode,
    coverImage,
    description,
    images,
    installment_terms,
    monthly_installment,
    prepayment,
    price,
    tags,
    title,
    wages,
  } = product;
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const productDetails = await productWithId(id);
      if (productDetails.status) {
        setProduct(productDetails.data);
        setLoading(false);
      }
    };
    getData();
  }, [id]);
  return (
    <div class="bg-[#4d4845] px-4 xl:px-4 py-14">
      {loading && <LoadableLoading />}
      <div class="container mx-auto">
        <div class="max-w-xl lg:max-w-6xl mx-auto text-neutral-900  bg-neutral-900 rounded-lg shadow-md  text-black px-5 py-6">
          <div class="flex flex-wrap -mx-4 mb-12 p-10">
            <div class="w-full lg:w-1/2 px-4">
              <div class="max-w-lg">
                <div class="flex items-center">
                  <h2 class="text-4xl text-white mb-1 ml-auto">{title}</h2>
                  {!loading && (
                    <HandleCart
                      product={product}
                      btnIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-1 fill-current"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 2a6 6 0 0 1 6 6v1h4v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.92a1 1 0 0 1-.996-.917L3.166 11H2V9h4V8a6 6 0 0 1 6-6zm6.826 9H5.173l.667 8h12.319l.667-8zM13 13v4h-2v-4h2zm-4 0v4H7v-4h2zm8 0v4h-2v-4h2zm-5-9a4 4 0 0 0-3.995 3.8L8 8v1h8V8a4 4 0 0 0-3.8-3.995L12 4z" />
                        </svg>
                      }
                      btnStyle="inline-flex items-center shuffle-click hidden sm:flex py-2 px-3 bg-brand-blue hover:opacity-70 bg-yellow-500 text-black text-xs font-semibold rounded"
                      btnText="افزودن به سبد خرید"
                    />
                  )}
                </div>

                <div class="flex">
                  {tags?.map((tag) => (
                    <Link
                      to={`/products/tag/${tag.id}/${tag.slug}`}
                      key={tag.id}
                      class="block text-sm font-bold mb-5 text-blue-600 ml-4"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>

                <span class="block text-2xl font-black text-green-500 mb-4">
                  {Number(price).toLocaleString()}
                  <span class="mr-1">تومان</span>
                </span>
                <ul class="list-inside font-medium mb-6 text-white">
                  <li>
                    <span class="text-bold after:content-[':'] ml-2">
                      بارکد
                    </span>
                    {barcode}
                  </li>
                  <li>
                    <span class="text-bold after:content-[':'] ml-2">اجرت</span>
                    {Number(wages).toLocaleString()}
                  </li>
                </ul>

                <div class="px-3 rounded-md py-4 border border-yellow-600">
                  <div class="text-base text-yellow-700 pb-4 inline-flex items-center font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="fill-yellow-600 ml-1"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                    </svg>
                    شرایط اقساط در یاس
                  </div>
                  <ul class="space-y-3 ">
                    <li>
                      <span class="font-bold after:content-[':'] text-white ml-2">
                        شرایط اقساط
                      </span>
                      <br />
                      <div
                        class="leading-7 text-white"
                        dangerouslySetInnerHTML={{
                          __html: replaceWithBr(installment_terms),
                        }}
                      ></div>
                    </li>
                    <li class="text-white">
                      <span class="font-bold after:content-[':']  ml-2">
                        پیش قسط
                      </span>
                      {Number(prepayment).toLocaleString()}
                    </li>

                    <li class="text-white">
                      <span class="font-bold after:content-[':'] ml-2">
                        قسط ماهانه
                      </span>
                      {Number(monthly_installment).toLocaleString()}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
          </div>
          <div class="px-10">
            <div>
              <div class="text-lg text-yellow-500 pb-4 inline-flex items-center font-bold">
                توضیحات
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: replaceWithBr(description) }}
                class="pb-10 text-lg leading-7 text-white"
              ></div>
            </div>
            <div class="pt-5">
              <div class="text-lg text-yellow-500 pb-4 inline-flex items-center font-bold">
                دیدگاه مشتریان یاس
              </div>
              <div class="px-4 pt-2 mt-5">
                {!loading && <ProductComments {...product} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      {!loading && <RelatedProducts {...product} />}
    </div>
  );
};

export default ProductPage;
