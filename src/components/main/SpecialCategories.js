import { Link } from "react-router-dom";

const SpecialCategories = ({ specialCategories }) => {
  const primary = [specialCategories[0], specialCategories.at(-1)];
  const secondary = [...specialCategories.slice(1, 3)];
  return (
    <section className="container mx-auto">
      <div className="w-full max-w-7xl px-4 mx-auto sm:px-8 my-20 ">
        <header className="space-y-4 text-center pb-10">
          <h2 className="text-3xl flex flex-col sm:flex-row items-center justify-center font-bold tracking-tighter md:text-4xl font-display">
            <p>دسته بندی های ویژه</p>
            <span className="text-yellow-400 mr-2">یاس</span>
          </h2>
        </header>
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col jusitfy-center items-center space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-3 xl:grid-rows-2  gap-4 w-full">
              {primary.slice(0, 1).map((category, index) => (
                <div
                  key={index}
                  className="relative group flex justify-center xl:row-span-2 items-center w-full max-h-80 xl:max-h-fit rounded-lg overflow-hidden border border-yellow-500"
                >
                  <img
                    className="object-center object-cover rounded-sm h-full w-full"
                    src={category?.imageUrl}
                    alt={category?.name}
                  />
                  <Link
                    to={`/products/category/${category?.id}/${category?.slug}`}
                    className="z-[1] focus:outline-none text-center rounded focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 absolute text-base leading-none text-gray-800 py-3 w-36 bg-white font-semibold"
                  >
                    {category?.name}
                  </Link>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
              ))}

              <div className="flex flex-col md:flex-row xl:flex-col col-span-1 md:col-span-2 xl:col-span-1 xl:row-span-2 order-3 xl:order-2 xl:justify-between  gap-4">
                {secondary.map((category, index) => (
                  <div
                    key={index}
                    className="relative group flex justify-center items-center max-h-80 lg:max-h-60 w-full rounded-lg xl:flex-1 overflow-hidden border border-yellow-500"
                  >
                    <img
                      className="object-center object-cover rounded-sm h-full w-full"
                      src={category?.imageUrl}
                      alt={category?.name}
                    />
                    <Link
                      to={`/products/category/${category?.id}/${category?.slug}`}
                      className="z-[1] focus:outline-none text-center rounded focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 absolute text-base leading-none text-gray-800 py-3 w-36 bg-white font-semibold"
                    >
                      {category?.name}
                    </Link>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                  </div>
                ))}
              </div>

              {primary.slice(1, 2).map((category, index) => (
                <div
                  key={index}
                  className="relative order-2 xl:order-3 group flex justify-center xl:row-span-2 items-center w-full rounded-lg max-h-80 xl:max-h-fit overflow-hidden border border-yellow-500"
                >
                  <img
                    className="object-center object-cover rounded-sm h-full w-full"
                    src={category?.imageUrl}
                    alt={category?.name}
                  />
                  <Link
                    to={`/products/category/${category?.id}/${category?.slug}`}
                    className="z-[1] focus:outline-none text-center rounded focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 absolute text-base leading-none text-gray-800 py-3 w-36 bg-white font-semibold"
                  >
                    {category?.name}
                  </Link>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
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
