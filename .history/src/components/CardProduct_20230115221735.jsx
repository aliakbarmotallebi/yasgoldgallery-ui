const CardProduct = () => {
  return (
    <div class="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg"
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">
                  دسته بندی
                </span>
                <p class="text-lg font-bold text-black truncate block capitalize">
                دستبند طلا زنانه کارتیه
                </p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">
                    200,000,000 تومان
                    </p>
                    <div class="ml-auto">

                    </div>
                </div>
            </div>
        </a>
    </div>
  );
};

export default CardProduct;
