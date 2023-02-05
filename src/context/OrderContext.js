import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { CartStore } from "./CartContext";

export const Order = createContext();
const OrderContext = ({ children }) => {
  const {
    state: { cart },
  } = useContext(CartStore);

  const [order, setOrder] = useState({
    userInfo: {
      firstname: "",
      lastname: "",
    },
    address_id: null,
    products: [
      ...cart.map((product) => {
        return {
          product_id: product.productId,
          quantity: product.qty,
        };
      }),
    ],
  });

  useEffect(() => {
    setOrder({
      ...order,
      products: [
        ...cart.map((product) => {
          return {
            product_id: product.productId,
            quantity: product.qty,
          };
        }),
      ],
    });
  }, [cart]);
  return (
    <Order.Provider value={{ order, setOrder }}>{children}</Order.Provider>
  );
};

export default OrderContext;
