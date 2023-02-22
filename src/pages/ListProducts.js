import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import CardProduct from "components/shared/CardProduct";
import LoadableLoading from "components/shared/LoadableLoading";
import {
  getAllDataWithCategory,
  getAllDataWithTag,
} from "../services/products";

const ListProducts = () => {
  const { categoryId, subCategoryId, tagId, subTagId } = useParams();
  const { pathname } = useLocation();
  const [products, setProducts] = useState([]);
  const [sideBarItems, setSideBarItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  useEffect(() => {
    const getProductsWithCategory = async () => {
      setLoading(true);
      const [products, allCategories] = await getAllDataWithCategory(
        subCategoryId || categoryId
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
  }, [pathname]);

  useEffect(() => {
    const id = categoryId || tagId;
    selectCurrentItem(sideBarItems, id);
  }, [sideBarItems]);

  function selectCurrentItem(items, currentId) {
    const item = items.find((item) => item.id === Number(currentId));
    if (item?.children?.length > 0 && (subCategoryId || subTagId)) {
      subCategoryId
        ? selectCurrentItem(item.children, subCategoryId)
        : selectCurrentItem(item.children, subTagId);
    } else {
      return setCurrentItem(item);
    }
  }
  return (
    <div className="bg-gray-100 xl:px-4 py-14">
      <div className="mx-auto container">
        <h2 className="text-center text-4xl font-bold text-gray-900">
          محصولات {currentItem?.name}
        </h2>
      </div>

      {loading ? <LoadableLoading /> : <></>}

      <div className="container xl:max-w-6xl mx-auto px-4 xl:px-0 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-y-20 gap-x-14 mt-10 mb-5 items-start">
          <div className="col-span-1">
            <ul className="shadow-lg rounded-md divide-y p-2 bg-neutral-900">
              {sideBarItems.map((item) => (
                <li
                  key={item?.id}
                  className="flex group/item relative flex-col"
                >
                  <Link
                    className={`flex-1 my-1 text-sm  group/link flex items-center justify-between rounded-sm hover:bg-black hover:text-yellow-500 transition-all duration-300 p-3 ${
                      item?.id === (currentItem?.parentId || currentItem?.id)
                        ? "text-yellow-500 bg-black"
                        : "bg-neutral-900 text-white"
                    }`}
                    to={`/products/${tagId ? "tag" : "category"}/${item?.id}/${
                      item?.slug
                    }`}
                  >
                    <span>{item?.name}</span>
                    {item?.children?.length > 0 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className=" text-yellow-500 hidden md:block translate-x-8 opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="#fff"
                          d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z"
                        />
                      </svg>
                    )}
                  </Link>
                  {item?.children?.length > 0 && (
                    <ul className="shadow-lg hidden md:z-10 group-hover/item:block md:absolute md:right-full w-[98%] mr-auto md:w-full rounded-md divide-y p-2 bg-transparent md:bg-neutral-900">
                      {item.children.map((subItem) => (
                        <li key={subItem?.id} className="flex relative">
                          <Link
                            to={`/products/${tagId ? "tag" : "category"}/${
                              item?.id
                            }/${item?.slug}/${subItem?.id}/${subItem?.slug}`}
                            className={`flex-1 my-1 text-sm flex items-center justify-between rounded-sm hover:bg-black hover:text-yellow-500 transition-all duration-300 p-3 ${
                              subItem?.id === currentItem?.id
                                ? "text-yellow-500 bg-black"
                                : "bg-neutral-900 text-white"
                            }`}
                          >
                            {subItem?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
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

export default ListProducts;
