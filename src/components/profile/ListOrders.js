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
      <div
        className="flex flex-col justify-between tab-pane fade"
        id="list-orders"
      >
        <div className="w-full shadow px-2 xl:px-6 py-6 bg-white rounded-lg border mb-4">
          <div className="flex items-center justify-between pb-4">
            <div className="text-left">
              <h2 className="font-semibold text-gray-900">لیست سفارشات شما</h2>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto overflow-scroll w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="border border-gray-200 whitespace-nowrap">
                  <th scope="col" className="text-right px-6 py-3">
                    شماره سفارش
                  </th>
                  <th scope="col" className="text-center px-6 py-3">
                    تعداد
                  </th>
                  <th scope="col" className="text-center px-6 py-3">
                    قیمت کل
                  </th>
                  <th scope="col" className="text-center px-6 py-3">
                    وضعیت پرداخت
                  </th>
                  <th scope="col" className="text-center px-6 py-3">
                    تاریخ ایجاد
                  </th>
                  <th scope="col" className="text-center px-6 py-3">
                    جزییات سفارش
                  </th>
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
