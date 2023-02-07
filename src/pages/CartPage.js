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
        <div class="grid grid-cols-1 lg:grid-cols-3 items-start mt-10 my-10 bg-white rounded-lg shadow-md text-black w-full max-w-4xl mx-auto">
          <Outlet />
          <OrderSummary cart={cart} />
        </div>
      )}
    </>
  );
};

export default CartPage;
