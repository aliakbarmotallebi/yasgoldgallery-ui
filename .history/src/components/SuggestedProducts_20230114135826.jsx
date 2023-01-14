import ImageSuggest from "../assets/images/box.png";
import CardProduct from "./CardProduct";

const SuggestedProducts = () => {
  return (
    <section className="bg-neutral-700 py-20">
      <div className="container mx-auto">
        <div className="text-center py-10">
          <h2 className="text-4xl font-bold text-white">
            محصولات پیشنهادی
            <span className="text-yellow-400">یاس</span>
          </h2>
        </div>
        <div className="grid grid-cols-5 gap-3 p-5 items-center">
          <div class=" max-w-sm">
            <div className="h-120 overflow-hidden flex justify-center">
              <img class="" src={ImageSuggest} />
            </div>
          </div>
            <CardProduct/>        
          </div>
      </div>
    </section>
  );
};

export default SuggestedProducts;
