import { Link } from "react-router-dom";
import HandleCart from "./HandleCart";

const CardProduct = ({ product }) => {
  const { coverImage, title, price, slug, productId, category } = product;
  return (
    <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl w-full h-full border border-yellow-600">
      <div className="relative">
        <Link to={`/product/${productId}/${slug}`}>
          <img
            src={coverImage}
            className="max-h-60 w-full object-cover rounded-t-xl"
          />
        </Link>
      </div>
      <div className="px-4 py-1">
        <div className="flex w-full items-center justify-between flex-row-reverse bottom-5 right-5">
          <HandleCart
            product={product}
            btnStyle="py-1 px-2 bg-yellow-300 whitespace-nowrap hover:bg-yellow-400 text-black text-xs rounded active:bg-yellow-400 disabled:opacity-50 inline-flex items-center"
            btnText="افزودن به سبد"
            btnIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 fill-current"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 2a6 6 0 0 1 6 6v1h4v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.92a1 1 0 0 1-.996-.917L3.166 11H2V9h4V8a6 6 0 0 1 6-6zm6.826 9H5.173l.667 8h12.319l.667-8zM13 13v4h-2v-4h2zm-4 0v4H7v-4h2zm8 0v4h-2v-4h2zm-5-9a4 4 0 0 0-3.995 3.8L8 8v1h8V8a4 4 0 0 0-3.8-3.995L12 4z" />
              </svg>
            }
          />
          <Link to={`/products/category/${category?.id}/${category?.slug}`}>
            <span className="text-gray-400 uppercase text-xs hover:underline">
              {category?.name}
            </span>
          </Link>
        </div>

        <p className="text-lg my-2 font-bold text-black truncate block capitalize">
          <Link to={`/product/${productId}/${slug}`}>{title}</Link>
        </p>
        <div className="flex items-center">
          <p className="text-sm font-semibold text-black  cursor-auto mb-3">
            {Number(price).toLocaleString()} تومان
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
