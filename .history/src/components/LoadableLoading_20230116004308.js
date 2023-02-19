const LoadableLoading = () => {
  return (
    <div class="bg-white inset-0 fixed w-full h-full z-20 backdrop-blur	">
      <div class="flex justify-center items-center min-h-screen">
        <div
          class="w-16 h-16 rounded-full animate-spin
                    border-2  border-yellow-500 border-t-transparent"
        ></div>
      </div>
    </div>
  );
};

export default LoadableLoading;
