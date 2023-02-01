import decodeToken from "helper/decodeToken";
import { setLS } from "helper/handlerLS";
import React, { useState } from "react";
import { useContext } from "react";
import { login, sendVerifyCodeToPhoneNumber } from "services/account";
import { AlertStore } from "./alert/AlertProvider";
import Spinner from "./Spinner";
import Timer from "./Timer";

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
      <div className="px-8 py-5 text-right text-gray-900 md:w-[400px]">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 fill-blue-600"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M10 11V8l5 4-5 4v-3H1v-2h9zm-7.542 4h2.124A8.003 8.003 0 0 0 20 12 8 8 0 0 0 4.582 9H2.458C3.732 4.943 7.522 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-center">ورود به حساب کاربری</h3>
        <div className="mt-4">
          {clickedForGetVerifyCode ? (
            <div>
              <div className="px-5 py-7">
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  کد فعال سازی
                </label>
                <input
                  type="text"
                  value={verifyCode}
                  onChange={(e) => setVerifyCode(e.target.value)}
                  name="code"
                  placeholder="کد فعال سازی پیامک شده را وارد کنید"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
                <button
                  type="button"
                  onClick={userLogin}
                  disabled={verifyCode.trim() === "" ? true : false}
                  className="transition flex items-center justify-center duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-yekan-bold text-center inline-block disabled:bg-gray-500 disabled:opacity-20 disabled:hover:bg-gray-500"
                >
                  {loading.loginLoading && (
                    <Spinner
                      classNameBox="w-auto"
                      classNameSvg="!w-4 !h-4 fill-white text-gray-50/50 mr-0"
                    />
                  )}
                  <div>
                    <span className="inline-block mx-2">ورود</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 inline-block"
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
              <div className="text-center">
                <Timer
                  initialMinute={2}
                  initialSeconds={0}
                  sendVerifyCode={sendVerifyCode}
                />
              </div>
            </div>
          ) : (
            <div className="px-5 py-7">
              <label className="font-yekan-bold text-sm text-gray-600 pb-1 block">
                شماره تلفن همراه
              </label>
              <input
                type="text"
                value={userPhoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                name="phoneNumber"
                placeholder="*********09"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              />
              <button
                type="button"
                disabled={userPhoneNumber.trim() === "" ? true : false}
                onClick={sendVerifyCode}
                className="transition flex items-center justify-center duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 px-4 rounded-lg text-sm shadow-sm hover:shadow-md font-yekan-bold text-center inline-block disabled:bg-gray-500 disabled:opacity-20 disabled:hover:bg-gray-500"
              >
                {loading.sendVerifyCodeLoading && (
                  <Spinner
                    classNameBox="w-auto"
                    classNameSvg="!w-4 !h-4 fill-white text-gray-50/50 mr-0"
                  />
                )}
                <div>
                  <span className="inline-block mx-2">
                    در خواست کد یکبار مصرف
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block"
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
          <div className="flex items-baseline justify-between">
            <button
              onClick={openModal}
              className="text-sm text-gray-700 underline"
            >
              انصراف
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
