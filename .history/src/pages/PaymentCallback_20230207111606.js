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
    dispatch(clearCart());
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
      <div class="flex flex-col justify-center items-center my-10">
        <h1
          class={`mb-6 font-bold text-3xl ${
            payment?.status === "STATUS_PAID"
              ? "text-[#007F00]"
              : "text-[#FF0000]"
          }  `}
        >
          {payment?.result}
        </h1>
        <div
          class={`bg-${
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
              strokeLinejoin="round"
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
              strokeLinejoin="round"
              class="feather feather-x-circle"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          )}
        </div>
        <table class="mt-5 w-1/2 text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody class="divide-y">
            <tr class="print:mt-4 hover:bg-gray-100">
              <th scope="col" class="text-right font-semibold px-6 py-3">
                شماره رهگیری
              </th>
              <th
                scope="col"
                class="text-left font-semibold text-blue-500 px-6 py-3"
              >
                {payment?.resnumber}
              </th>
            </tr>
            <tr class="print:mt-4 hover:bg-gray-100">
              <th scope="col" class="text-right font-semibold px-6 py-3">
                تراکنش
              </th>
              <th scope="col" class="text-left font-semibold px-6 py-3">
                {payment?.result}
              </th>
            </tr>
            <tr class="print:mt-4 hover:bg-gray-100">
              <th scope="col" class="text-right font-semibold px-6 py-3">
                مبلغ پرداختی
              </th>
              <th scope="col" class="text-left font-semibold px-6 py-3">
                {Number(payment?.amount).toLocaleString()}
              </th>
            </tr>
            <tr class="print:mt-4 hover:bg-gray-100">
              <th scope="col" class="text-right font-semibold px-6 py-3">
                تاریخ تراکنش
              </th>
              <th scope="col" class="text-left font-semibold px-6 py-3">
                {payment?.created_at}
              </th>
            </tr>
          </tbody>
        </table>
        <Link
          to="/"
          class="btn-primary bg-blue-700 text-white p-2 mt-8 rounded-md hover:bg-blue-800"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default PaymentCallback;
