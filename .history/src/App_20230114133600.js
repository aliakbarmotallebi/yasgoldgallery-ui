import Image1 from "./assets/images/image1.png";
import Image2 from "./assets/images/image2.png";
import Image3 from "./assets/images/image3.png";
import Image4 from "./assets/images/image4.png";
import ImageSuggest from "./assets/images/box.png";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SpecialProducts from "./components/SpecialProducts";
import SuggestedProducts from "./components/SuggestedProducts";
import Brands from "./components/Brands";
import SpecialComments from "./components/SpecialComments";
import GridImages from "./components/GridImages";

function App() {
  return (
    <div class="flex flex-col mx-auto w-full min-h-screen bg-neutral-800 text-neutral-300">
      <Header />
      <Main>
        <SpecialProducts />
        <GridImages />
        <SuggestedProducts />
        <SpecialComments />
        <Brands />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
