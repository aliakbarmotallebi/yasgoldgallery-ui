import { useState } from "react";
import { useEffect } from "react";
import { getAllOrders } from "services/order";
import LoadableLoading from "components/shared/LoadableLoading";
import Order from "./Order";

const ListOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getOrders = async () => {
      setLoading(true);
      const response = await getAllOrders();
      if (response?.status) {
        setOrders(response.data);
      }
      setLoading(false);
    };
    getOrders();
  }, []);
  return (
    <>
      {loading && <LoadableLoading />}
      <div class="flex flex-col justify-between tab-pane fade" id="list-orders">
        <div class="max-w-sm w-full lg:max-w-full shadow px-6 py-6 bg-white rounded-lg border mb-4">
          <div class="flex items-center justify-between pb-4">
            <div class="text-left">
              <h2 class="font-semibold text-gray-900">لیست سفارشات شما</h2>
            </div>
          </div>
          <div class=" flex justify-center overflow-hidden">
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
                {orders.map((order) => (
                  <Order key={order.id} {...order} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default ListOrders;
