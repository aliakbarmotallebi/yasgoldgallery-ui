import decodeToken from "helper/decodeToken";
import { useState } from "react";

const OrderDetails = ({ orderDetails }) => {
  const [user, setUser] = useState(decodeToken("username"));
  const {
    id,
    firstname,
    lastname,
    address: { address },
    total,
    is_paid,
    products,
  } = orderDetails;
  return (
    <div className="max-w-5xl w-full  shadow px-6 py-6 bg-white rounded-lg border mb-4">
      <div className="flex flex-col justify-between">
        <div className="flex items-center justify-between pb-4">
          <div className="text-left">
            <h2 className="font-semibold text-gray-900">لیست سفارشات شما</h2>
          </div>
        </div>
        <div className=" flex justify-center flex-col">
          <div className="print:mb-5 flex items-center justify-between">
            {is_paid ? (
              <>
                <div className="text-white border border-green-700 bg-green-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2 ">
                  پرداخت شده
                </div>
                <div className="py-1 px-2 mr-2 mb-2 text-sm font-medium rounded-lg border border-gray-200 bg-gray-100 text-blue-700">
                  <span className="text-xs ml-1 font-semibold">کد رهگیری:</span>
                  235465464758565353344
                </div>
              </>
            ) : (
              <div className="text-white border border-red-700 bg-red-800 font-medium rounded-lg text-sm px-2 py-1 text-center mb-2">
                پرداخت نشده
              </div>
            )}

            <button
              // onclick="window.print()"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  className="feather feather-printer w-6 h-6"
                >
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
                <span className="mr-1 text-xs">پرینت فاکتور</span>
              </div>
            </button>
          </div>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="text-center font-semibold px-6 py-3">
                  نام و نام خانوادگی
                </th>
                <th scope="col" className="text-center font-semibold px-6 py-3">
                  آدرس سفارش
                </th>
                <th scope="col" className="text-center font-semibold px-6 py-3">
                  نام کاربری
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white print:border-y border-b hover:bg-gray-100">
                <th className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {firstname} {lastname}
                </th>
                <td className="px-6 py-4 text-center max-w-xs">{address}</td>
                <td className="px-6 py-4 text-center">{user}</td>
              </tr>
            </tbody>
          </table>

          <table className="mt-5 w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="print:mt-4">
                <th scope="col" className="text-center font-semibold px-6 py-3">
                  نام محصول
                </th>
                <th scope="col" className="text-center font-semibold px-6 py-3">
                  تعداد
                </th>
                <th scope="col" className="text-center font-semibold px-6 py-3">
                  قیمت واحد
                  <span className="text-gray-400 text-xs">(تومان)</span>
                </th>
                <th scope="col" className="text-center font-semibold px-6 py-3">
                  قیمت کل
                  <span className="text-gray-400 text-xs">(تومان)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="bg-white print:border-y border-b hover:bg-gray-100"
                >
                  <th className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.title}
                  </th>
                  <td scope="row" className="px-6 py-4 text-center">
                    {product.quantity}
                  </td>
                  <td scope="row" className="px-6 py-4 text-center">
                    {product.amount} تومان
                  </td>
                  <td scope="row" className="px-6 py-4 text-center">
                    {product.total} تومان
                  </td>
                </tr>
              ))}

              <tr className="bg-white print:border-y hover:bg-gray-100">
                <th className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  مبلغ قابل پرداخت
                  <span className="text-gray-400 text-xs">(تومان)</span>
                </th>
                <td scope="row" className="px-6 py-4 text-center"></td>
                <td scope="row" className="px-6 py-4 text-center"></td>
                <th className="px-6 py-3 text-center font-bold text-sm">
                  {total} تومان
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
