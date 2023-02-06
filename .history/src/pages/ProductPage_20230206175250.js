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
      <div className="container mx-auto">
        <div class="max-w-xl lg:max-w-6xl mx-auto text-neutral-900  bg-white rounded-lg shadow-md  text-black px-5 py-6">
          <div class="flex flex-wrap -mx-4 mb-12">
            <div class="w-full lg:w-1/2 px-4">
              <div class="max-w-lg">
                <h2 class="text-4xl font-black mb-1">{title}</h2>
                <div className="flex">
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

                <div className="px-3 rounded-md py-4">
                  <div className="text-base text-yellow-700 pb-2 inline-flex items-center font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-yellow-600 ml-2" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/></svg>
                    شرایط اقساط در یاس
                  </div>
                  <ul class="list-inside font-medium list-disc">
                    <li>
                      <span className="font-bold after:content-[':'] text-neutral-800 ml-2">
                        شرایط اقساط
                      </span>
                      <br />
                      <div
                      className="leading-7"
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
                {!loading && (
                  <HandleCart
                    product={product}
                    btnStyle="shuffle-click hidden sm:flex py-2 px-3 bg-brand-blue hover:opacity-70 bg-blue-700 text-white text-xs font-semibold rounded"
                    btnText="افزودن به سبد خرید"
                  />
                )}
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
          <div class="mb-8 border-b border-blue-600">
            <div class="flex flex-col md:flex-row -mb-px">
              <div class="inline-block px-2 pb-2 mb-3 md:mb-0 text-lg font-black text-blue-600 border-b-2 border-blue-600">
                توضیحات
              </div>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: replaceWithBr(description) }}
            className="pb-10 text-lg leading-7"
          ></div>
         
        </div>
      </div>

      <div class="bg-white rounded-lg px-4 pt-2 max-w-3xl mx-auto mt-5">
            {!loading && <ProductComments {...product} />}
      </div>

      {!loading && <RelatedProducts {...product} />}
    </div>
  );
};

export default ProductPage;
