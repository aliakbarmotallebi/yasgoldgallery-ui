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
      <RouterFunction />
    </CartContext>
  );
}
export default App;
