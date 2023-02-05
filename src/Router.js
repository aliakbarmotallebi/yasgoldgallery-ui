import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ListProductsPage from "./pages/ListProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import Cart from "components/cart/Cart";
import Checkout from "components/cart/Checkout";
import PaymentCallback from "pages/PaymentCallback";

function RouterFunction() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/payment" element={<PaymentCallback />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ListProductsPage />} />
          <Route
            path="products/tag/:tagId/:tagSlug"
            element={<ListProductsPage />}
          />
          <Route
            path="products/category/:categoryId/:categorySlug"
            element={<ListProductsPage />}
          />
          <Route path="product/:id/:slug" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />}>
            <Route index element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default RouterFunction;
