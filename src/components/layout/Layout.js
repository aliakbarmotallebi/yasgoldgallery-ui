import { AlertStore } from "components/shared/alert/AlertProvider";
import { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const { showAlert, Alert } = useContext(AlertStore);
  return (
    <>
      <div className="flex flex-col mx-auto w-full min-h-screen">
        {showAlert.show && (
          <Alert text={showAlert.text} status={showAlert.status} />
        )}
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
