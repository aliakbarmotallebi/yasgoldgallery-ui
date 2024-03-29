import React from "react";
import Spinner from "./Spinner";

const AddressModal = ({
  onChangePostalCode,
  onChangeAddress,
  handleButton,
  textButton,
  postalCodeValue,
  addressValue,
  loadingAddressModal,
  title,
  setShowModal,
}) => {
  return (
    <>
      <div className="max-w-xl w-full shadow px-6 py-6 bg-white rounded-lg border mb-4">
        <h1 className="text-center font-bold bg-white border-b pb-4 mb-4">
          {title}
        </h1>
        <form className="w-full">
          <div className="mb-6 col-span-2">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              کد پستی
              <span className="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
            </label>
            <input
              type="text"
              placeholder="کد پستی"
              value={postalCodeValue}
              onChange={onChangePostalCode}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="mb-6 col-span-2">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              آدرس
              <span className="inline-flex bg-red-500 w-1 h-1 rounded-full mr-1"></span>
            </label>
            <textarea
              rows={4}
              type="text"
              placeholder="آدرس"
              value={addressValue}
              onChange={onChangeAddress}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              disabled={
                addressValue.trim() === "" || postalCodeValue.trim() === ""
                  ? true
                  : false
              }
              onClick={handleButton}
              className="bg-yellow-500 flex items-center justify-center hover:bg-yellow-600 disabled:bg-gray-300 text-black p-2 rounded-lg text-sm"
            >
              {loadingAddressModal && (
                <Spinner classBox="w-fit ml-2" classSvg="!w-4" />
              )}
              {textButton}
            </button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="text-red-500 p-2 text-sm"
            >
              انصراف
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddressModal;
