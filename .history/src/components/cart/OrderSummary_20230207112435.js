import OrderDetails from "components/profile/OrderDetails";
import Modal from "components/shared/Modal";
import Spinner from "components/shared/Spinner";
import { Order } from "context/OrderContext";
import checkOrderInfo from "helper/checkOrderInfo";
import redirect from "helper/redirect";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createOrder } from "services/order";
import { createPayment } from "services/payments";

const OrderSummary = ({ cart }) => {
  const { pathname } = useLocation();
  const [showModal, setShowModal] = useState(false);
  const { order } = useContext(Order);
  const [loading, setLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState({});

  console.log(order);

  const handleCreateOrder = async () => {
    setLoading(true);
    const response = await createOrder(order);
    if (response?.status) {
      setOrderDetails(response.data);
      setShowModal(true);
    }
    setLoading(false);
  };

  const handleCreatePayment = async () => {
    setPaymentLoading(true);
    const response = await createPayment(orderDetails.id);
    if (response.status) redirect(response.data.redirectPaymentUrl);

    setPaymentLoading(false);
  };
  return (
    <>
      <div
        id="summary"
        class="w-1/4 bg-white shadow-md  text-black rounded-l-lg sticky top-2 overflow-hidden border-r border-gray-50"
      >
        <h1 class="font-semibold text-lg border-b border-gray-50 bg-gray-50/50 px-4 py-5">
          خلاصه فاکتور
        </h1>
        <div className="px-8 py-10">
          <div class="flex justify-between mb-5">
            <span class="font-semibold text-sm uppercase">
              <span className="ml-1">تعداد سفارش</span>
              {cart.reduce((total, product) => total + product.qty, 0)}
            </span>
            <span class="font-semibold text-sm">
              {Number(
                cart.reduce(
                  (total, product) => total + product.qty * product.price,
                  0
                )
              ).toLocaleString()}
              <span className="mr-1">تومان</span>
            </span>
          </div>
          <div>
            <label class="font-medium inline-block mb-3 text-sm uppercase">
              روش پرداخت
            </label>
            <select class="block p-2 text-gray-600 w-full text-sm">
              <option>درگاه ملت</option>
            </select>
          </div>
          <div class="border-t mt-8">
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>جمع کل فاکتور</span>
              <span>
                {Number(
                  cart.reduce(
                    (total, product) => total + product.qty * product.price,
                    0
                  )
                ).toLocaleString()}
                <span className="mr-1">تومان</span>
              </span>
            </div>
            {pathname === "/cart/checkout" ? (
              <button
                disabled={checkOrderInfo(order) ? false : true}
                onClick={handleCreateOrder}
                className="bg-indigo-500 flex justify-center items-center disabled:bg-gray-300 font-semibold block text-center hover:bg-indigo-600 py-3 text-sm text-white rounded-lg uppercase w-full"
              >
                {loading && (
                  <Spinner classNameBox="w-fit ml-4" classNameSvg="!w-4" />
                )}
                <span>ادامه پرداخت</span>
              </button>
            ) : (
              <Link
                to="/cart/checkout"
                class="bg-indigo-500 font-semibold block text-center hover:bg-indigo-600 py-3 text-sm text-white rounded-lg uppercase w-full"
              >
                تکمیل اطلاعات
              </Link>
            )}
          </div>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div>
          <OrderDetails orderDetails={orderDetails} />
          <button
            onClick={handleCreatePayment}
            className="bg-indigo-500 flex justify-center items-center font-semibold block text-center hover:bg-indigo-600 py-3 text-sm text-white rounded-lg uppercase w-full"
          >
            {paymentLoading && (
              <Spinner classNameBox="w-fit ml-4" classNameSvg="!w-4" />
            )}
            پرداخت
          </button>
        </div>
      </Modal>
    </>
  );
};

export default OrderSummary;
