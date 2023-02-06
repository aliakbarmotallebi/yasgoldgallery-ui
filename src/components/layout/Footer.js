import ContactUs from "components/shared/ContactUs";
import Modal from "components/shared/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const map =
    '<iframe class="w-full" src="https://balad.ir/embed?p=5359vQlqjxeM3d" title="مشاهده «خودپرداز بانک سپه» روی نقشه بلد" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
  return (
    <>
      <footer>
        <div className="bg-neutral-900">
          <div className="py-8 container xl:max-w-6xl mx-auto px-4 xl:px-0">
            <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center justify-between flex-wrap list-disc list-inside">
              <li>
                <Link
                  to="/"
                  class="hover:text-sky-400 transition whitespace-nowrap text-white"
                >
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  class="hover:text-sky-400 transition whitespace-nowrap text-white"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  class="hover:text-sky-400 transition whitespace-nowrap text-white"
                >
                  حریم شخصی
                </Link>
              </li>
              <li>
                <Link
                  to="/helper"
                  class="hover:text-sky-400 transition whitespace-nowrap text-white"
                >
                  راهنمایی خرید
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setShowModal(true)}
                  class="hover:text-sky-400 transition whitespace-nowrap text-white"
                >
                  تماس با ما
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-neutral-900/50">
          <div className="container container xl:max-w-6xl mx-auto px-4 xl:px-0">
            <div class="grid gap-y-8 sm:gap-y-16 grid-cols-4 xl:grid-cols-3 container mx-auto py-12">
              <div class="mb-6 col-span-4 xl:col-span-1 md:mb-0">
                <a href="/" class="flex items-center">
                  <img src="" class="h-8 ml-3" alt="Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    فروشگاه یاس
                  </span>
                </a>
                <div className="text-justify pt-4 leading-6">
                  با سخت کوشی کار کردیم، که نه تنها دغدغه های خرید طلا را برای
                  شما حل کنیم، بلکه لذت ویترین گردی مجازی و خرید آنلاین طلا راهم
                  به شما هدیه دهیم.
                </div>

                <div class="flex flex-wrap justify-center gap-2 pt-4">
                  <button class="bg-[#0088cc] p-2 font-semibold text-white inline-flex items-center space-x-2 rounded hover:opacity-60">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l.013-.007.87 2.87c.112.311.266.367.453.341.188-.025.287-.126.41-.244l1.188-1.148 2.55 1.888c.466.257.801.124.917-.432l1.657-7.822c.183-.728-.137-1.02-.702-.788l-9.733 3.76c-.664.266-.66.638-.12.803l2.497.78z" />
                    </svg>
                  </button>

                  <button class="bg-pink-600  p-2 font-semibold text-white inline-flex items-center space-x-2 rounded hover:opacity-60">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                    </svg>
                  </button>

                  <button class="bg-[#25d365] p-2 font-semibold text-white inline-flex items-center space-x-2 rounded hover:opacity-60">
                    <svg
                      class="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="xl:pr-5 col-span-4 md:col-span-2 xl:col-span-1">
                <div className="font-thin">
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase">
                    ارتباط با ما
                  </h2>
                  <ul class="text-white">
                    <li class="mb-4 flex items-center">
                      <a class="hover:underline after:content-[':'] flex items-center">
                        <span className="ml-1 inline-flex p-1 ml-3 text-xs font-medium text-white rounded-lg border border-yellow-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 4a8 8 0 0 0-8 8h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7C2 6.477 6.477 2 12 2s10 4.477 10 10v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3a8 8 0 0 0-8-8zM4 14v5h3v-5H4zm13 0v5h3v-5h-3z" />
                          </svg>
                        </span>
                        مشاور خرید
                      </a>
                      <span className="mr-3">09121990160</span>
                    </li>
                    <li class="mb-4 flex items-center">
                      <a class="hover:underline after:content-[':'] flex items-center">
                        <span className="ml-1 inline-flex p-1 ml-3 text-xs font-medium text-white rounded-lg border border-yellow-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" />
                          </svg>
                        </span>
                        تلفن مدیریت
                      </a>
                      <span className="mr-3">02155959517</span>
                    </li>
                    <li class="mb-4 flex items-center">
                      <a class="hover:underline after:content-[':'] flex items-center">
                        <span className="ml-1 inline-flex p-1 ml-3 text-xs font-medium text-white rounded-lg border border-yellow-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M21 13.242V20h1v2H2v-2h1v-6.758A4.496 4.496 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.702 4.682A4.496 4.496 0 0 1 21 13.242zm-2 .73a4.496 4.496 0 0 1-3.75-1.36A4.496 4.496 0 0 1 12 14.001a4.496 4.496 0 0 1-3.25-1.387A4.496 4.496 0 0 1 5 13.973V20h14v-6.027zM5.789 4L3.356 8.213a2.5 2.5 0 0 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4H5.79z" />
                          </svg>
                        </span>
                        تلفن ثابت فروشگاه یاس
                      </a>
                      <span className="mr-3">02155959517</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-4 md:col-span-2 xl:col-span-1">
                <div className="flex flex-col items-center">
                  <div
                    id="tooltip3"
                    role="tooltip"
                    class="relative shadow-lg bg-white rounded overflow-hidden"
                  >
                    <div className="text-sm font-bold text-gray-800 p-2 py-3 inline-flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="animate-bounce w-6 h-6 fill-current ml-2"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9l4.95-4.95zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                      </svg>
                      موقعیت فروشگاه یاس
                    </div>
                    <div className="text-center text-black">
                      <div
                        dangerouslySetInnerHTML={{ __html: map }}
                        className="w-full"
                      />

                      <div className="p-2">
                        تهران - شهرری - دولت آباد - فلکه دوم - پاساژ ولیعصر -
                        پلاک 12
                      </div>
                    </div>
                  </div>
                  <div class="w-4 h-4 -mt-2 rotate-45 bg-gray-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        className="bg-stone-900"
      >
        <ContactUs />
      </Modal>
    </>
  );
};
export default Footer;
