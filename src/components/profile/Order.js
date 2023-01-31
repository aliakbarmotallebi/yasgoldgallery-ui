import Modal from "components/shared/Modal";
import Spinner from "components/shared/Spinner";
import { async } from "q";
import React, { useState } from "react";
import { detailsOrder } from "services/order";
import OrderDetails from "./OrderDetails";

const Order = ({ id, items_count, total, is_paid, created_at }) => {
  const [showModal, setShowModal] = useState(false);
  const [detalsOrder, setDetailsOrder] = useState({});
  const [loadingDetails, setLoadingDetails] = useState(false);

  const getDetailsOrder = async () => {
    setLoadingDetails(true);
    const response = await detailsOrder(id);
    if (response.status) {
      setDetailsOrder(response.data);
      setShowModal(true);
    }
    setLoadingDetails(false);
  };
  return (
    <>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 last:border-b-0">
        <th class="w-[20px] text-right px-2 py-1 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          <p className="w-full h-full text-center">{id}</p>
        </th>
        <td class="px-6 py-4 text-center">
          <p className="w-full h-full text-center">{items_count}</p>
        </td>
        <td class="px-6 py-4 text-center">
          <p className="w-full h-full text-center">{total} تومان</p>
        </td>
        <td class="px-6 py-4 text-center">
          {is_paid ? (
            <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
              پرداخت شده
            </span>
          ) : (
            <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
              پرداخت نشده
            </span>
          )}
        </td>
        <td class="px-6 py-4 text-center">{created_at}</td>
        <td class="px-6 py-4 text-center">
          <button
            onClick={getDetailsOrder}
            class="inline-flex items-center p-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 focus:outline-none"
          >
            {loadingDetails ? (
              <Spinner classNameSvg="mr-0 !w-4 !h-4" />
            ) : (
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
            )}
          </button>
        </td>
      </tr>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <OrderDetails orderDetails={detalsOrder} />
      </Modal>
    </>
  );
};

export default Order;
