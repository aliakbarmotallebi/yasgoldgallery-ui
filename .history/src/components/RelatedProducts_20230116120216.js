import CardProduct from "./CardProduct";

const RelatedProducts = () => {
  return (
    <section class="bg-neutral-800 py-20">
      <div class="container mx-auto">
        <div class="text-center py-10">
          <h2 class="text-4xl font-bold text-white">
            محصولات مرتبط
            <span class="text-yellow-400">یاس</span>
          </h2>
        </div>
        <div class="grid grid-cols-5 gap-3 p-5 items-center">
          <CardProduct />

          <CardProduct />

          <CardProduct />

          <CardProduct />
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
