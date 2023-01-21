import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ListProductsPage from "./pages/ListProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import ListPaymentsPage from "./pages/ListPaymentsPage";
import ListOrdersPage from "./pages/ListOrdersPage";

function RouterFunction() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ListProductsPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="profile/orders" element={<ListOrdersPage />} />
          <Route path="profile/payments" element={<ListPaymentsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default RouterFunction;
