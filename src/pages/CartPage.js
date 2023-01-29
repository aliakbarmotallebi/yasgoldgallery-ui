import Cart from "components/cart/Cart";
import CartEmpty from "components/cart/CartEmpty";
import OrderSummary from "components/cart/OrderSummary";
import { useContext } from "react";
import { CartStore } from "context/CartContext";
import { Outlet } from "react-router-dom";

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
          <div class="flex justify-center items-start my-10">
            <Outlet />
            <OrderSummary cart={cart} />
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
