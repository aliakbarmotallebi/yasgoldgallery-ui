import {
  ADD_TO_CART,
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
function increaseProduct(product_id) {
  return {
    type: INCREASE_PRODUCT,
    payload: product_id,
  };
}
function decreaseProduct(product_id) {
  return {
    type: DECREASE_PRODUCT,
    payload: product_id,
  };
}
function removeFromCart(product_id) {
  return {
    type: REMOVE_FROM_CART,
    payload: product_id,
  };
}

export { addToCart, increaseProduct, decreaseProduct, removeFromCart };
