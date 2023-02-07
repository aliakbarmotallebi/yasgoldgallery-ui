import { CartStore } from "context/CartContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductInCart from "./ProductInCart";

const Cart = () => {
  const {
    state: { cart },
  } = useContext(CartStore);
  return (
    <div class="col-span-1 lg:col-span-2 overflow-hidden">
      <div class="flex items-center justify-between border-b border-gray-50 px-4 py-5">
        <h1 class="font-semibold text-lg">سبد خرید شما</h1>
        <h2 class="font-semibold text-xs text-gray-800">
          <span className="ml-1">تعداد</span>
          {cart.reduce((total, product) => total + product.qty, 0)}
        </h2>
      </div>
      <div className="overflow-auto">
        <table className="table-auto overflow-scroll w-full text-sm text-left ">
          <thead>
            <tr>
              <th
                scope="col"
                className="font-semibold text-gray-600 text-xs uppercase text-center"
              >
                عنوان محصول
              </th>
              <th
                scope="col"
                className="font-semibold text-gray-600 text-xs uppercase text-center"
              >
                تعداد سفارش
              </th>
              <th
                scope="col"
                className="font-semibold text-gray-600 text-xs uppercase text-center"
              >
                قیمت واحد
              </th>
              <th
                scope="col"
                className="font-semibold text-gray-600 text-xs uppercase text-center"
              >
                جمع کل
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <ProductInCart key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
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
  );
};

export default Cart;
