import { useState } from "react";
import Modal from "./Modal";
import OrderDetails from "./OrderDetails";

const ListOrders = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div class="flex flex-col justify-between tab-pane fade" id="list-orders">
        <div class="max-w-sm w-full lg:max-w-full shadow px-6 py-6 bg-white rounded-lg border mb-4">
          <div class="flex items-center justify-between pb-4">
            <div class="text-left">
              <h2 class="font-semibold text-gray-900">لیست سفارشات شما</h2>
            </div>
          </div>
          <div class=" flex justify-center">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr class="border border-gray-200">
                  <th scope="col" class="text-right px-6 py-3">
                    شماره سفارش
                  </th>
                  <th scope="col" class="text-center px-6 py-3">
                    تعداد
                  </th>
                  <th scope="col" class="text-center px-6 py-3">
                    قیمت کل
                  </th>
                  <th scope="col" class="text-center px-6 py-3">
                    وضعیت پرداخت
                  </th>
                  <th scope="col" class="text-center px-6 py-3">
                    تاریخ ایجاد
                  </th>
                  <th scope="col" class="text-center px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 last:border-b-0">
                  <th class="w-[20px] text-right px-2 py-1 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    102010101400504
                  </th>
                  <td class="px-6 py-4 text-center">10</td>
                  <td class="px-6 py-4 text-center">20000 تومان</td>
                  <td class="px-6 py-4 text-center">
                    <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                      پرداخت شده
                    </span>

                    <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                      پرداخت نشده
                    </span>
                  </td>
                  <td class="px-6 py-4 text-center">1401-10-10</td>
                  <td class="px-6 py-4 text-center">
                    <button
                      onClick={() => setShowModal(true)}
                      class="inline-flex items-center p-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M9.342 18.782l-1.931-.518.787-2.939a10.988 10.988 0 0 1-3.237-1.872l-2.153 2.154-1.415-1.415 2.154-2.153a10.957 10.957 0 0 1-2.371-5.07l1.968-.359C3.903 10.812 7.579 14 12 14c4.42 0 8.097-3.188 8.856-7.39l1.968.358a10.957 10.957 0 0 1-2.37 5.071l2.153 2.153-1.415 1.415-2.153-2.154a10.988 10.988 0 0 1-3.237 1.872l.787 2.94-1.931.517-.788-2.94a11.072 11.072 0 0 1-3.74 0l-.788 2.94z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <OrderDetails />
      </Modal>
    </>
  );
};
export default ListOrders;
