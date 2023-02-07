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
    <div class="flex flex-col justify-between tab-pane fade" id="list-payments">
      <div class="w-full shadow px-6 py-6 bg-white rounded-lg border mb-4">
        <div class="flex items-center justify-between pb-4">
          <div class="text-left">
            <h2 class="font-semibold text-gray-900">
              لیست تراکنش های بانکی شما
            </h2>
          </div>
        </div>
        <div class=" flex justify-center overflow-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr class="border border-gray-200">
                <th scope="col" class="text-right px-6 py-3">
                  شماره تراکنش
                </th>
                <th scope="col" class="text-center px-6 py-3">
                  مبلغ تراکنش
                  <span class="text-gray-400">(تومان)</span>
                </th>
                <th scope="col" class="text-center px-6 py-3">
                  شماره سفارش
                </th>
                <th scope="col" class="text-center px-6 py-3">
                  وضعیت پرداخت
                </th>
                <th scope="col" class="text-center px-6 py-3">
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
