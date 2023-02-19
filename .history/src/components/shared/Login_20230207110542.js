import decodeToken from "helper/decodeToken";
import { setLS } from "helper/handlerLS";
import React, { useState } from "react";
import { useContext } from "react";
import { login, sendVerifyCodeToPhoneNumber } from "services/account";
import { AlertStore } from "./alert/AlertProvider";
import Spinner from "./Spinner";
import Timer from "./Timer";
import Logo from "../../assets/images/logo/logo.png";

const Login = ({ setUser, openModal, setShowModal }) => {
  const [verifyCode, setVerifyCode] = useState("");
  const [userPhoneNumber, setPhoneNumber] = useState("");
  const [clickedForGetVerifyCode, setClickedForGetVerifyCode] = useState(false);
  const [loading, setLoading] = useState({
    sendVerifyCodeLoading: false,
    loginLoading: false,
  });

  const { showAlert, setShowAlert } = useContext(AlertStore);

  const sendVerifyCode = async () => {
    setLoading({ ...loading, sendVerifyCodeLoading: true });
    const res = await sendVerifyCodeToPhoneNumber(userPhoneNumber);
    if (res?.status) setClickedForGetVerifyCode(true);
    setLoading({ ...loading, sendVerifyCodeLoading: false });
  };

  const userLogin = async () => {
    setLoading({ ...loading, loginLoading: true });
    const res = await login(userPhoneNumber, verifyCode);
    if (res?.status) {
      setShowAlert({
        ...showAlert,
        show: true,
        text: "با موفقیت وارد حساب کاربری خود شدید",
        status: "success",
      });
      setLS("user", res.data);
      setUser(decodeToken("username"));
      setShowModal(false);
      setPhoneNumber("");
      setVerifyCode("");
      setClickedForGetVerifyCode(false);
    } else {
      setShowAlert({
        ...showAlert,
        show: true,
        text: res?.message,
        status: "error",
      });
    }
    setLoading({ ...loading, loginLoading: false });
  };

  return (
    <>
      <div class="max-w-sm shadow px-6 py-6 bg-white rounded-lg border mb-4">
        <div class="px-8 py-5 text-right text-gray-900 md:w-[400px]">
          <div class="flex justify-center">
            <img src={Logo} class="h-12 mb-3" alt="Logo" />
          </div>
          <h3 class="text-2xl font-bold text-center">ورود به حساب کاربری</h3>
          <div class="mt-4">
            {clickedForGetVerifyCode ? (
              <div>
                <div class="px-5 py-7">
                  <label class="font-semibold text-sm text-gray-800 pb-1 block">
                    کد فعال سازی
                  </label>
                  <input
                    type="text"
                    value={verifyCode}
                    onChange={(e) => setVerifyCode(e.target.value)}
                    name="code"
                    placeholder="کد فعال سازی پیامک شده را وارد کنید"
                    class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  />
                  <button
                    type="button"
                    onClick={userLogin}
                    disabled={verifyCode.trim() === "" ? true : false}
                    class="transition flex items-center justify-center duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-yekan-bold text-center inline-block disabled:bg-gray-500 disabled:opacity-20 disabled:hover:bg-gray-500"
                  >
                    {loading.loginLoading && (
                      <Spinner
                        classBox="w-auto"
                        classSvg="!w-4 !h-4 fill-white text-gray-50/50 mr-0"
                      />
                    )}
                    <div>
                      <span class="inline-block mx-2">ورود</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-4 h-4 inline-block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div class="text-center">
                  <Timer
                    initialMinute={2}
                    initialSeconds={0}
                    sendVerifyCode={sendVerifyCode}
                  />
                </div>
              </div>
            ) : (
              <div class="px-5 py-7">
                <label class="font-yekan-bold text-sm text-gray-800 pb-1 block">
                  شماره تلفن همراه
                </label>
                <input
                  type="text"
                  value={userPhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  name="phoneNumber"
                  placeholder="*********09"
                  class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
                <button
                  type="button"
                  disabled={userPhoneNumber.trim() === "" ? true : false}
                  onClick={sendVerifyCode}
                  class="transition flex items-center justify-center duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 px-4 rounded-lg text-sm shadow-sm hover:shadow-md font-yekan-bold text-center inline-block disabled:bg-gray-500 disabled:opacity-20 disabled:hover:bg-gray-500"
                >
                  {loading.sendVerifyCodeLoading && (
                    <Spinner
                      classBox="w-auto"
                      classSvg="!w-4 !h-4 fill-white text-gray-50/50 mr-0"
                    />
                  )}
                  <div>
                    <span class="inline-block mx-2">
                      در خواست کد یکبار مصرف
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-4 h-4 inline-block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            )}
            <div class="flex items-baseline justify-between">
              <button
                onClick={openModal}
                class="text-sm text-gray-700 underline"
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
