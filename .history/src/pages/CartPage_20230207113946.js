import Cart from "components/cart/Cart";
import CartEmpty from "components/cart/CartEmpty";
import OrderSummary from "components/cart/OrderSummary";
import { useContext, useState } from "react";
import { CartStore } from "context/CartContext";
import { Outlet } from "react-router-dom";
import { createOrder } from "services/order";
import { Order } from "context/OrderContext";

const CartPage = () => {
  const {
    state: { cart },
  } = useContext(CartStore);

  return (
    <>
      {cart.length < 1 ? (
        <CartEmpty />
      ) : (
        <div class="container mt-10">
          <div class="flex justify-center items-center my-10 bg-white rounded-r-lg shadow-md  text-black ">
            <Outlet />
            <OrderSummary cart={cart} />
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
