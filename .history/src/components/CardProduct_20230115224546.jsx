const CardProduct = () => {
  return (
    <div class="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <div className="relative">
                <img src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg" class="h-80 w-full object-cover rounded-t-xl" />
                <div className="absolute bottom-5 right-5">
                  <button class="px-2 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded inline-flex space-x-1 space-x-reverse">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-5 h-5"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z"/></svg>
                    افزدون به سبد
                  </button>
                </div>
            </div>
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  دسته بندی
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                دستبند طلا زنانه کارتیه
                </p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                    200,000,000 تومان
                    </p>
                </div>
            </div>
        </a>
    </div>
  );
};

export default CardProduct;
