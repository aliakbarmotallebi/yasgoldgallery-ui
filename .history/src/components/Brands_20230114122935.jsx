const Brands = () => {
  return (
    <section class="overflow-y-auto overflow-x-hidden w-full h-80">
      <div class="flex flex-nowrap">
        <div class="w-1/3 whitespace-nowrap">
          <a
            href="#"
            class="h-80 p-36 bg-red-600 text-white text-center text-4xl font-semibold block"
            href="#"
          >
            برند یک
          </a>
        </div>
        <div class="w-1/3 whitespace-nowrap">
          <a
            href="#"
            class="h-80 bg-yellow-400 text-white text-center text-4xl font-semibold p-36 block"
          >
            برند دو
          </a>
        </div>
        <div class="w-1/3 whitespace-nowrap">
          <a
            href="#"
            class="h-80 bg-green-400 text-white text-center text-4xl font-semibold p-36 block"
          >
            برند سه
          </a>
        </div>
        <div class="w-1/3 whitespace-nowrap">
          <a
            href="#"
            class="h-80 bg-blue-600 text-white text-center text-4xl font-semibold p-36 block"
          >
            برند چهار
          </a>
        </div>
      </div>
    </section>
  );
};

export default Brands;
