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
        <div class="flex flex-wrap gap-5">
          <div class="bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
            <div class="p-4">
              <spna class="bg-red-500 py-2 px-4 text-sm font-semibold text-white rounded-full cursor-pointer">
                -30% Sale
              </spna>
              <h1 class="mt-4 text-3xl font-bold hover:underline cursor-pointer">
                Super Books
              </h1>
              <p class="mt-2 font-sans text-gray-700">by Diseño Constructivo</p>
            </div>
            <div class="relative">
              <img
                class="w-80"
                src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
              />
              <p class="absolute text-lg transform translate-x-20 -translate-y-24 bg-blue-600 text-white py-3 px-6 rounded-full cursor-pointer hover:scale-105 duration-500">
                Comprar ahora
              </p>
            </div>
          </div>
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
