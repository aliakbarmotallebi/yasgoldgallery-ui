import CardProduct from "./CardProduct";

const SpecialProducts = () => {
  return (
    <section class="bg-neutral-100 py-10">
      <div class="text-center py-10">
        <h2 class="text-4xl font-bold text-neutral-900">
          پیشنهاد شگفت انگیز
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
    </section>
  );
};

export default SpecialProducts;
