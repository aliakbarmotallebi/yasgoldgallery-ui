const GridImages = () => {
  return (
    <section class="container mx-auto">
      <div class="w-full max-w-7xl px-4 mx-auto sm:px-8 my-20 ">
        <header class="space-y-4 text-center">
          <h2 class="text-3xl font-bold tracking-tighter md:text-4xl font-display">
            دسته بندی محصولات
            <span class="text-yellow-400">یاس</span>
          </h2>
        </header>
        <div class="w-full relative flex items-center justify-center pt-5">
          <button
            aria-label="slide backward"
            class="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
            id="prev"
          >
            <svg
              class="dark:text-gray-900"
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div class="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <div
              id="slider"
              class="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
            >
              <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                <img
                  src="https://i.ibb.co/fDngH9G/carosel-1.png"
                  alt="black chair and white table"
                  class="object-cover object-center w-full"
                />
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                  <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                    Catalog 1
                  </h2>
                  <div class="flex h-full items-end pb-6">
                    <h3 class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                      Minimal Interior
                    </h3>
                  </div>
                </div>
              </div>
              <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                <img
                  src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                  alt="sitting area"
                  class="object-cover object-center w-full"
                />
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                  <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                    Catalog 2
                  </h2>
                  <div class="flex h-full items-end pb-6">
                    <h3 class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                      Minimal Interior
                    </h3>
                  </div>
                </div>
              </div>
              <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                <img
                  src="https://i.ibb.co/tCfVky2/carosel-3.png"
                  alt="sitting area"
                  class="object-cover object-center w-full"
                />
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                  <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                    Catalog 2
                  </h2>
                  <div class="flex h-full items-end pb-6">
                    <h3 class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                      Minimal Interior
                    </h3>
                  </div>
                </div>
              </div>
              <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                <img
                  src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                  alt="sitting area"
                  class="object-cover object-center w-full"
                />
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                  <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                    Catalog 2
                  </h2>
                  <div class="flex h-full items-end pb-6">
                    <h3 class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                      Minimal Interior
                    </h3>
                  </div>
                </div>
              </div>
              <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                <img
                  src="https://i.ibb.co/fDngH9G/carosel-1.png"
                  alt="black chair and white table"
                  class="object-cover object-center w-full"
                />
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                  <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                    Catalog 2
                  </h2>
                  <div class="flex h-full items-end pb-6">
                    <h3 class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                      Minimal Interior
                    </h3>
                  </div>
                </div>
              </div>
              <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                <img
                  src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                  alt="sitting area"
                  class="object-cover object-center w-full"
                />
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                  <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                    Catalog 2
                  </h2>
                  <div class="flex h-full items-end pb-6">
                    <h3 class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                      Minimal Interior
                    </h3>
                  </div>
                </div>
              </div>
              <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                <img
                  src="https://i.ibb.co/tCfVky2/carosel-3.png"
                  alt="sitting area"
                  class="object-cover object-center w-full"
                />
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                  <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                    Catalog 2
                  </h2>
                  <div class="flex h-full items-end pb-6">
                    <h3 class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                      Minimal Interior
                    </h3>
                  </div>
                </div>
              </div>
              <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                <img
                  src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                  alt="sitting area"
                  class="object-cover object-center w-full"
                />
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                  <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                    Catalog 2
                  </h2>
                  <div class="flex h-full items-end pb-6">
                    <h3 class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                      Minimal Interior
                    </h3>
                  </div>
                </div>
              </div>
              <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                <img
                  src="https://i.ibb.co/fDngH9G/carosel-1.png"
                  alt="black chair and white table"
                  class="object-cover object-center w-full"
                />
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                  <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                    Catalog 2
                  </h2>
                  <div class="flex h-full items-end pb-6">
                    <h3 class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                      Minimal Interior
                    </h3>
                  </div>
                </div>
              </div>
              <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                <img
                  src="https://i.ibb.co/DWrGxX6/carosel-2.png"
                  alt="sitting area"
                  class="object-cover object-center w-full"
                />
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                  <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                    Catalog 2
                  </h2>
                  <div class="flex h-full items-end pb-6">
                    <h3 class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                      Minimal Interior
                    </h3>
                  </div>
                </div>
              </div>
              <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                <img
                  src="https://i.ibb.co/tCfVky2/carosel-3.png"
                  alt="sitting area"
                  class="object-cover object-center w-full"
                />
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                  <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                    Catalog 2
                  </h2>
                  <div class="flex h-full items-end pb-6">
                    <h3 class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                      Minimal Interior
                    </h3>
                  </div>
                </div>
              </div>
              <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                <img
                  src="https://i.ibb.co/rFsGfr5/carosel-4.png"
                  alt="sitting area"
                  class="object-cover object-center w-full"
                />
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                  <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                    Catalog 2
                  </h2>
                  <div class="flex h-full items-end pb-6">
                    <h3 class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                      Minimal Interior
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridImages;
