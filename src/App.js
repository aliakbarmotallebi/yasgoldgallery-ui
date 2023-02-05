import AlertProvider from "components/shared/alert/AlertProvider";
import OrderContext from "context/OrderContext";
import UserContext from "context/UserContext";
import { useEffect } from "react";
import CartContext from "./context/CartContext";
import checkExpireUser from "./helper/checkExpireUser";
import RouterFunction from "./Router";

function App() {
  useEffect(() => {
    checkExpireUser();
  }, []);
  return (
    <UserContext>
      <AlertProvider time={3000}>
        <CartContext>
          <OrderContext>
            <RouterFunction />
          </OrderContext>
        </CartContext>
      </AlertProvider>
    </UserContext>
  );
}
export default App;
