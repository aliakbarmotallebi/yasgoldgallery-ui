import AddressModal from "components/shared/AddressModal";
import LoadableLoading from "components/shared/LoadableLoading";
import Modal from "components/shared/Modal";
import Spinner from "components/shared/Spinner";
import { CartStore } from "context/CartContext";
import { Order } from "context/OrderContext";
import replaceWithBr from "helper/replaceWithBr";
import { async } from "q";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createNewAddress } from "services/address";
import { getCheckoutData } from "services/checkout";
import AddressCard from "./AddressCard";

const Checkout = () => {
  const {
    state: { cart },
  } = useContext(CartStore);
  const { order, setOrder } = useContext(Order);
  const [modalAddress, setModalAddress] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [mobile, setMobile] = useState("");
  const [loadingAddressModal, setLoadingAddressModal] = useState(false);

  const [newAddress, setNewAddress] = useState({
    postalCode: "",
    address: "",
  });

  useEffect(() => {
    const getProfileInfo = async () => {
      setLoading(true);
      const [phoneNumber, addresses] = await getCheckoutData();
      if (phoneNumber.status) setMobile(phoneNumber.data.mobile);
      if (addresses.status) {
        setAddresses(addresses.data);
        setOrder({ ...order, address_id: addresses?.data[0]?.id });
      }

      setLoading(false);
    };
    getProfileInfo();
  }, []);

  const handleCreateAddress = async () => {
    setLoadingAddressModal(true);
    const response = await createNewAddress(
      newAddress.address,
      newAddress.postalCode
    );
    if (response.status) {
      setAddresses([...addresses, { ...response.data }]);
      setOrder({ ...order, address_id: response.data.id });
      setModalAddress(false);
      setNewAddress({
        postalCode: "",
        address: "",
      });
    }
    setLoadingAddressModal(false);
  };

  return (
    <>
      {loading && <LoadableLoading />}
      <div class="w-2/4 bg-white rounded-r-lg shadow-md  text-black overflow-hidden">
        <form className="grid grid-cols-2 gap-6 p-4">
          <h1 className="text-lg font-bold col-span-2">اطلاعات کاربر</h1>
          <div class="mb-6">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              نام
              <span class="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="نام"
              value={order.userInfo.firstname}
              onChange={(e) =>
                setOrder({
                  ...order,
                  userInfo: { ...order.userInfo, firstname: e.target.value },
                })
              }
              class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div class="mb-6">
            <label
              for="family"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              نام خانوادگی
              <span class="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
            </label>
            <input
              value={order.userInfo.lastname}
              onChange={(e) =>
                setOrder({
                  ...order,
                  userInfo: { ...order.userInfo, lastname: e.target.value },
                })
              }
              id="family"
              type="text"
              placeholder="نام خانوادگی"
              class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div class="mb-6 col-span-2">
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              تلفن همراه
              <span class="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
            </label>
            <input
              type="text"
              id="phone"
              disabled
              readOnly
              defaultValue={mobile}
              class="bg-gray-200  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="grid col-span-2 grid-cols-2 gap-6">
            <h1 className="text-lg font-bold">آدرس سفارش</h1>
            <button
              type="button"
              onClick={() => setModalAddress(true)}
              className="bg-black/90 flex items-center justify-center text-sm inline text-white rounded-lg p-2 w-fit mr-auto hover:bg-black"
            >
              افزودن آدرس جدید
            </button>
            {addresses.map((address) => (
              <AddressCard
                key={address.id}
                {...address}
                setAddresses={setAddresses}
                addresses={addresses}
              />
            ))}
          </div>
        </form>
      </div>
      <Modal showModal={modalAddress} setShowModal={setModalAddress}>
        <AddressModal
          onChangePostalCode={(e) =>
            setNewAddress({ ...newAddress, postalCode: e.target.value })
          }
          onChangeAddress={(e) =>
            setNewAddress({ ...newAddress, address: e.target.value })
          }
          postalCodeValue={newAddress.postalCode}
          addressValue={newAddress.address}
          textButton="افزودن آدرس"
          title="افزودن آدرس جدید"
          handleButton={handleCreateAddress}
          loadingAddressModal={loadingAddressModal}
          setLoadingAddressModal={setLoadingAddressModal}
          setShowModal={setModalAddress}
        />
      </Modal>
    </>
  );
};

export default Checkout;
