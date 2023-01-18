import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import LoadableLoading from "../components/LoadableLoading";
import { lastProducts } from "../services/main";

const ListProductsPage = () => {
  const [products , setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [params , setParams] = useState({
    limit : 8,
    page : 1
  })

  useEffect(()=>{
    const getLastProducts =async () =>{
      setLoading(true);
      const res = await lastProducts(params);
      if(res.status) setProducts(res.data);
      setLoading(false);
    }
    getLastProducts();
  } , [params])
  return (
    <div className="bg-gray-100 px-4 xl:px-4 py-14">
      <div className="mx-auto container">
        <h2 className="text-center text-4xl font-bold text-gray-900">
          تمامی محصولات
        </h2>
      </div>
      
      { loading ? <LoadableLoading/> : <></>}
      
      <div class="container mx-auto px-5 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-y-20 gap-x-14 mt-10 mb-5">
          {products?.map(product => <CardProduct key={product.productId} {...product} />)}
        </div>
      </div>
    </div>
  );
};

export default ListProductsPage;
