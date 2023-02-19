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
  );
};

export default ListProductsPage;
