import React, { useContext, useEffect, useState } from "react";
import { CartStore } from "../../context/CartContext";
import {
  addToCart,
  decreaseProduct,
  increaseProduct,
  removeFromCart,
} from "../../reducer/cart/actionCreators";

const HandleCart = ({ product, btnStyle, btnText, btnIcon }) => {
  const { productId } = product;
  const [isProductInCart, setProductInCart] = useState(false);
  const {
    state: { cart },
    dispatch,
  } = useContext(CartStore);
  useEffect(() => {
    setProductInCart(cart.find((product) => product.productId === productId));
  }, [cart]);

  const increaseCounterProduct = () =>
    dispatch(increaseProduct(isProductInCart));

  const decreaseCounterProduct = () => {
    isProductInCart.qty > 1
      ? dispatch(decreaseProduct(isProductInCart))
      : dispatch(removeFromCart(isProductInCart));
  };
  const addProductInCart = () => dispatch(addToCart(product));

  return !!isProductInCart ? (
    <div class="w-full md:w-auto flex flex-wrap items-center gap-5 text-black ">
      <div class="bg-white shadow-md rounded-md overflow-hidden flex items-center border">
        <button
          onClick={increaseCounterProduct}
          class="px-3 py-2 hover:bg-gray-100 hover:opacity-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
          </svg>
        </button>
        <div class="px-4 text-bold text-xs">{isProductInCart.qty}</div>
        <button
          onClick={decreaseCounterProduct}
          class="px-3 py-2 hover:bg-gray-100 hover:opacity-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M5 11h14v2H5z" />
          </svg>
        </button>
      </div>
    </div>
  ) : (
    <div class="w-full md:w-auto flex flex-wrap items-center gap-5">
      <button onClick={addProductInCart} class={btnStyle}>
        {btnIcon}
        {btnText}
      </button>
    </div>
  );
};

export default HandleCart;
