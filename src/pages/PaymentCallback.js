import LoadableLoading from "components/shared/LoadableLoading";
import { CartStore } from "context/CartContext";
import { removeDataLS } from "helper/handlerLS";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { clearCart } from "reducer/cart/actionCreators";
import { checkPayment } from "services/payments";

const PaymentCallback = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [payment, setPayment] = useState({});
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(CartStore);

  useEffect(() => {
    // dispatch(clearCart());
    const getCheckPayment = async () => {
      setLoading(true);
      const response = await checkPayment(searchParams.get("resnumber"));
      if (response?.status) setPayment(response.data);
      setLoading(false);
    };
    getCheckPayment();
  }, []);
  return loading ? (
    <LoadableLoading />
  ) : (
    <div class="max-w-3xl w-full shadow bg-white rounded-lg border mb-4 mt-10 mx-auto">
      <div class="flex flex-col justify-center items-center m-4 sm:m-10">
        <h1
          className={`mb-6 font-bold text-3xl ${
            payment?.status === "STATUS_PAID"
              ? "text-[#007F00]"
              : "text-[#FF0000]"
          }  `}
        >
          {payment?.result}
        </h1>
        <div
          className={`bg-${
            payment?.status === "STATUS_PAID" ? "green" : "red"
          }-100 p-8 rounded-full`}
        >
          {payment?.status === "STATUS_PAID" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="green"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-check-circle"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x-circle"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          )}
        </div>
        <div className="overflow-x-auto w-full">
          <table className="mt-5 table-auto overflow-scroll w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody className="divide-y">
              <tr className="print:mt-4 hover:bg-gray-100">
                <th
                  scope="col"
                  className="text-right font-semibold px-6 py-3 sticky right-0 bg-white"
                >
                  شماره رهگیری
                </th>
                <th
                  scope="col"
                  className="text-left font-semibold text-blue-500 px-6 py-3"
                >
                  000000000000000000000000000001040831
                </th>
              </tr>
              <tr className="print:mt-4 hover:bg-gray-100">
                <th
                  scope="col"
                  className="text-right font-semibold px-6 py-3 sticky right-0 bg-white"
                >
                  تراکنش
                </th>
                <th scope="col" className="text-left font-semibold px-6 py-3">
                  {payment?.result}
                </th>
              </tr>
              <tr className="print:mt-4 hover:bg-gray-100">
                <th
                  scope="col"
                  className="text-right font-semibold px-6 py-3 sticky right-0 bg-white"
                >
                  مبلغ پرداختی
                </th>
                <th scope="col" className="text-left font-semibold px-6 py-3">
                  {Number(payment?.amount).toLocaleString()}
                </th>
              </tr>
              <tr className="print:mt-4 hover:bg-gray-100">
                <th
                  scope="col"
                  className="text-right font-semibold px-6 py-3 sticky right-0 bg-white"
                >
                  تاریخ تراکنش
                </th>
                <th scope="col" className="text-left font-semibold px-6 py-3">
                  {payment?.created_at}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <Link
          to="/"
          className="btn-primary bg-blue-700 text-white p-2 mt-8 rounded-md hover:bg-blue-800"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default PaymentCallback;
