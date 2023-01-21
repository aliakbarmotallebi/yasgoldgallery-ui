import React, { useContext, useEffect, useState } from "react";
import { CartStore } from "../context/CartContext";
import {
  addToCart,
  decreaseProduct,
  increaseProduct,
} from "../reducer/cart/actionCreators";

const HandleCart = ({ product }) => {
  const { product_id } = product;
  const [isProductInCart, setProductInCart] = useState(false);
  const {
    state: { cart },
    dispatch,
  } = useContext(CartStore);
  useEffect(() => {
    setProductInCart(cart.find((product) => product.product_id === product_id));
  }, [cart]);

  console.log(cart);

  return !!isProductInCart ? (
    <div class="w-full md:w-auto flex flex-wrap items-center pt-8 gap-5">
      <div className="bg-white shadow-md rounded-md overflow-hidden flex items-center">
        <button
          onClick={() => dispatch(increaseProduct(isProductInCart))}
          className="px-2.5 py-1"
        >
          +
        </button>
        <div className="px-8">{isProductInCart.qty}</div>
        <button
          onClick={() => dispatch(decreaseProduct(isProductInCart))}
          className="px-2.5 py-1"
        >
          -
        </button>
      </div>
    </div>
  ) : (
    <div class="w-full md:w-auto flex flex-wrap items-center pt-8 gap-5">
      <button
        onClick={() => dispatch(addToCart(product))}
        class="shuffle-click hidden sm:flex py-2 px-3 bg-brand-blue hover:opacity-70 bg-blue-700 text-white text-xs font-semibold rounded"
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
};

export default HandleCart;
