import LoadableLoading from "components/shared/LoadableLoading";
import Modal from "components/shared/Modal";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { profile } from "services/account";

const Checkout = () => {
  const [modalAddress, setModalAddress] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [newAddress, setNewAddress] = useState({
    postalCode: "",
    address: "",
  });
  useEffect(() => {
    const getProfileInfo = async () => {
      setLoading(true);
      const response = await profile();
      if (response.status) setUserPhoneNumber(response.data.mobile);
      setLoading(false);
    };
    getProfileInfo();
  }, []);
  return (
    <>
      {loading && <LoadableLoading />}
      <div class="w-2/4 bg-white rounded-r-lg shadow-md  text-black overflow-hidden">
        <form className="grid grid-cols-2 gap-6 p-4">
          <h1 className="text-lg font-bold col-span-2">اطلاعات کاربر</h1>
          <div class="mb-6">
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              نام
              <span class="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
            </label>
            <input
              type="text"
              placeholder="نام"
              class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div class="mb-6">
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              نام خانوادگی
              <span class="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
            </label>
            <input
              type="text"
              placeholder="نام خانوادگی"
              class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div class="mb-6 col-span-2">
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              تلفن همراه
              <span class="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
            </label>
            <input
              type="text"
              disabled
              readOnly
              defaultValue={userPhoneNumber}
              class="bg-gray-200  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="grid col-span-2 grid-cols-2 gap-6">
            <h1 className="text-lg font-bold">آدرس سفارش</h1>
            <button
              type="button"
              onClick={() => setModalAddress(true)}
              className="bg-black/90 text-sm inline text-white rounded-lg p-2 w-fit mr-auto hover:bg-black"
            >
              افزودن آدرس جدید
            </button>
            <div className="border relative border-black rounded-lg p-2 cursor-pointer">
              <p className="font-bold">3861634945</p>
              <p className="text-[13px] text-gray-600">
                لورم ایپسوم متن ساختگیلورم ایپسوم متن ساختگیلورم ایپسوم متن
                ساختگیلورم ایپسوم متن ساختگی
              </p>
              <span className="absolute top-2 left-2 bg-black rounded-full p-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-check"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
            </div>
            <div className="border relative border-gray-300 rounded-lg p-2 cursor-pointer">
              <p className="font-bold">3861634945</p>
              <p className="text-[13px] text-gray-600">
                لورم ایپسوم متن ساختگیلورم ایپسوم متن ساختگیلورم ایپسوم متن
                ساختگیلورم ایپسوم متن ساختگی
              </p>
            </div>
          </div>
        </form>
      </div>
      <Modal showModal={modalAddress} setShowModal={setModalAddress}>
        <h1 className="text-center font-bold border-b pb-4">
          افزودن آدرس جدید
        </h1>
        <form className="w-[400px]">
          <div class="mb-6 col-span-2">
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              کد پستی
              <span class="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
            </label>
            <input
              type="text"
              placeholder="کد پستی"
              value={newAddress.postalCode}
              onChange={(e) =>
                setNewAddress({ ...newAddress, postalCode: e.target.value })
              }
              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div class="mb-6 col-span-2">
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              آدرس
              <span class="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
            </label>
            <textarea
              type="text"
              placeholder="آدرس"
              value={newAddress.address}
              onChange={(e) =>
                setNewAddress({ ...newAddress, address: e.target.value })
              }
              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              disabled={
                newAddress.address.trim() === "" &&
                newAddress.postalCode.trim() === ""
                  ? true
                  : false
              }
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg text-sm"
            >
              افزودن آدرس
            </button>
            <button
              onClick={() => setModalAddress(false)}
              className="text-red-500 p-2 text-sm"
            >
              انصراف
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Checkout;
