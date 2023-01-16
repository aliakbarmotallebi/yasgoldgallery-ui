
const RelatedProducts = () => {
    return (
        <section className="bg-neutral-800 py-20">
        <div className="container mx-auto">
          <div className="text-center py-10">
            <h2 className="text-4xl font-bold text-white">
                محصولات مرتبط
              <span className="text-yellow-400">یاس</span>
            </h2>
          </div>
          <div className="grid grid-cols-5 gap-3 p-5 items-center">
            <CardProduct/>
  
            <CardProduct/>
  
            <CardProduct/>
  
            <CardProduct/>
            
          </div>
        </div>
      </section>
    );
}

export default RelatedProducts;