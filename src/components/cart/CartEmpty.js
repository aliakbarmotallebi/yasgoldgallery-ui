import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
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
  );
};

export default CartEmpty;
