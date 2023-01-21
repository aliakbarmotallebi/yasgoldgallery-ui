import { Link } from "react-router-dom";

const CardProduct = ({ coverImage, title, price, slug, productId }) => {
  return (
    <div class="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl w-full h-full">
      <div className="relative">
        <img src={coverImage} class="h-80 w-full object-cover rounded-t-xl" />
        <div className="absolute bottom-5 right-5">
          <button class="py-1 px-4 bg-white text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-current w-5 h-5 ml-2"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z" />
            </svg>
            افزدون به سبد
          </button>
        </div>
      </div>
      <div className="px-4 py-3 w-72">
        <Link to={`/products`}>
          <span className="text-gray-400 mr-3 uppercase text-xs">{slug}</span>
        </Link>
        <p className="text-lg font-bold text-black truncate block capitalize">
          <Link to={`/product/${productId}`}>{title}</Link>
        </p>
        <div className="flex items-center">
          <p className="text-md font-semibold text-black cursor-auto my-3">
            {Number(price).toLocaleString()} تومان
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
