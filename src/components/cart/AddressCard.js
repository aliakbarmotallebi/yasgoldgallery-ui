import AddressModal from "components/shared/AddressModal";
import Modal from "components/shared/Modal";
import Spinner from "components/shared/Spinner";
import { Order } from "context/OrderContext";
import replaceWithBr from "helper/replaceWithBr";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { deleteAddress, editAddress } from "services/address";

const AddressCard = ({ id, post_code, address, setAddresses, addresses }) => {
  const { order, setOrder } = useContext(Order);
  const [showModal, setShowModal] = useState(false);
  const [loadingEditAddress, setLoadingEditAddress] = useState(false);
  const [loadingDeleteAddress, setLoadingDeleteAddress] = useState(false);
  const [addressEdit, setAddressEdit] = useState({
    postalCode: post_code,
    address: address,
  });

  const handleEditAddress = async () => {
    setLoadingEditAddress(true);
    const response = await editAddress(
      id,
      addressEdit.address,
      addressEdit.postalCode
    );
    if (response?.status) {
      setAddresses([
        ...addresses.map((address) =>
          address.id === id ? { id, ...addressEdit } : address
        ),
      ]);
      setShowModal(false);
    }
    setLoadingEditAddress(false);
  };

  const handleDeleteAddress = async () => {
    setLoadingDeleteAddress(true);
    const response = await deleteAddress(id);
    if (response?.status) {
      setOrder({
        ...order,
        address_id:
          addresses.findIndex((address) => address.id === id) - 1 > -1
            ? addresses[addresses.findIndex((address) => address.id === id) - 1]
                .id
            : null,
      });
      setAddresses([...addresses.filter((address) => address.id !== id)]);
    }
    setLoadingDeleteAddress(true);
  };
  console.log(order);
  return (
    <>
      <div
        onClick={() => setOrder({ ...order, address_id: id })}
        className={`border relative rounded-lg p-2 cursor-pointer group ${
          order.address_id === id ? "border-black" : "border-gray-300"
        }`}
      >
        <div className="flex items-center justify-content mb-2">
          <p className="font-bold">{post_code}</p>
          <button
            type="button"
            onClick={handleDeleteAddress}
            className="bg-indigo-500 text-white opacity-0 inline-flex p-1 mr-1 rounded group-hover:opacity-100 transition-all"
          >
            {loadingDeleteAddress ? (
              <Spinner classNameSvg="mr-0 !w-4 !h-4" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-trash-2"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            )}
          </button>
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="bg-indigo-500 text-white opacity-0 inline-flex p-1 mx-2 rounded group-hover:opacity-100 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-edit"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </button>
        </div>
        <p
          className="text-[13px] text-gray-600"
          dangerouslySetInnerHTML={{
            __html: replaceWithBr(address),
          }}
        ></p>
        {order.address_id === id && (
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
        )}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <AddressModal
          title="ویرایش آدرس"
          postalCodeValue={addressEdit.postalCode}
          addressValue={addressEdit.address}
          onChangePostalCode={(e) =>
            setAddressEdit({ ...addressEdit, postalCode: e.target.value })
          }
          onChangeAddress={(e) =>
            setAddressEdit({ ...addressEdit, address: e.target.value })
          }
          textButton="ویرایش"
          handleButton={handleEditAddress}
          loadingAddressModal={loadingEditAddress}
          setLoadingAddressModal={setLoadingEditAddress}
          setShowModal={setShowModal}
        />
      </Modal>
    </>
  );
};

export default AddressCard;
