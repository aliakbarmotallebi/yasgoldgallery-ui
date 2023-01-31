import OrderContext from "context/OrderContext";
import { useEffect } from "react";
import CartContext from "./context/CartContext";
import checkExpireUser from "./helper/checkExpireUser";
import RouterFunction from "./Router";

function App() {
  useEffect(() => {
    checkExpireUser();
  }, []);
  return (
    <CartContext>
      <OrderContext>
        <RouterFunction />
      </OrderContext>
    </CartContext>
  );
}
export default App;
