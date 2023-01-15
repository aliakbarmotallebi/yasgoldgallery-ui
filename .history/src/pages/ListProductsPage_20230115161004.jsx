import CardProduct from "../components/CardProduct";

const ListProductsPage = () => {
  return (
    <div className="bg-gray-100 px-4 xl:px-4 py-14">
      <div className="mx-auto container">
        <h2 className="text-center text-4xl font-bold text-gray-900">
          تمامی محصولات
        </h2>
      </div>
            <CardProduct/>

            <CardProduct/>

            <CardProduct/>

            <CardProduct/>

            <CardProduct/>

            <CardProduct/>

            <CardProduct/>

            <CardProduct/>
        </div>
      </div>
    </div>
  );
};

export default ListProductsPage;
