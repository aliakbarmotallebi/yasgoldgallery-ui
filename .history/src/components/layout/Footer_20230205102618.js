const Footer = () => {
  return (
    <>
      <footer>
        <div class="bg-neutral-900">
          <div class="md:w-10/12 lg:w-8/12 m-auto py-8">
            <ul class="flex flex-wrap items-center justify-between md:flex-nowrap list-disc list-inside">
              <li>
                <a
                  href="/"
                  class="hover:text-sky-400 transition whitespace-nowrap text-white"
                >
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-sky-400 transition whitespace-nowrap text-white"
                >
                  درباره ما
                </a>
              </li>
              <li>
                <a
                  href="/page/privacy"
                  class="hover:text-sky-400 transition whitespace-nowrap text-white"
                >
                  حریم شخصی
                </a>
              </li>
              <li>
                <a
                  href="/page/helper"
                  class="hover:text-sky-400 transition whitespace-nowrap text-white"
                >
                  راهنمایی خرید
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-sky-400 transition whitespace-nowrap text-white"
                >
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-neutral-900/50">
          <div>
            <div class="flex flex-wrap items-center justify-between md:flex-nowrap">
              <div class="w-full space-x-12 items-center space-x-reverse flex justify-center text-gray-300 py-5">
                <div>
                  جواهری یاس. آدرس: تهران - شهرری - دولت آباد - فلکه دوم - پاساژ
                  ولیعصر - پلاک 12.
                </div>

                <ul role="list" class="space-y-2">
                  <li class="bg-neutral-800 rounded-lg px-4 py-1">
                    <div class="inline-flex items-center space-x-2 space-x-reverse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="fill-current"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" />
                      </svg>
                      <div class="text-xs text-white-200">
                        <div class="font-bold mb-2">مشاور و راهنمای خرید</div>
                        012-12345678
                      </div>
                    </div>
                  </li>
                  <li class="bg-neutral-800 rounded-lg px-4 py-1">
                    <div class="inline-flex items-center space-x-2 space-x-reverse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="fill-current"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M7 4v16h10V4H7zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                      <div class="text-xs text-white-200">
                        <div class="font-bold mb-1">شماره همراه مدیریت</div>
                        012-12345678
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
