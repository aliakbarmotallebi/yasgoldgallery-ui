import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE_PRODUCT,
  INCREASE_PRODUCT,
  REMOVE_FROM_CART,
} from "./actionTypes";

function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}
function increaseProduct(product) {
  return {
    type: INCREASE_PRODUCT,
    payload: product,
  };
}
function decreaseProduct(product_id) {
  return {
    type: DECREASE_PRODUCT,
    payload: product_id,
  };
}
function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
}
function clearCart() {
  return {
    type: CLEAR_CART,
  };
}

export {
  addToCart,
  increaseProduct,
  decreaseProduct,
  removeFromCart,
  clearCart,
};
