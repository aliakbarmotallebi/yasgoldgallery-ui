const CardProduct = () => {
  return (
    <div class="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg"
                    alt="Product" class="h-80 w-full object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">
                  دسته بندی
                </span>
                <p class="text-lg font-bold text-black truncate block capitalize">
                دستبند طلا زنانه کارتیه
                </p>
                <div class="flex items-center">
                    <div class="ml-auto">

                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
              <h1 class="text-gray-200 font-bold text-xl">
              200,000,000 تومان
              </h1>
              <button class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Add to card</button>
            </div>
        </a>
    </div>
  );
};

export default CardProduct;
