const CartPage = () => {
  return (
    <div class="container mx-auto mt-10">
      <div class="flex shadow-md my-10">
        <div class="w-3/4 bg-white rounded-r-lg text-black overflow-hidden">
          <div class="flex items-center justify-between border-b border-gray-50 bg-gray-50/50 px-4 py-5">
            <h1 class="font-semibold text-lg">سبد خرید شما</h1>
            <h2 class="font-semibold text-xs text-gray-800">تعداد 3</h2>
          </div>
          <div class="flex mt-10 mb-5 px-10 py-10">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
              عنوان محصول
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              تعداد سفارش
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              قیمت واحد
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              جمع کل
            </h3>
          </div>
          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
              <div class="w-20">
                <img
                  class="h-24"
                  src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                  alt=""
                />
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">ستبند-طلا-اسپرت-کارتیه</span>
                <span class="text-red-500 text-xs">دسته بندی</span>
                <a
                  href="#"
                  class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  حذف
                </a>
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>

              <input
                class="mx-2 border text-center w-8"
                type="text"
                value="1"
              />

              <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">
              2,000,000 تومان
            </span>
            <span class="text-center w-1/5 font-semibold text-sm">
              2,000,000 تومان
            </span>
          </div>

          <a
            href="/products"
            class="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              class="fill-current ml-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            ادامه خرید از فروشگاه
          </a>
        </div>

        <div
          id="summary"
          class="w-1/4 bg-white text-black rounded-l-lg overflow-hidden border-r border-gray-50"
        >
          <h1 class="font-semibold text-lg border-b border-gray-50 bg-gray-50/50 px-4 py-5">
            خلاصه فاکتور
          </h1>
          <div class="px-8 py-10">
            <div class="flex justify-between mt-10 mb-5">
              <span class="font-semibold text-sm uppercase">تعداد سفارش 3</span>
              <span class="font-semibold text-sm">2,000,000 تومان</span>
            </div>
            <div>
              <label class="font-medium inline-block mb-3 text-sm uppercase">
                روش پرداخت
              </label>
              <select class="block p-2 text-gray-600 w-full text-sm">
                <option>درگاه ملت</option>
              </select>
            </div>
            <div class="border-t mt-8">
              <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>جمع کل فاکتور</span>
                <span>2,000,000 تومان</span>
              </div>
              <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                ورود به درگاه
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
