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
        className="col-span-1 text-black sticky top-2 border-r border-gray-50 grow rounded-lg overflow-hidden"
      >
        <h1 className="font-semibold text-lg border-b border-gray-50 bg-gray-50/50 px-4 py-5">
          خلاصه فاکتور
        </h1>
        <div className="px-8 py-10">
          <div className="flex justify-between mb-5">
            <span className="font-semibold text-sm uppercase">
              <span className="ml-1">تعداد سفارش</span>
              {cart.reduce((total, product) => total + product.qty, 0)}
            </span>
            <span className="font-semibold text-sm">
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
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              روش پرداخت
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>درگاه زرین پال</option>
            </select>
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
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
                className="bg-yellow-500 flex justify-center items-center disabled:bg-gray-300 font-semibold text-center hover:bg-yellow-600 py-3 text-sm text-black rounded-lg uppercase w-full"
              >
                {loading && (
                  <Spinner classNameBox="w-fit ml-4" classNameSvg="!w-4" />
                )}
                <span>ادامه پرداخت</span>
              </button>
            ) : (
              <Link
                to="/cart/checkout"
                className="bg-yellow-500 font-semibold block text-center hover:bg-yellow-600 py-3 text-sm text-black rounded-lg uppercase w-full"
              >
                تکمیل اطلاعات
              </Link>
            )}
          </div>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="max-w-4xl w-full shadow px-6 py-6 bg-white rounded-lg border">
          <OrderDetails orderDetails={orderDetails} />
          <button
            onClick={handleCreatePayment}
            className="bg-yellow-500 flex justify-center items-center font-semibold text-center hover:bg-yellow-600 py-3 text-sm text-black rounded-lg uppercase w-full print:hidden"
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
