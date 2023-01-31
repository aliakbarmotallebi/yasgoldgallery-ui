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

  const { order } = useContext(Order);

  const handleCreateOrder = async () => {
    console.log("create order");
    const response = await createOrder(order);
    console.log(response);
  };
  return (
    <>
      {cart.length < 1 ? (
        <CartEmpty />
      ) : (
        <div class="container mt-10">
          <div class="flex justify-center items-start my-10">
            <Outlet />
            <OrderSummary cart={cart} handleCreateOrder={handleCreateOrder} />
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
