import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => {
    return (
        <>
            <div className="flex flex-col mx-auto w-full min-h-screen bg-[#4d4845] text-neutral-300">
                <Header />
                <main >
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}
export default Layout;