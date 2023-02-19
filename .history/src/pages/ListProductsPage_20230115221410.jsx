import CardProduct from "../components/CardProduct";

const ListProductsPage = () => {
  return (
    <div class="bg-gray-100 px-4 xl:px-4 py-14">
      <div class="mx-auto container">
        <h2 class="text-center text-4xl font-bold text-gray-900">
          تمامی محصولات
        </h2>
      </div>
      <div class="container mx-auto px-5 py-10">
        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-20 gap-x-14 mt-10 mb-5">
          <CardProduct />

          <CardProduct />

          <CardProduct />

          <CardProduct />

          <CardProduct />

          <CardProduct />

          <CardProduct />

          <CardProduct />
        </div>
      </div>
    </div>
  );
};

export default ListProductsPage;
