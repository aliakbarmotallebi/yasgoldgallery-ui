import Image1 from "assets/images/brands/brand_1.jpg";
import Image2 from "assets/images/brands/brand_2.jpg";
import Image3 from "assets/images/brands/brand_3.jpg";
import Image4 from "assets/images/brands/brand_4.jpg";
import Image5 from "assets/images/brands/brand_5.jpg";

const Brands = () => {
  return (
    <section className="overflow-y-auto overflow-x-hidden w-full h-60">
      <div className="flex gap-2 items-center justify-between flex-nowrap">
        <div className="whitespace-nowrap p-5">
          <a
            href="#"
            class="text-center text-2xl font-semibold gap-2 flex flex-col items-center"
          >
            <div tabindex="0" class="focus:outline-none h-40 w-40 mb-4 lg:mb-0">
              <img
                src={Image1}
                class="h-full w-full rounded-full overflow-hidden shadow"
              />
            </div>
            برند یک
          </a>
        </div>
        <div className="whitespace-nowrap p-5">
          <a
            href="#"
            class="text-center text-2xl font-semibold gap-2 flex flex-col items-center"
          >
            <div tabindex="0" class="focus:outline-none h-40 w-40 mb-4 lg:mb-0">
              <img
                src={Image2}
                class="h-full w-full rounded-full overflow-hidden shadow"
              />
            </div>
            Bvlgari 
          </a>
        </div>
        <div className="whitespace-nowrap p-5">
          <a
            href="#"
            class="text-center text-2xl font-semibold gap-2 flex flex-col items-center"
          >
            <div tabindex="0" class="focus:outline-none h-40 w-40 mb-4 lg:mb-0">
              <img
                src={Image3}
                class="h-full w-full rounded-full overflow-hidden shadow"
              />
            </div>
            Chanel
          </a>
        </div>
        <div className="whitespace-nowrap p-5">
          <a
            href="#"
            class="text-center text-2xl font-semibold gap-2 flex flex-col items-center"
          >
            <div tabindex="0" class="focus:outline-none h-40 w-40 mb-4 lg:mb-0">
              <img
                src={Image4}
                class="h-full w-full rounded-full overflow-hidden shadow"
              />
            </div>
            برند چهار
          </a>
        </div>
        <div className="whitespace-nowrap p-5">
          <a
            href="#"
            class="text-center text-2xl font-semibold gap-2 flex flex-col items-center"
          >
            <div tabindex="0" class="focus:outline-none h-40 w-40 mb-4 lg:mb-0">
              <img
                src={Image5}
                class="h-full w-full rounded-full overflow-hidden shadow"
              />
            </div>
            برند پنج
          </a>
        </div>
      </div>
    </section>
  );
};

export default Brands;