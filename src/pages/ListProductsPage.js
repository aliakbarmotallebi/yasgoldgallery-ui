import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardProduct from "components/shared/CardProduct";
import LoadableLoading from "components/shared/LoadableLoading";
import {
  getAllDataWithCategory,
  getAllDataWithTag,
} from "../services/products";

const ListProductsPage = () => {
  const { categoryId, tagId, tagSlug, categorySlug } = useParams();
  const [products, setProducts] = useState([]);
  const [sideBarItems, setSideBarItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [params, setParams] = useState({
    limit: 8,
    page: 1,
  });
  useEffect(() => {
    const getProductsWithCategory = async () => {
      setLoading(true);
      const [products, allCategories] = await getAllDataWithCategory(
        categoryId
      );
      if (products.status) setProducts(products.data);
      if (allCategories.status) setSideBarItems(allCategories.data);
      setLoading(false);
    };
    const getProductsWithTag = async () => {
      setLoading(true);
      const [products, allTags] = await getAllDataWithTag(tagId);
      if (products.status) setProducts(products.data);
      if (allTags.status) setSideBarItems(allTags.data);
      setLoading(false);
    };
    categoryId
      ? getProductsWithCategory(categoryId)
      : getProductsWithTag(tagId);
  }, [categoryId, tagId, params]);

  useEffect(() => {
    setCurrentItem(
      sideBarItems.find(
        (item) => item.id === (Number(categoryId) || Number(tagId))
      )
    );
  }, [sideBarItems]);

  return (
    <div className="bg-gray-100 xl:px-4 py-14">
      <div className="mx-auto container">
        <h2 className="text-center text-4xl font-bold text-gray-900">
          محصولات {currentItem?.name}
        </h2>
      </div>

      {loading ? <LoadableLoading /> : <></>}

      <div class="container xl:max-w-6xl mx-auto px-4 xl:px-0 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 gap-y-20 gap-x-14 mt-10 mb-5 items-start">
          <div className="col-span-1">
            <ul className="bg-white shadow-lg rounded-md divide-y p-2">
              {sideBarItems.map((item) => (
                <li key={item.id} className="flex relative">
                  <Link
                    className={`flex-1 my-1 text-sm ${
                      item.id == (categoryId || tagId) ? "bg-gray-100" : ""
                    } rounded-sm hover:bg-gray-100 transition-all duration-300 p-3 text-black`}
                    to={`/products/${tagId ? "tag" : "category"}/${item.id}/${
                      item.slug
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`grid gap-6 grid-cols-1 md:col-span-2 xl:col-span-3 md:grid-cols-2 xl:grid-cols-3`}
          >
            {products?.map((product) => (
              <CardProduct key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProductsPage;
