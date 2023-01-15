import Image4 from "../assets/images/image4.png";

const GridImages = () => {
  return (
    <section className="container mx-auto">
      <div class="w-full max-w-7xl px-4 mx-auto sm:px-8 my-20 ">
        <header class="space-y-4 text-center py-10">
          <h2 class="text-3xl font-bold tracking-tighter md:text-4xl font-display">
            دسته بندی محصولات
            <span className="text-yellow-400">یاس</span>
          </h2>
        </header>
        <div class="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div class="flex flex-col jusitfy-center items-center space-y-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
              <div class="relative group flex justify-center items-center h-full w-full rounded-lg overflow-hidden">
                <img
                  class="object-center object-cover rounded-sm h-full w-full"
                  src="https://picsum.photos/400/400"
                  alt="girl-image"
                />
                <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base leading-none text-gray-800 py-3 w-36 bg-white font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex w-5 h-5 self-center" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z"/></svg>
                  انگشتر
                </button>
                <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>

              <div class="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <div class="relative group flex justify-center items-center h-full w-full rounded-lg overflow-hidden">
                  <img
                    class="object-center object-cover rounded-sm h-full w-full"
                    src="https://picsum.photos/400/400"
                    alt="shoe-image"
                  />
                  <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base leading-none text-gray-800 py-3 w-36 bg-white font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex w-5 h-5 self-center" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z"/></svg>
                    دستبند
                  </button>
                  <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
                <div class="relative group flex justify-center items-center h-full w-full rounded-lg overflow-hidden">
                  <img
                    class="object-center object-cover rounded-sm h-full w-full"
                    src="https://picsum.photos/400/400"
                    alt="watch-image"
                  />
                  <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base leading-none text-gray-800 py-3 w-36 bg-white font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex w-5 h-5 self-center" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z"/></svg>
                    گردنبند
                  </button>
                  <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
              </div>

              <div class="relative group justify-center items-center h-full w-full hidden lg:flex rounded-lg overflow-hidden">
                <img
                  class="object-center object-cover rounded-sm h-full w-full"
                  src="https://picsum.photos/400/400"
                  alt="girl-image"
                />
                <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base leading-none text-gray-800 py-3 w-36 bg-white font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex w-5 h-5 self-center" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z"/></svg>
                  نگین
                </button>
                <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridImages;
