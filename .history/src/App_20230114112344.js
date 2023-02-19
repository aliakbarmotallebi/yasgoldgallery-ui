import Header from "./components/Header";
import Image1 from "./assets/images/image1.png";
import Image2 from "./assets/images/image2.png";
import Image3 from "./assets/images/image3.png";
import Image4 from "./assets/images/image4.png";

import ImageSuggest from "./assets/images/box.png";

function App() {
  return (
    <div class="flex flex-col mx-auto w-full min-h-screen bg-neutral-800 text-neutral-300">
      <Header />
      <main class="container mx-auto">
        <section class="bg-neutral-100 py-10">
          <div class="text-center py-10">
            <h2 class="text-4xl font-bold text-neutral-900">
              پیشنهاد شگفت انگیز
              <span class="text-yellow-400">یاس</span>
            </h2>
          </div>

          <div class="grid grid-cols-5 gap-3 p-5 items-center">
            <div class=" max-w-sm">
              <div class="h-120 overflow-hidden flex justify-center">
                <img class="" src={ImageSuggest} />
              </div>
            </div>

            <div class=" max-w-sm">
              <div class="relative">
                <div class="h-60 overflow-hidden group shadow-md rounded-lg">
                  <a href="#">
                    <img
                      class="transition-all duration-200 group-hover:scale-[1.05] group-hover:relative"
                      src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg"
                    />
                  </a>
                </div>
                <div class="absolute bottom-5 right-5">
                  <button class="flex items-center bg-white  pl-2 pr-4 py-1 rounded-lg overflow-hidden shadow-lg w-full text-neutral-900 hover:bg-gray-200 font-medium">
                    <div class="text-xs ml-4">200,000,000 تومان</div>
                    <div class="font-bold mr-auto text-yellow-500 text-xs">
                      افزدون
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline fill-current"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div class="px-5 pt-4">
                <a href="#">
                  <h3 class="text-neutral-900 font-semibold text-lg tracking-tight text-justify">
                    دستبند طلا زنانه کارتیه
                  </h3>
                </a>
              </div>
            </div>
            <div class=" max-w-sm">
              <div class="relative">
                <div class="h-60 overflow-hidden group shadow-md rounded-lg">
                  <a href="#">
                    <img
                      class="transition-all duration-200 group-hover:scale-[1.05] group-hover:relative"
                      src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg"
                    />
                  </a>
                </div>
                <div class="absolute bottom-5 right-5">
                  <button class="flex items-center bg-white  pl-2 pr-4 py-1 rounded-lg overflow-hidden shadow-lg w-full text-neutral-900 hover:bg-gray-200 font-medium">
                    <div class="text-xs ml-4">200,000,000 تومان</div>
                    <div class="font-bold mr-auto text-yellow-500 text-xs">
                      افزدون
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline fill-current"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div class="px-5 pt-4">
                <a href="#">
                  <h3 class="text-neutral-900 font-semibold text-lg tracking-tight text-justify">
                    دستبند طلا زنانه کارتیه
                  </h3>
                </a>
              </div>
            </div>
            <div class=" max-w-sm">
              <div class="relative">
                <div class="h-60 overflow-hidden group shadow-md rounded-lg">
                  <a href="#">
                    <img
                      class="transition-all duration-200 group-hover:scale-[1.05] group-hover:relative"
                      src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg"
                    />
                  </a>
                </div>
                <div class="absolute bottom-5 right-5">
                  <button class="flex items-center bg-white  pl-2 pr-4 py-1 rounded-lg overflow-hidden shadow-lg w-full text-neutral-900 hover:bg-gray-200 font-medium">
                    <div class="text-xs ml-4">200,000,000 تومان</div>
                    <div class="font-bold mr-auto text-yellow-500 text-xs">
                      افزدون
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline fill-current"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div class="px-5 pt-4">
                <a href="#">
                  <h3 class="text-neutral-900 font-semibold text-lg tracking-tight text-justify">
                    دستبند طلا زنانه کارتیه
                  </h3>
                </a>
              </div>
            </div>
            <div class=" max-w-sm">
              <div class="relative">
                <div class="h-60 overflow-hidden group shadow-md rounded-lg">
                  <a href="#">
                    <img
                      class="transition-all duration-200 group-hover:scale-[1.05] group-hover:relative"
                      src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg"
                    />
                  </a>
                </div>
                <div class="absolute bottom-5 right-5">
                  <button class="flex items-center bg-white  pl-2 pr-4 py-1 rounded-lg overflow-hidden shadow-lg w-full text-neutral-900 hover:bg-gray-200 font-medium">
                    <div class="text-xs ml-4">200,000,000 تومان</div>
                    <div class="font-bold mr-auto text-yellow-500 text-xs">
                      افزدون
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline fill-current"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div class="px-5 pt-4">
                <a href="#">
                  <h3 class="text-neutral-900 font-semibold text-lg tracking-tight text-justify">
                    دستبند طلا زنانه کارتیه
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div class="grid grid-cols-6 col-span-2 gap-2 py-10">
          <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
            <img
              class="h-full w-full object-cover "
              src="https://dioragallery.com/images/1401/03/24/16238-2.jpg"
              alt=""
            />
          </div>
          <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
            <img
              class="h-full w-full object-cover  "
              src="https://dioragallery.com/images/1401/03/24/16635-5.jpg"
              alt=""
            />
          </div>
          <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
            <img
              class="h-full w-full object-cover "
              src="https://dioragallery.com/images/1401/03/24/16229-2.jpg"
              alt=""
            />
          </div>
          <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
            <img
              class="h-full w-full object-cover "
              src="https://dioragallery.com/images/1401/03/02/untitled-design-28.jpg"
              alt=""
            />
          </div>
          <div class="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
            <a
              href="#"
              class="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center"
            >
              مشاهده بیشتر
            </a>
          </div>
        </div>

        <section class="bg-white py-10">
          <div class="text-center py-10">
            <h2 class="text-4xl font-bold text-neutral-900">
              محصولات پیشنهادی
              <span class="text-yellow-400">یاس</span>
            </h2>
          </div>

          <div class="grid grid-cols-5 gap-3 p-5 items-center">
            <div class=" max-w-sm">
              <div class="h-120 overflow-hidden flex justify-center">
                <img class="" src={ImageSuggest} />
              </div>
            </div>

            <div class=" max-w-sm">
              <div class="relative">
                <div class="h-60 overflow-hidden group shadow-md rounded-lg">
                  <a href="#">
                    <img
                      class="transition-all duration-200 group-hover:scale-[1.05] group-hover:relative"
                      src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg"
                    />
                  </a>
                </div>
                <div class="absolute bottom-5 right-5">
                  <button class="flex items-center bg-white  pl-2 pr-4 py-1 rounded-lg overflow-hidden shadow-lg w-full text-neutral-900 hover:bg-gray-200 font-medium">
                    <div class="text-xs ml-4">200,000,000 تومان</div>
                    <div class="font-bold mr-auto text-yellow-500 text-xs">
                      افزدون
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline fill-current"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div class="px-5 pt-4">
                <a href="#">
                  <h3 class="text-neutral-900 font-semibold text-lg tracking-tight text-justify">
                    دستبند طلا زنانه کارتیه
                  </h3>
                </a>
              </div>
            </div>
            <div class=" max-w-sm">
              <div class="relative">
                <div class="h-60 overflow-hidden group shadow-md rounded-lg">
                  <a href="#">
                    <img
                      class="transition-all duration-200 group-hover:scale-[1.05] group-hover:relative"
                      src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg"
                    />
                  </a>
                </div>
                <div class="absolute bottom-5 right-5">
                  <button class="flex items-center bg-white  pl-2 pr-4 py-1 rounded-lg overflow-hidden shadow-lg w-full text-neutral-900 hover:bg-gray-200 font-medium">
                    <div class="text-xs ml-4">200,000,000 تومان</div>
                    <div class="font-bold mr-auto text-yellow-500 text-xs">
                      افزدون
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline fill-current"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div class="px-5 pt-4">
                <a href="#">
                  <h3 class="text-neutral-900 font-semibold text-lg tracking-tight text-justify">
                    دستبند طلا زنانه کارتیه
                  </h3>
                </a>
              </div>
            </div>
            <div class=" max-w-sm">
              <div class="relative">
                <div class="h-60 overflow-hidden group shadow-md rounded-lg">
                  <a href="#">
                    <img
                      class="transition-all duration-200 group-hover:scale-[1.05] group-hover:relative"
                      src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg"
                    />
                  </a>
                </div>
                <div class="absolute bottom-5 right-5">
                  <button class="flex items-center bg-white  pl-2 pr-4 py-1 rounded-lg overflow-hidden shadow-lg w-full text-neutral-900 hover:bg-gray-200 font-medium">
                    <div class="text-xs ml-4">200,000,000 تومان</div>
                    <div class="font-bold mr-auto text-yellow-500 text-xs">
                      افزدون
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline fill-current"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div class="px-5 pt-4">
                <a href="#">
                  <h3 class="text-neutral-900 font-semibold text-lg tracking-tight text-justify">
                    دستبند طلا زنانه کارتیه
                  </h3>
                </a>
              </div>
            </div>
            <div class=" max-w-sm">
              <div class="relative">
                <div class="h-60 overflow-hidden group shadow-md rounded-lg">
                  <a href="#">
                    <img
                      class="transition-all duration-200 group-hover:scale-[1.05] group-hover:relative"
                      src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg"
                    />
                  </a>
                </div>
                <div class="absolute bottom-5 right-5">
                  <button class="flex items-center bg-white  pl-2 pr-4 py-1 rounded-lg overflow-hidden shadow-lg w-full text-neutral-900 hover:bg-gray-200 font-medium">
                    <div class="text-xs ml-4">200,000,000 تومان</div>
                    <div class="font-bold mr-auto text-yellow-500 text-xs">
                      افزدون
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline fill-current"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div class="px-5 pt-4">
                <a href="#">
                  <h3 class="text-neutral-900 font-semibold text-lg tracking-tight text-justify">
                    دستبند طلا زنانه کارتیه
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div class="w-full max-w-7xl px-4 mx-auto sm:px-8 my-20 ">
          <header class="space-y-4 text-center">
            <h2 class="text-3xl font-bold tracking-tighter md:text-4xl font-display">
              چند کلمه ای از مشتریان
              <span class="text-yellow-400">یاس</span>
            </h2>
          </header>
          <div class="grid gap-8 mt-16 md:grid-cols-3">
            <article class="relative px-8 pt-8 pb-4 transform bg-neutral-900 bg-opacity-50 shadow-xl md:translate-y-4 rounded-2xl">
              <svg
                class="text-yellow-600 absolute top-0 right-0 hidden w-24 h-24 -mt-12 -mr-12 md:block"
                width="256"
                height="256"
                viewBox="0 0 256 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
                  stroke="currentColor"
                  stroke-width="8"
                ></path>
              </svg>
              <blockquote class="space-y-1 text-base text-right">
                <p>باسلام... من تجربه خرید حضوری واقساطی شما را دارم.</p>
                <p>بی نهایت هم از خریدم و کیفیت برخورد اعضا مجموعه راضی هستم</p>
                <footer class="flex items-center pt-2 mt-7 space-x-2 space-x-reverse border-t border-white/10 mt-1">
                  <div class="relative w-10 h-10 overflow-hidden bg-neutral-700 rounded-full">
                    <svg
                      class="absolute w-12 h-12 text-yellow-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-lg font-bold font-display">بهنام اکبری</p>
                  </div>
                </footer>
              </blockquote>
            </article>
            <article class="relative px-8 pt-8 pb-4 transform bg-neutral-900 bg-opacity-50 shadow-xl md:translate-y-4 rounded-2xl -rotate-3">
              <blockquote class="space-y-1 text-base text-right">
                <p>باسلام... من تجربه خرید حضوری واقساطی شما را دارم.</p>
                <p>بی نهایت هم از خریدم و کیفیت برخورد اعضا مجموعه راضی هستم</p>
                <footer class="flex items-center pt-2 mt-7 space-x-2 space-x-reverse border-t border-white/10 mt-1">
                  <div class="relative w-10 h-10 overflow-hidden bg-neutral-700 rounded-full">
                    <svg
                      class="absolute w-12 h-12 text-yellow-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-lg font-bold font-display">بهنام اکبری</p>
                  </div>
                </footer>
              </blockquote>
            </article>
            <article class="relative px-8 pt-8 pb-4 transform bg-neutral-900 bg-opacity-50 shadow-xl md:translate-y-4 rounded-2xl rotate-3">
              <blockquote class="space-y-1 text-base text-right">
                <p>باسلام... من تجربه خرید حضوری واقساطی شما را دارم.</p>
                <p>بی نهایت هم از خریدم و کیفیت برخورد اعضا مجموعه راضی هستم</p>
                <footer class="flex items-center pt-2 mt-7 space-x-2 space-x-reverse border-t border-white/10 mt-1">
                  <div class="relative w-10 h-10 overflow-hidden bg-neutral-700 rounded-full">
                    <svg
                      class="absolute w-12 h-12 text-yellow-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-lg font-bold font-display">بهنام اکبری</p>
                  </div>
                </footer>
              </blockquote>
            </article>
          </div>
        </div>

        <section class="w-full !m-0">
          <div class="grid grid-cols-2 mx-auto max-w-6xl">
            <div class="p-5 py-20">
              <div class="text-4xl font-extrabold">سوالات متداول کاربران</div>
              <div class="pt-10">
                <div class="flex items-center bg-neutral-900 bg-opacity-50 rounded-lg px-2 py-5 m-2  shadow border border-transparent transition-all delay-100 hover:border-black">
                  <div class="inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="fill-current text-yellow-600 ml-1"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M5.763 17H20V5H4v13.385L5.763 17zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM11 14h2v2h-2v-2zM8.567 8.813A3.501 3.501 0 1 1 12 13h-1v-2h1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393z" />
                    </svg>
                    لیط چارتر به بلیطی اطلاق می گردد که نرخ تعیین می‌شود
                  </div>
                  <div class="mr-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      class="feather feather-chevron-down"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                <div class="flex items-center bg-neutral-900 bg-opacity-50 rounded-lg px-2 py-5 m-2  shadow border border-transparent transition-all delay-100 hover:border-black">
                  <div class="inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="fill-current text-yellow-600 ml-1"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M5.763 17H20V5H4v13.385L5.763 17zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM11 14h2v2h-2v-2zM8.567 8.813A3.501 3.501 0 1 1 12 13h-1v-2h1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393z" />
                    </svg>
                    پرواز سیستمی و شرایط جریمه کنسلی و استرداد
                  </div>
                  <div class="mr-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      class="feather feather-chevron-down"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                <div class="flex items-center bg-neutral-900 bg-opacity-50 rounded-lg px-2 py-5 m-2  shadow border border-transparent transition-all delay-100 hover:border-black">
                  <div class="inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="fill-current text-yellow-600 ml-1"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M5.763 17H20V5H4v13.385L5.763 17zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM11 14h2v2h-2v-2zM8.567 8.813A3.501 3.501 0 1 1 12 13h-1v-2h1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393z" />
                    </svg>
                    پرواز سیستمی و شرایط جریمه کنسلی و استرداد
                  </div>
                  <div class="mr-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      class="feather feather-chevron-down"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                <div class="flex items-center bg-neutral-900 bg-opacity-50 rounded-lg px-2 py-5 m-2  shadow border border-transparent transition-all delay-100 hover:border-black">
                  <div class="inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="fill-current text-yellow-600 ml-1"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M5.763 17H20V5H4v13.385L5.763 17zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM11 14h2v2h-2v-2zM8.567 8.813A3.501 3.501 0 1 1 12 13h-1v-2h1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393z" />
                    </svg>
                    پرواز سیستمی و شرایط جریمه کنسلی و استرداد
                  </div>
                  <div class="mr-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      class="feather feather-chevron-down"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-6 pr-10 py-20">
              <div class="flex space-x-6 space-x-reverse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                </svg>
              </div>
              <div class="pt-10 space-y-3">
                <h2 class="text-xl font-bold">سوالی دارید؟ از یاس بپرسید</h2>
                <p class="text-justify leading-9 text-lg">
                  جهت مشـورت با همکاران و بخش پشتیبانیِ شبانه‌روزی ما،
                  مـی‌توانید در هر لحظه، با شمـاره تلفن 91094000-۰۲۱ تمـاس
                  بگیرید و یا از طریق فرم تماس با ما، موضوع را با ما در میان
                  بگذارید تا هرچه زودتر به آن رسیدگی کنیم.{" "}
                </p>
                <button class="px-3 py-2 rounded text-neutral-800 bg-yellow-400 font-semibold">
                  پشتیبان آنلاین
                </button>
              </div>
            </div>
          </div>
        </section>

        <section class="overflow-y-auto overflow-x-hidden w-full h-80">
          <div class="flex flex-nowrap">
            <div class="w-1/3 whitespace-nowrap">
              <a
                href="#"
                class="h-80 p-36 bg-red-600 text-white text-center text-4xl font-semibold block"
                href="#"
              >
                برند یک
              </a>
            </div>
            <div class="w-1/3 whitespace-nowrap">
              <a
                href="#"
                class="h-80 bg-yellow-400 text-white text-center text-4xl font-semibold p-36 block"
              >
                برند دو
              </a>
            </div>
            <div class="w-1/3 whitespace-nowrap">
              <a
                href="#"
                class="h-80 bg-green-400 text-white text-center text-4xl font-semibold p-36 block"
              >
                برند سه
              </a>
            </div>
            <div class="w-1/3 whitespace-nowrap">
              <a
                href="#"
                class="h-80 bg-blue-600 text-white text-center text-4xl font-semibold p-36 block"
              >
                برند چهار
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
