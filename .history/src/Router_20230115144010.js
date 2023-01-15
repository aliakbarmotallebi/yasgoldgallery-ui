import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function RouterFunction() {
    return (
      <Layout>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="*" element={() => <h2>404 Not Found </h2>} />
            </Routes>
        </BrowserRouter>
      </Layout>
    );
  }
  
  export default RouterFunction;