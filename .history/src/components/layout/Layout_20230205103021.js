import { AlertStore } from "components/shared/alert/AlertProvider";
import { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const { showAlert, setShowAlert, Alert } = useContext(AlertStore);
  return (
    <>
      <div class="flex flex-col mx-auto w-full min-h-screen min-h-screen bg-[#4d4845] text-neutral-300">
        {showAlert.show && (
          <Alert text={showAlert.text} status={showAlert.status} />
        )}
        <Header />
        <main class="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
