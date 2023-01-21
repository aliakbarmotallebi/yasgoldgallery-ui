import CartContext from "./context/CartContext";
import RouterFunction from "./Router";

function App() {
  return (
    <CartContext>
      <RouterFunction />
    </CartContext>
  );
}
export default App;
