const ListPayments = () => {
  return (
    <div class="flex flex-col justify-between tab-pane fade" id="list-payments">
      <div class="max-w-sm w-full lg:max-w-full shadow px-6 py-6 bg-white rounded-lg border mb-4">
        <div class="flex items-center justify-between pb-4">
          <div class="text-left">
            <h2 class="font-semibold text-gray-900">
              لیست تراکنش های بانکی شما
            </h2>
          </div>
        </div>
        <div class=" flex justify-center">
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
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 last:border-b-0">
                <td class="text-right px-2 py-1 font-medium text-blue-400 dark:text-white whitespace-nowrap">
                  11020101014745789966523
                </td>
                <td class="px-6 py-4 text-center">2000000 تومان</td>
                <td class="px-6 py-4 text-center">101402010405040</td>
                <td class="px-6 py-4">
                  <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                    منتشر شده
                  </span>

                  <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                    منتشر نشده
                  </span>
                </td>
                <td class="px-6 py-4">140-10-10</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 last:border-b-0">
                <td class="text-right px-2 py-1 font-medium text-blue-400 dark:text-white whitespace-nowrap">
                  11020101014745789966523
                </td>
                <td class="px-6 py-4 text-center">2000000 تومان</td>
                <td class="px-6 py-4 text-center">101402010405040</td>
                <td class="px-6 py-4">
                  <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                    منتشر شده
                  </span>

                  <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                    منتشر نشده
                  </span>
                </td>
                <td class="px-6 py-4">140-10-10</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 last:border-b-0">
                <td class="text-right px-2 py-1 font-medium text-blue-400 dark:text-white whitespace-nowrap">
                  11020101014745789966523
                </td>
                <td class="px-6 py-4 text-center">2000000 تومان</td>
                <td class="px-6 py-4 text-center">101402010405040</td>
                <td class="px-6 py-4">
                  <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                    منتشر شده
                  </span>

                  <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                    منتشر نشده
                  </span>
                </td>
                <td class="px-6 py-4">140-10-10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ListPayments;
