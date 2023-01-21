import React, { createContext, useReducer } from "react";
import cartReducer from "../reducer/cart/cartReducer";

export const CartStore = createContext();
const initialState = {
  cart: [],
};
const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartStore.Provider value={{ state, dispatch }}>
      {children}
    </CartStore.Provider>
  );
};

export default CartContext;
