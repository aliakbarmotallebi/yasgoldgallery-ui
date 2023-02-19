const GridImages = () => {
  return (
    <section class="container mx-auto">
      <div class="grid grid-cols-6 col-span-2 gap-2 py-20">
        <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
          <img
            class="h-full w-full object-cover "
            src="https://dioragallery.com/images/1401/03/24/16238-2.jpg"
            alt=""
          />
        </div>
        <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
          <img
            class="h-full w-full object-cover  "
            src="https://dioragallery.com/images/1401/03/24/16635-5.jpg"
            alt=""
          />
        </div>
        <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
          <img
            class="h-full w-full object-cover "
            src="https://dioragallery.com/images/1401/03/24/16229-2.jpg"
            alt=""
          />
        </div>
        <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
          <img
            class="h-full w-full object-cover "
            src="https://dioragallery.com/images/1401/03/02/untitled-design-28.jpg"
            alt=""
          />
        </div>
        <div class="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
          <a
            href="#"
            class="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center"
          >
            مشاهده بیشتر
          </a>
        </div>
      </div>
    </section>
  );
};

export default GridImages;
