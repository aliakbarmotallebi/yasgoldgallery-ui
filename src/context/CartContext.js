import React, { createContext, useReducer } from "react";
import { useEffect } from "react";
import { checkLS, setLS } from "../helper/handlerLS";
import cartReducer from "../reducer/cart/cartReducer";

export const CartStore = createContext();
const initialState = {
  cart: checkLS("cart", "array"),
};
const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    setLS("cart", state.cart);
  }, [state]);
  return (
    <CartStore.Provider value={{ state, dispatch }}>
      {children}
    </CartStore.Provider>
  );
};

export default CartContext;
