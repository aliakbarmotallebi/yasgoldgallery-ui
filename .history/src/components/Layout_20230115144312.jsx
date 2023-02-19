import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div class="flex flex-col mx-auto w-full min-h-screen bg-[#4d4845] text-neutral-300">
        <Header />

        <main class="h-full">{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
