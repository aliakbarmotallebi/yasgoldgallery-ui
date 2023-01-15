const CardProduct = () => {
    return (
        <div class="max-w-sm">
          <div className="relative">

            
      <div class="container mx-auto px-5 py-10">
        <div class="flex flex-wrap gap-5">
        <div class="bg-white rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
    <div class="p-4">
      <spna class="bg-red-500 py-2 px-4 text-sm font-semibold text-white rounded-full cursor-pointer">-30% Sale</spna>
      <h1 class="mt-4 text-3xl font-bold hover:underline cursor-pointer">Super Books</h1>
      <p class="mt-2 font-sans text-gray-700">by Diseño Constructivo</p>
    </div>
    <div class="relative">
      <img class="w-80" src={Image4} />
      <p class="absolute text-lg transform translate-x-20 -translate-y-24 bg-blue-600 text-white py-3 px-6 rounded-full cursor-pointer hover:scale-105 duration-500">Comprar ahora</p>
    </div>
  </div>
</div>
          
        </div>
    );
}

export default CardProduct;