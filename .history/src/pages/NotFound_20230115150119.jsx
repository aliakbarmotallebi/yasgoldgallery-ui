const NotFound = () => {
  return (
    <div class="px-4 xl:px-4 py-14">
      <div class="flex flex-col items-center">
        <div class="text-indigo-400 font-bold text-8xl">404</div>
        <div class="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
          این صفحه وجود ندارد
        </div>

        <div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
          صفحه مورد نظر شما یافت نشد.
        </div>
      </div>
    </div>
  );
};
export default NotFound;
