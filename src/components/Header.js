import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartStore } from "../context/CartContext";
import checkLoginUser from "../helper/checkLoginUser";
import decodeToken from "../helper/decodeToken";
import { getDataLS, removeDataLS, setLS } from "../helper/handlerLS";
import { login, sendVerifyCodeToPhoneNumber } from "../services/account";
import Modal from "./Modal";
import Spinner from "./shared/Spinner";
import Timer from "./Timer";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [userPhoneNumber, setPhoneNumber] = useState("");
  const [clickedForGetVerifyCode, setClickedForGetVerifyCode] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");
  const [user, setUser] = useState(decodeToken("username"));
  const [loading, setLoading] = useState({
    sendVerifyCodeLoading: false,
    loginLoading: false,
  });
  const {
    state: { cart },
  } = useContext(CartStore);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const sendVerifyCode = async () => {
    setLoading({ ...loading, sendVerifyCodeLoading: true });
    const res = await sendVerifyCodeToPhoneNumber(userPhoneNumber);
    if (res.status) setClickedForGetVerifyCode(true);
    setLoading({ ...loading, sendVerifyCodeLoading: false });
  };

  const userLogin = async () => {
    setLoading({ ...loading, loginLoading: true });
    const res = await login(userPhoneNumber, verifyCode);
    if (res.status) {
      setLS("user", res.data);
      setUser(decodeToken("username"));
      setShowModal(false);
      setLoading({ ...loading, loginLoading: false });
      setPhoneNumber("");
      setVerifyCode("");
      setClickedForGetVerifyCode(false);
    }
  };

  const userLogout = () => {
    removeDataLS("user");
    setUser(undefined);
  };
  return (
    <>
      <div className="bg-neutral-900 w-full">
        <header className="flex flex-none items-center h-16 bg-neutral-900 shadow-sm top-0 right-0 left-0 z-30">
          <div className="flex justify-between container xl:max-w-6xl mx-auto">
            <div className="flex items-center space-x-2 space-x-reverse">
              <nav className="hidden lg:flex lg:items-center lg:space-x-2 text-sm lg:space-x-reverse">
                <Link
                  to="/"
                  className="font-medium flex items-center space-x-2 px-3 py-2 rounded text-neutral-300 bg-neutral-800"
                >
                  صفحه اصلی
                </Link>
                <Link
                  to="/about"
                  className="font-medium flex items-center space-x-2 px-3 py-2 rounded text-neutral-400 hover:text-neutral-300 hover:bg-neutral-800"
                >
                  درباره ما
                </Link>
                <Link
                  to="javascript:void(0)"
                  className="font-medium flex items-center space-x-2 px-3 py-2 rounded text-neutral-400 hover:text-neutral-300 hover:bg-neutral-800"
                >
                  تماس با ما
                </Link>
                <Link
                  to="/products"
                  className="font-medium flex items-center space-x-2 px-3 py-2 rounded text-neutral-400 hover:text-neutral-300 hover:bg-neutral-800"
                >
                  محصولات
                </Link>
                <button
                  type="button"
                  className="relative text-sm font-medium inline-flex justify-center items-center space-x-2 space-x-reverse px-3 py-2 rounded text-neutral-400 hover:text-neutral-300 hover:bg-neutral-800 focus:outline-none focus:ring"
                  id="tk-dropdown-layouts-user"
                >
                  <span>محصولات</span>
                  <svg
                    className="hi-solid hi-chevron-down inline-block w-4 h-4 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  {/* <div id="dropdown" className="absolute z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 top-[30px] right-0">
                    <ul className="py-1 text-sm text-gray-700">
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                          دسته بندی یک
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                          دسته بندی دو
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                          دسته بندی یک
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                          دسته بندی دو
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </button>
              </nav>
            </div>

            <div className="flex items-center justify-content">
              <div>
                {checkLoginUser() ? (
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <div className="relative  w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <svg
                        className="absolute w-12 h-12 text-gray-400 -left-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div>
                        <a
                          href="profile"
                          className="text-xs font-bold text-gray-300"
                        >
                          <span className="after:content-[':'] ml-2">
                            نام کاربری
                          </span>
                          {user}
                        </a>
                      </div>
                      <div>
                        <button
                          onClick={userLogout}
                          className="text-xs text-rose-500"
                        >
                          خروج از حساب کاربری
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={openModal}
                    className=" inline-flex rounded-lg bg-blue-800 px-3 py-2"
                  >
                    ورود به حساب کاربری
                  </button>
                )}
                <Modal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  title="ورود به حساب کاربری"
                >
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
                    <h3 className="text-2xl font-bold text-center">
                      ورود به حساب کاربری
                    </h3>
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
                                  classNameSvg="w-4 h-4 fill-white text-gray-50/50 mr-0"
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
                            disabled={
                              userPhoneNumber.trim() === "" ? true : false
                            }
                            onClick={sendVerifyCode}
                            className="transition flex items-center justify-center duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 px-4 rounded-lg text-sm shadow-sm hover:shadow-md font-yekan-bold text-center inline-block disabled:bg-gray-500 disabled:opacity-20 disabled:hover:bg-gray-500"
                          >
                            {loading.sendVerifyCodeLoading && (
                              <Spinner
                                classNameBox="w-auto"
                                classNameSvg="w-4 h-4 fill-white text-gray-50/50 mr-0"
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
                </Modal>
              </div>
              <div className="relative inline-block mr-8">
                <Link
                  to="/cart"
                  className="block relative py-2 rounded px-2 hover:bg-white/20 transition duration-200 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                  {cart.length > 0 && (
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-2">
                      {cart.reduce((total, product) => total + product.qty, 0)}
                    </div>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
