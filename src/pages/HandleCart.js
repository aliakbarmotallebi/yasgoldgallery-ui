import React, { useContext, useEffect, useState } from "react";
import { CartStore } from "../context/CartContext";

const HandleCart = ({ productId }) => {
  const [isProductInCart, setProductInCart] = useState(false);
  const {
    state: { cart },
    dispatch,
  } = useContext(CartStore);
  useEffect(() => {
    setProductInCart(
      cart.filter((product) => product.product_id === productId)
    );
  }, [cart]);
  return (
    <div class="w-full md:w-auto flex flex-wrap items-center pt-8 gap-5">
      <div className="bg-white shadow-md rounded-md overflow-hidden flex items-center">
        <button className="px-2.5 py-1">+</button>
        <div>1</div>
        <button className="px-2.5 py-1">-</button>
      </div>

      <button class="shuffle-click hidden sm:flex py-2 px-3 bg-brand-blue hover:opacity-70 bg-blue-700 text-white text-xs font-semibold rounded">
        افزودن به سبد خرید
      </button>
    </div>
  );
};

export default HandleCart;
