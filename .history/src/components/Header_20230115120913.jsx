import Image4 from "../assets/images/image4.png";
import React, { useState } from 'react';
import Modal from "./components/Modal";

const Header = ({ children }) => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <div class="bg-neutral-900 w-full">
        <div class="flex justify-between container xl:max-w-6xl mx-auto pt-5 flex-none items-center">
          <div class="w-8 h-5"></div>

          <div>
            <button onClick={openModal} class="inline-flex rounded-lg bg-blue-800 px-3 py-2">
              ورود به حساب کاربری
            </button>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
          </div>
        </div>
        <header class="flex flex-none items-center h-16 bg-neutral-900 shadow-sm top-0 right-0 left-0 z-30">
          <div class="flex justify-between container xl:max-w-6xl mx-auto px-4 lg:px-8">
            <div class="flex items-center space-x-2 space-x-reverse">
              <nav class="hidden lg:flex lg:items-center lg:space-x-2 text-sm lg:space-x-reverse">
                <a
                  href=""
                  class="font-medium flex items-center space-x-2 px-3 py-2 rounded text-neutral-300 bg-neutral-800"
                >
                  صفحه اصلی
                </a>
                <a
                  href="javascript:void(0)"
                  class="font-medium flex items-center space-x-2 px-3 py-2 rounded text-neutral-400 hover:text-neutral-300 hover:bg-neutral-800"
                >
                  درباره ما
                </a>
                <a
                  href="javascript:void(0)"
                  class="font-medium flex items-center space-x-2 px-3 py-2 rounded text-neutral-400 hover:text-neutral-300 hover:bg-neutral-800"
                >
                  تماس با ما
                </a>
                <button
                  type="button"
                  class="text-sm font-medium inline-flex justify-center items-center space-x-2 space-x-reverse px-3 py-2 rounded text-neutral-400 hover:text-neutral-300 hover:bg-neutral-800 focus:outline-none focus:ring"
                  id="tk-dropdown-layouts-user"
                >
                  <span>محصولات</span>
                  <svg
                    class="hi-solid hi-chevron-down inline-block w-4 h-4 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </nav>
            </div>

            <div>
              <div class="relative inline-block">
                <button class="py-2 rounded px-2 hover:bg-white/20 transition duration-200 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        <div class="flex flex-col justify-center">
          <div class="relative h-[390px]">
              <img
              class="hidden sm:block w-full h-full"
              src={Image4}
              />

              <img
              class="sm:hidden w-full h-full"
              src={Image4}
              />
            <div class="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
              <p class="text-3xl sm:text-4xl font-semibold leading-9 text-white">
                با یاس میتونی بدرخشی 10سال تجربه
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
