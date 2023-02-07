import { Link } from "react-router-dom";
import HandleCart from "./HandleCart";

const CardProduct = ({ product }) => {
  const {
    coverImage,
    title,
    price,
    slug,
    productId,
    category: { name, id, slug: slugCategory },
  } = product;
  return (
    <div class="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl w-full h-full border border-yellow-600">
      <div className="relative">
        <Link to={`/product/${productId}/${slug}`}>
          <img
            src={coverImage}
            class="max-h-60 w-full object-cover rounded-t-xl"
          />
        </Link>
        <div className="absolute bottom-5 right-5">
          <HandleCart
            product={product}
            btnStyle="py-1 px-4 bg-white text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center"
            btnText="افزودن به سبد"
            btnIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current w-5 h-5 ml-2"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z" />
              </svg>
            }
          />
        </div>
      </div>
      <div className="px-4 py-1">
        <Link to={`/products/category/${id}/${slugCategory}`}>
          <span class="inline-flex bg-blue-800 w-1 h-1 rounded-full"></span>
          <span className="text-blue-800 mr-1 uppercase text-xs font-bold hover:underline">
            {name}
          </span>
        </Link>
        <p className="text-lg my-2 font-bold text-black truncate block capitalize">
          <Link to={`/product/${productId}/${slug}`}>{title}</Link>
        </p>
        <div className="flex items-center">
          <p className="text-md font-semibold text-black cursor-auto mb-3">
            {Number(price).toLocaleString()} تومان
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
