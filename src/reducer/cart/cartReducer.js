import {
  ADD_TO_CART,
  DECREASE_PRODUCT,
  INCREASE_PRODUCT,
  REMOVE_FROM_CART,
} from "./actionTypes";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case INCREASE_PRODUCT:
      return {
        ...state,
        cart: [
          ...state.cart.map((product) =>
            product.productId === action.payload.productId
              ? { ...product, qty: product.qty + 1 }
              : { ...product }
          ),
        ],
      };
    case DECREASE_PRODUCT:
      return {
        ...state,
        cart: [
          ...state.cart.map((product) =>
            product.productId === action.payload.productId
              ? { ...product, qty: product.qty - 1 }
              : { ...product }
          ),
        ],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [
          ...state.cart.filter((product) => product.id !== action.payload),
        ],
      };
  }
};
export default cartReducer;
