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
    <div className="w-auto flex flex-wrap items-center gap-5 text-black ">
      <div className="bg-yellow-300 rounded overflow-hidden flex items-center">
        <button
          onClick={increaseCounterProduct}
          className="px-2 py-1 hover:bg-yellow-400"
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
        <div className="px-4 text-bold text-xs">{isProductInCart.qty}</div>
        <button
          onClick={decreaseCounterProduct}
          className="px-2 py-1 hover:bg-yellow-400"
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
    <div className="w-auto flex flex-wrap items-center gap-5">
      <button onClick={addProductInCart} className={btnStyle}>
        {btnIcon}
        {btnText}
      </button>
    </div>
  );
};

export default HandleCart;
