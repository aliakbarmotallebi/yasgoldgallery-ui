import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductInCart from "../components/cart/ProductInCart";
import { CartStore } from "../context/CartContext";

const CartPage = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartStore);

  return (
    <>
      {cart.length < 1 ? (
        <div className="mx-auto my-10 max-w-xl">
          <div className=" bg-white rounded-lg shadow-md  text-black">
            <div className="text-center px-5 py-6 flex gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-16 h-16 fill-current"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
              </svg>
              <div>
                <div className="text-lg font-semibold text-gray-900">
                  سبد خرید شما خالی است!
                </div>
                <div className="text-gray-700 text-center">
                  می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:
                  <Link
                    to="/products"
                    class="flex font-semibold text-indigo-600 text-sm mb-4 mt-2"
                  >
                    <svg
                      class="fill-current ml-2 text-indigo-600 w-4"
                      viewBox="0 0 448 512"
                    >
                      <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"></path>
                    </svg>
                    ادامه خرید از فروشگاه
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="container mt-10">
          <div class="flex justify-center my-10">
            <div class="w-2/4 bg-white rounded-r-lg shadow-md  text-black overflow-hidden">
              <div class="flex items-center justify-between border-b border-gray-50 bg-gray-50/50 px-4 py-5">
                <h1 class="font-semibold text-lg">سبد خرید شما</h1>
                <h2 class="font-semibold text-xs text-gray-800">
                  <span className="ml-1">تعداد</span>{" "}
                  {cart.reduce((total, product) => total + product.qty, 0)}
                </h2>
              </div>
              <div class="flex mt-10 mb-5 px-10">
                <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  عنوان محصول
                </h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  تعداد سفارش
                </h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  قیمت واحد
                </h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  جمع کل
                </h3>
              </div>
              {cart.map((product) => (
                <ProductInCart key={product.id} product={product} />
              ))}
              <Link
                to="/products"
                class="flex font-semibold text-indigo-600 text-sm mt-10 mb-4 mr-10"
              >
                <svg
                  class="fill-current ml-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                ادامه خرید از فروشگاه
              </Link>
            </div>

            <div
              id="summary"
              class="w-1/4 bg-white shadow-md  text-black rounded-l-lg overflow-hidden border-r border-gray-50"
            >
              <h1 class="font-semibold text-lg border-b border-gray-50 bg-gray-50/50 px-4 py-5">
                خلاصه فاکتور
              </h1>
              <div className="px-8 py-10">
                <div class="flex justify-between mt-10 mb-5">
                  <span class="font-semibold text-sm uppercase">
                    <span className="ml-1">تعداد سفارش</span>
                    {cart.reduce((total, product) => total + product.qty, 0)}
                  </span>
                  <span class="font-semibold text-sm">
                    {Number(
                      cart.reduce(
                        (total, product) => total + product.qty * product.price,
                        0
                      )
                    ).toLocaleString()}
                    <span className="mr-1">تومان</span>
                  </span>
                </div>
                <div>
                  <label class="font-medium inline-block mb-3 text-sm uppercase">
                    روش پرداخت
                  </label>
                  <select class="block p-2 text-gray-600 w-full text-sm">
                    <option>درگاه ملت</option>
                  </select>
                </div>
                <div class="border-t mt-8">
                  <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>جمع کل فاکتور</span>
                    <span>
                      {Number(
                        cart.reduce(
                          (total, product) =>
                            total + product.qty * product.price,
                          0
                        )
                      ).toLocaleString()}
                      <span className="mr-1">تومان</span>
                    </span>
                  </div>
                  <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white rounded-lg uppercase w-full">
                    ورود به درگاه
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
