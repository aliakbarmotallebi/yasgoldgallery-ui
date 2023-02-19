import Alert from "components/shared/alert/Alert";
import { AlertStore } from "components/shared/alert/AlertProvider";
import ScrollToTop from "components/shared/ScrollToTop";
import { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const { showAlert } = useContext(AlertStore);
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col mx-auto w-full min-h-screen bg-white text-black">
        {showAlert.show && (
          <Alert text={showAlert.text} status={showAlert.status} />
        )}
        <Header />
        <main className="flex-grow mt-16 lg:mt-0">{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
