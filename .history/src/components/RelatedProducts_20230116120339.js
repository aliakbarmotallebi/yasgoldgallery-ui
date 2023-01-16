import CardProduct from "./CardProduct";

const RelatedProducts = () => {
    return (
        <section className="py-10">
          <div className="text-center py-10">
            <h2 className="text-4xl font-bold">
                محصولات مرتبط
            </h2>
          </div>
          <div className="grid grid-cols-5 gap-3 p-5 items-center">
            <CardProduct/>
  
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