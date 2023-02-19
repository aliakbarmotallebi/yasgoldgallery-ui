import ImageSuggest from "../assets/images/box.png";
import CardProduct from "./CardProduct";

const SuggestedProducts = () => {
  return (
    <section class="bg-neutral-700 py-12">
      <div class="container mx-auto">
        <div class="text-center py-10">
          <h2 class="text-4xl font-bold text-neutral-900">
            محصولات پیشنهادی
            <span class="text-yellow-400">یاس</span>
          </h2>
        </div>
        <div class="grid grid-cols-5 gap-3 p-5 items-center">
          <div class=" max-w-sm">
            <div class="h-120 overflow-hidden flex justify-center">
              <img class="" src={ImageSuggest} />
            </div>
          </div>
          <CardProduct />
        </div>
      </div>
    </section>
  );
};

export default SuggestedProducts;
