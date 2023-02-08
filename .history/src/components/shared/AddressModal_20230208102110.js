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
  setLoadingAddressModal,
  setShowModal,
}) => {
  return (
    <>
      <div className="max-w-xl w-full shadow px-6 py-6 bg-white rounded-lg border mb-4">
        <h1 className="text-center font-bold bg-white border-b pb-4 mb-4">
          {title}
        </h1>
        <form className="w-full">
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
              value={postalCodeValue}
              onChange={onChangePostalCode}
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
              rows={4}
              type="text"
              placeholder="آدرس"
              value={addressValue}
              onChange={onChangeAddress}
              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
              className="bg-blue-600 flex items-center justify-center hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg text-sm"
            >
              {loadingAddressModal && (
                <Spinner classNameBox="w-fit ml-2" classNameSvg="!w-4" />
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
