import { useState } from "react";
import { useEffect } from "react";
import { allPayments } from "services/payments";
import Payment from "./Payment";

const ListPayments = () => {
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    const getPayments = async () => {
      const res = await allPayments();
      if (res?.status) setPayments(res.data);
    };
    getPayments();
  }, []);
  return (
    <div
      className="flex flex-col justify-between tab-pane fade"
      id="list-payments"
    >
      <div className="w-full shadow px-6 py-6 bg-white rounded-lg border mb-4">
        <div className="flex items-center justify-between pb-4">
          <div className="text-left">
            <h2 className="font-semibold text-gray-900">
              لیست تراکنش های بانکی شما
            </h2>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto overflow-scroll w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border border-gray-200 whitespace-nowrap">
                <th scope="col" className="text-right px-6 py-3">
                  شماره تراکنش
                </th>
                <th scope="col" className="text-center px-6 py-3">
                  مبلغ تراکنش
                  <span className="text-gray-400">(تومان)</span>
                </th>
                <th scope="col" className="text-center px-6 py-3">
                  شماره سفارش
                </th>
                <th scope="col" className="text-center px-6 py-3">
                  وضعیت پرداخت
                </th>
                <th scope="col" className="text-center px-6 py-3">
                  تاریخ ایجاد
                </th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <Payment key={index} {...payment} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ListPayments;
