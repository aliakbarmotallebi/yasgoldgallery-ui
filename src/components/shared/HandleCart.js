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

  console.log(cart);
  const increaseCounterProduct = () =>
    dispatch(increaseProduct(isProductInCart));

  const decreaseCounterProduct = () => {
    isProductInCart.qty > 1
      ? dispatch(decreaseProduct(isProductInCart))
      : dispatch(removeFromCart(isProductInCart));
  };
  const addProductInCart = () => dispatch(addToCart(product));

  return !!isProductInCart ? (
    <div class="w-full md:w-auto flex flex-wrap items-center pt-8 gap-5">
      <div className="bg-white shadow-md rounded-md overflow-hidden flex items-center">
        <button onClick={increaseCounterProduct} className="px-2.5 py-1">
          +
        </button>
        <div className="px-8">{isProductInCart.qty}</div>
        <button onClick={decreaseCounterProduct} className="px-2.5 py-1">
          -
        </button>
      </div>
    </div>
  ) : (
    <div class="w-full md:w-auto flex flex-wrap items-center pt-8 gap-5">
      <span className="w-fit">
        <button onClick={addProductInCart} className={btnStyle}>
          {btnIcon}
          {btnText}
        </button>
      </span>
    </div>
  );
};

export default HandleCart;
