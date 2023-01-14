const CardProduct = () => {
    return (
        <div class=" max-w-sm">
          <div className="relative">
            <div className="h-60 overflow-hidden group shadow-md rounded-lg">
              <a href="#">
                <img
                  class="transition-all duration-200 group-hover:scale-[1.05] group-hover:relative"
                  src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg"
                />
              </a>
            </div>
            <div className="absolute bottom-5 right-5">
              <button class="flex items-center bg-white  pl-2 pr-4 py-1 rounded-lg overflow-hidden shadow-lg w-full text-neutral-900 hover:bg-gray-200 font-medium">
                <div className="text-xs ml-4">200,000,000 تومان</div>
                <div className="font-bold mr-auto text-yellow-500 text-xs">
                  افزدون
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline fill-current"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div class="px-5 pt-4">
            <h5 class="text-sm text-gray-500 py-2">
                <a class="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
                    <span class="absolute inset-0"></span>
                    دسته بندی
                </a>
            </h5>
            <a href="#">
              <h3 class="text-white font-semibold text-lg tracking-tight text-justify">
                دستبند طلا زنانه کارتیه
              </h3>
            </a>
          </div>
          
        </div>
    );
}

export default CardProduct;