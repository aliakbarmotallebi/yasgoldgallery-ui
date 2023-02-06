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
      <div className="bg-white shadow-md rounded-md overflow-hidden flex items-center border">
        <button
          onClick={increaseCounterProduct}
          className="px-3 py-2 hover:bg-gray-100 hover:opacity-50"
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
          className="px-3 py-2 hover:bg-gray-100 hover:opacity-50"
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
      <span className="w-fit">
        <button onClick={addProductInCart} className={btnStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 fill-current" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2a6 6 0 0 1 6 6v1h4v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.92a1 1 0 0 1-.996-.917L3.166 11H2V9h4V8a6 6 0 0 1 6-6zm6.826 9H5.173l.667 8h12.319l.667-8zM13 13v4h-2v-4h2zm-4 0v4H7v-4h2zm8 0v4h-2v-4h2zm-5-9a4 4 0 0 0-3.995 3.8L8 8v1h8V8a4 4 0 0 0-3.8-3.995L12 4z"/></svg>
          {btnIcon}
          {btnText}
        </button>
      </span>
    </div>
  );
};

export default HandleCart;
