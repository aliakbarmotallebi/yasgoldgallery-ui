import CardProduct from "./CardProduct";

const RelatedProducts = () => {
    return (
        <section class="py-10">
          <div class="text-center py-10">
            <h2 class="text-4xl font-bold">
                محصولات مرتبط
            </h2>
          </div>
          <div class="grid grid-cols-5 gap-3 p-5 items-center">
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