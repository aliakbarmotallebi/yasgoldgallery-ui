const LoadableLoading = () => {
  return (
    <div class="flex justify-center items-center p-44">
      <div
        class="w-16 h-16 rounded-full animate-spin
                    border border-dashed border-yellow-500 border-t-transparent"
      ></div>
      <div
        class="w-12 h-12 rounded-full animate-spin
                    border-8 border-dashed border-purple-500 border-t-transparent"
      ></div>
      <div
        class="w-12 h-12 rounded-full animate-spin
                    border-x-2 border-solid border-blue-500 border-t-transparent shadow-md"
      ></div>
    </div>
  );
};

export default LoadableLoading;
