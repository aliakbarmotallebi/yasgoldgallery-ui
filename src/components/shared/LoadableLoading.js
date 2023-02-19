const LoadableLoading = () => {
  return (
    <div class="bg-white/40 inset-0 fixed w-full h-full z-50 backdrop-blur	">
      <div class="flex justify-center items-center min-h-screen">
        <div class="w-16 h-16 rounded-full animate-spin border-4  border-yellow-500 border-t-transparent"></div>
      </div>
    </div>
  );
};

export default LoadableLoading;
