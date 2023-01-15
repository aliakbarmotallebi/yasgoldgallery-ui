import { useState } from "react";
import CardProduct from "../components/CardProduct";
import LoadableLoading from "../components/LoadableLoading";

const ListProductsPage = () => {

  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-gray-100 px-4 xl:px-4 py-14">
      <div className="mx-auto container">
        <h2 className="text-center text-4xl font-bold text-gray-900">
          تمامی محصولات
        </h2>
      </div>
      { loading ? <LoadableLoading/> : NULL}
      
      <div class="container mx-auto px-5 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-y-20 gap-x-14 mt-10 mb-5">
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
