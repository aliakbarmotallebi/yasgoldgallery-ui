import React from "react";

const Payment = ({ resnumber, amount, order_id, status, created_at }) => {
  return (
    <tr className="bg-white whitespace-nowrap">
      <td className="text-right px-2 py-1 font-medium text-blue-400 whitespace-nowrap">
        {resnumber}
      </td>
      <td className="px-6 py-4 text-center">
        {Number(amount).toLocaleString()} تومان
      </td>
      <td className="px-6 py-4 text-center">{order_id}</td>
      <td className="px-6 py-4 text-center">
        {status === "STATUS_PAID" ? (
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
            پرداخت موفق
          </span>
        ) : (
          <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
            پرداخت ناموفق
          </span>
        )}
      </td>
      <td className="px-6 py-4">{created_at}</td>
    </tr>
  );
};

export default Payment;
