import React, { useContext } from "react";
import { CartStore } from "../../context/CartContext";
import {
  decreaseProduct,
  increaseProduct,
  removeFromCart,
} from "../../reducer/cart/actionCreators";

const ProductInCart = ({ product }) => {
  const {
    coverImage,
    title,
    price,
    qty,
    category: { name },
  } = product;
  const { dispatch } = useContext(CartStore);
  const handleRemove = () => dispatch(removeFromCart(product));
  const handleIncrease = () => dispatch(increaseProduct(product));
  const handleDecrease = () => dispatch(decreaseProduct(product));
  return (
    <tr>
      <td className="flex gap-2 px-6 py-5">
        <div className="w-20">
          <img className="h-24 rounded-lg" src={coverImage} alt={title} />
        </div>
        <div className="flex flex-col justify-between ml-4">
          <span className="font-bold text-sm">{title}</span>
          <span className="text-red-500 text-xs">{name}</span>
          <button
            type="button"
            onClick={handleRemove}
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-rose-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-6 py-5">
        <div className="flex">
          <button onClick={handleIncrease}>
            <svg
              className="fill-current text-gray-600 w-3"
              viewBox="0 0 448 512"
            >
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </button>
          <div className="mx-2 border text-center w-8">{qty}</div>
          <button onClick={qty < 2 ? handleRemove : handleDecrease}>
            <svg
              className="fill-current text-gray-600 w-3"
              viewBox="0 0 448 512"
            >
              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </button>
        </div>
      </td>
      <td className="text-center font-semibold text-sm px-6 py-5">
        {Number(price).toLocaleString()} تومان
      </td>
      <td className="text-center font-semibold text-sm px-6 py-5">
        {(Number(price) * qty).toLocaleString()} تومان
      </td>
    </tr>
  );
};

export default ProductInCart;
