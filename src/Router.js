import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ListProducts from "./pages/ListProducts";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import Cart from "components/cart/Cart";
import Checkout from "components/cart/Checkout";
import HelpPage from "pages/HelpPage";
import PrivacyPage from "pages/PrivacyPage";
import PaymentCallback from "pages/PaymentCallback";
import TermsAndConditions from "pages/TermsAndConditions";

function RouterFunction() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/payment" element={<PaymentCallback />} />
          <Route path="about" element={<AboutPage />} />
          <Route
            path="products/tag/:tagId/:tagSlug"
            element={<ListProducts />}
          />
          <Route
            path="products/tag/:tagId/:tagSlug/:subTagId/:subTagSlug"
            element={<ListProducts />}
          />
          <Route
            path="products/category/:categoryId/:categorySlug"
            element={<ListProducts />}
          />
          <Route
            path="products/category/:categoryId/:categorySlug/:subCategoryId/:subCategorySlug"
            element={<ListProducts />}
          />
          <Route path="product/:id/:slug" element={<ProductPage />} />

          <Route path="cart" element={<CartPage />}>
            <Route index element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="helper" element={<HelpPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default RouterFunction;
