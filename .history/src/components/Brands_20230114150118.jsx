import Image4 from "../assets/images/image4.png";

const Brands = () => {
  return (
    <section className="overflow-y-auto overflow-x-hidden w-full h-60">
      <div className="flex flex-nowrap">
        <div className="w-1/3 whitespace-nowrap">
          <a
            href="#"
            class="h-60 p-20 text-white text-center text-4xl font-semibold block"
            href="#"
          >
            برند یک
          </a>
        </div>
        <div className="w-1/3 whitespace-nowrap">
          <a
            href="#"
            class="h-60 text-white text-center text-4xl font-semibold p-20 block"
          >
            برند دو
          </a>
        </div>
        <div className="w-1/3 whitespace-nowrap">
          <a
            href="#"
            class="h-60 text-white text-center text-4xl font-semibold p-20 block"
          >
            برند سه
          </a>
        </div>
        <div className="w-1/3 whitespace-nowrap">
          <a
            href="#"
            class="h-60 text-white text-center text-4xl font-semibold p-16 flex flex-col items-center"
          >
            <div tabindex="0" class="focus:outline-none h-20 w-20 mb-4 lg:mb-0 mr-4 mb-2">
              <img src={Image4} class="h-full w-full rounded-full overflow-hidden shadow" />
            </div>
            برند چهار
          </a>

          
        </div>
      </div>
    </section>
  );
};

export default Brands;