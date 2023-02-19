import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div class="flex flex-col mx-auto w-full min-h-screen">
        <Header />
        <main class="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
