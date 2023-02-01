import { setLS } from "../../helper/handlerLS";
import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE_PRODUCT,
  INCREASE_PRODUCT,
  REMOVE_FROM_CART,
} from "./actionTypes";

const cartReducer = (state, action) => {
  let newCart = [];
  switch (action.type) {
    case ADD_TO_CART:
      newCart = [...state.cart, { ...action.payload, qty: 1 }];
      break;
    case INCREASE_PRODUCT:
      newCart = [
        ...state.cart.map((product) =>
          product.productId === action.payload.productId
            ? { ...product, qty: product.qty + 1 }
            : { ...product }
        ),
      ];
      break;

    case DECREASE_PRODUCT:
      newCart = [
        ...state.cart.map((product) =>
          product.productId === action.payload.productId
            ? { ...product, qty: product.qty - 1 }
            : { ...product }
        ),
      ];
      break;
    case REMOVE_FROM_CART:
      newCart = [
        ...state.cart.filter(
          (product) => product.productId !== action.payload.productId
        ),
      ];
    case CLEAR_CART:
      newCart = [];
  }
  setLS("cart", newCart);
  return {
    ...state,
    cart: newCart,
  };
};
export default cartReducer;
