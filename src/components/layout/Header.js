import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartStore } from "context/CartContext";
import checkLoginUser from "helper/checkLoginUser";
import { removeDataLS } from "helper/handlerLS";
import Modal from "components/shared/Modal";
import Login from "components/shared/Login";
import { UserStore } from "context/UserContext";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [contactUsModal, setContactUsModal] = useState(false);
  const { user, setUser } = useContext(UserStore);

  const {
    state: { cart },
  } = useContext(CartStore);

  const openModal = () => {
    setShowModal((prev) => !prev);
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
                  type="button"
                  onClick={() => setContactUsModal(!contactUsModal)}
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
                  <span>دسته بندی</span>
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
                        <Link
                          to="profile"
                          className="text-xs font-bold text-gray-300"
                        >
                          <span className="after:content-[':'] ml-2">
                            نام کاربری
                          </span>
                          {user}
                        </Link>
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
                    className=" inline-flex rounded-lg bg-blue-800 text-white px-3 py-2"
                  >
                    ورود به حساب کاربری
                  </button>
                )}
                <Modal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  title="ورود به حساب کاربری"
                >
                  <Login
                    setUser={setUser}
                    setShowModal={setShowModal}
                    openModal={openModal}
                  />
                </Modal>
                <Modal
                  showModal={contactUsModal}
                  setShowModal={setContactUsModal}
                  className="bg-stone-900"
                >
                  <div className="text-white text-center">
                    <h2 className="text-2xl mb-4">تماس با ما</h2>
                    <p className="text-white/60">
                      پیشنهادات خود را با ما درمیان بگذارید
                    </p>
                  </div>
                  <div class="block p-6 rounded-lg shadow-lg bg-transparent max-w-[550px]  text-left">
                    <form className="w-[80%] mx-auto">
                      <div class="form-group mb-6">
                        <input
                          type="text"
                          class="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-black bg-clip-padding
                                border border-solid border-yellow-200
                                rounded-lg
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 placeholder:text-xs placeholder:text-gray-700 focus:shadow-none focus:border-yellow-700 focus:outline-none"
                          id="name"
                          placeholder="نام شما"
                        />
                      </div>
                      <div class="grid grid-cols-2 gap-4">
                        <div class="form-group mb-6">
                          <input
                            type="text"
                            class="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-black bg-clip-padding
                            border border-solid border-yellow-200
                            rounded-lg
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 placeholder:text-xs placeholder:text-gray-700 focus:shadow-none focus:border-yellow-700 focus:outline-none"
                            id="email"
                            aria-describedby="email"
                            placeholder="ایمیل"
                          />
                        </div>
                        <div class="form-group mb-6">
                          <input
                            type="text"
                            class="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-black bg-clip-padding
                            border border-solid border-yellow-200
                            rounded-lg
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 placeholder:text-xs placeholder:text-gray-700 focus:shadow-none focus:border-yellow-700 focus:outline-none"
                            id="phone"
                            aria-describedby="phone"
                            placeholder="تلفن تماس"
                          />
                        </div>
                      </div>

                      <div class="form-group mb-6">
                        <textarea
                          type="text"
                          rows={4}
                          class="form-control block
                          w-full
                          px-3
                          py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          bg-black bg-clip-padding
                          border border-solid border-yellow-200
                          rounded-lg
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 placeholder:text-xs placeholder:text-gray-700 focus:shadow-none focus:border-yellow-700 focus:outline-none"
                          id="message"
                          placeholder="متن پیام"
                        ></textarea>
                      </div>
                    </form>
                    <div className="">
                      <button
                        type="button"
                        class="
                            w-fit
                            px-6
                            py-2.5
                            bg-blue-600
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded-lg
                            shadow-md
                            bg-lime-700
                            hover:bg-lime-800 hover:shadow-lg
                            focus:bg-lime-800 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-lime-700 active:shadow-lg
                            transition
                            duration-150
                            ease-in-out"
                      >
                        ارسال پیام
                      </button>
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
