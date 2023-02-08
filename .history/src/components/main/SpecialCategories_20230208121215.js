import { Link } from "react-router-dom";

const SpecialCategories = ({ specialCategories }) => {
  const primary = [specialCategories[0], specialCategories.at(-1)];
  const secondary = [...specialCategories.slice(1, 3)];
  console.log(primary.slice(1, 1));
  return (
    <section className="container mx-auto">
      <div class="w-full max-w-7xl px-4 mx-auto sm:px-8 my-20 ">
        <header class="space-y-4 text-center py-10">
          <h2 class="text-3xl flex flex-col sm:flex-row items-center justify-center font-bold tracking-tighter md:text-4xl font-display">
            <p>دسته بندی های ویژه</p>
            <span className="text-yellow-400 mr-2">یاس</span>
          </h2>
        </header>
        <div class="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div class="flex flex-col jusitfy-center items-center space-y-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2  gap-4 w-full">
              {primary.slice(0, 1).map((category) => (
                <div
                  key={category?.id}
                  class="relative group flex justify-center lg:row-span-2 items-center w-full rounded-lg overflow-hidden"
                >
                  <img
                    class="object-center object-cover rounded-sm h-full w-full"
                    src={category?.imageUrl}
                    alt={category?.name}
                  />
                  <Link
                    to={`/products/category/${category?.id}/${category?.slug}`}
                    class="z-[1] focus:outline-none text-center rounded focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 absolute text-base leading-none text-gray-800 py-3 w-36 bg-white font-semibold"
                  >
                    {category?.name}
                  </Link>
                  <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-yellow-500 opacity-60"></div>
                  <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
              ))}

              <div class="flex flex-col md:flex-row xl:flex-col col-span-1 md:col-span-2 xl:col-span-1 xl:row-span-2 order-3 xl:order-2  gap-4">
                {secondary.map((category) => (
                  <div
                    key={category?.id}
                    class="relative group flex justify-center items-center max-h-56 w-full rounded-lg overflow-hidden"
                  >
                    <img
                      class="object-center object-cover rounded-sm h-full w-full"
                      src={category?.imageUrl}
                      alt={category?.name}
                    />
                    <Link
                      to={`/products/category/${category?.id}/${category?.slug}`}
                      class="z-[1] focus:outline-none text-center rounded focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 absolute text-base leading-none text-gray-800 py-3 w-36 bg-white font-semibold"
                    >
                      {category?.name}
                    </Link>
                    <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-yellow-500 opacity-60"></div>
                    <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                  </div>
                ))}
              </div>

              {primary.slice(1, 2).map((category) => (
                <div
                  key={category?.id}
                  class="relative order-2 xl:order-3 group flex justify-center lg:row-span-2 items-center w-full rounded-lg overflow-hidden"
                >
                  <img
                    class="object-center object-cover rounded-sm h-full w-full"
                    src={category?.imageUrl}
                    alt={category?.name}
                  />
                  <Link
                    to={`/products/category/${category?.id}/${category?.slug}`}
                    class="z-[1] focus:outline-none text-center rounded focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 absolute text-base leading-none text-gray-800 py-3 w-36 bg-white font-semibold"
                  >
                    {category?.name}
                  </Link>
                  <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-yellow-500 opacity-60"></div>
                  <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialCategories;
