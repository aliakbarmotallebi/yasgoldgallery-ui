const CardProduct = () => {
  return (
    <div class=" max-w-sm">
      <div class="relative">
        <div class="h-60 overflow-hidden group shadow-md rounded-lg">
          <a href="#">
            <img
              class="transition-all duration-200 group-hover:scale-[1.05] group-hover:relative"
              src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg"
            />
          </a>
        </div>
        <div class="absolute bottom-5 right-5">
          <button class="flex items-center bg-white  pl-2 pr-4 py-1 rounded-lg overflow-hidden shadow-lg w-full text-neutral-900 hover:bg-gray-200 font-medium">
            <div class="text-xs ml-4">200,000,000 تومان</div>
            <div class="font-bold mr-auto text-yellow-500 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M6 9h13.938l.5-2H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1V4H2V2h3a1 1 0 0 1 1 1v6zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              </svg>
            </div>
          </button>
        </div>
        <div class="absolute top-5 right-5">
          <h5 class="text-xs text-gray-500 py-2">
            <a class="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
              دسته بندی
            </a>
          </h5>
        </div>
      </div>
      <div class="px-5 pt-4">
        <a href="#">
          <h3 class="text-white font-semibold text-lg tracking-tight text-justify">
            دستبند طلا زنانه کارتیه
          </h3>
        </a>
      </div>
    </div>
  );
};

export default CardProduct;
