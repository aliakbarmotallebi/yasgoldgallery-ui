const Brands = () => {
  return (
    <section class="overflow-y-auto overflow-x-hidden w-full h-60">
      <div class="flex flex-nowrap">
        <div class="w-1/3 whitespace-nowrap">
          <a
            href="#"
            class="h-60 p-20 text-white text-center text-4xl font-semibold block"
            href="#"
          >
            برند یک
          </a>
        </div>
        <div class="w-1/3 whitespace-nowrap">
          <a
            href="#"
            class="h-60 text-white text-center text-4xl font-semibold p-20 block"
          >
            برند دو
          </a>
        </div>
        <div class="w-1/3 whitespace-nowrap">
          <a
            href="#"
            class="h-60 text-white text-center text-4xl font-semibold p-20 block"
          >
            برند سه
          </a>
        </div>
        <div class="w-1/3 whitespace-nowrap">
          <div
            tabIndex="0"
            class="focus:outline-none h-20 w-20 mb-4 lg:mb-0 mr-4"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_5.png"
              alt="man avatar"
              class="h-full w-full rounded-full overflow-hidden shadow"
            />
          </div>
          <a
            href="#"
            class="h-60 text-white text-center text-4xl font-semibold p-20 block"
          >
            برند چهار
          </a>
        </div>
      </div>
    </section>
  );
};

export default Brands;
