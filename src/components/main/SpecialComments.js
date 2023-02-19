import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const SpecialComments = () => {
  return (
    <div className="w-full max-w-7xl px-4 mx-auto sm:px-8 my-20 special-comments">
      <header className="space-y-4 text-center">
        <h2 className="text-3xl flex flex-col sm:flex-row items-center justify-center font-bold tracking-tighter md:text-4xl font-display">
          <p>چند کلمه ای از مشتریان</p>
          <span className="text-yellow-400 mr-2 mt-2 sm:mt-0">یاس</span>
        </h2>
      </header>
      <div className="grid relative gap-8 mt-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <svg
          className="text-yellow-600 absolute top-4 z-10 right-12 hidden w-24 h-24 -mt-12 -mr-12 md:block"
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
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          slidesPerView={4}
          spaceBetween={35}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="col-span-4 !p-4 !px-8"
        >
          <SwiperSlide>
            <article className="backdrop-blur-xl bg-white relative px-8 pt-8 pb-4 transform shadow-xl md:translate-y-4 rounded-2xl border-2 border-black">
              <blockquote className="space-y-1 text-base text-right">
                <p className="leading-7">
                  سلام، من از مجموعه طلای یاس گوشواره خریدم وراضی بود ممنون
                  منتظر آویز الیزابت و گردنی تیفانی موجود بشه
                </p>
                <footer className="flex items-center pt-2 space-x-2 space-x-reverse border-t border-white/10 mt-1">
                  <div className="relative w-10 h-10 overflow-hidden bg-neutral-700 rounded-full">
                    <svg
                      className="absolute w-12 h-12 text-yellow-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold font-display">
                      کاربر اینستاگرام #1
                    </p>
                  </div>
                </footer>
              </blockquote>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="backdrop-blur-xl bg-white relative px-8 pt-8 pb-4 transform shadow-xl md:translate-y-4 rounded-2xl border-2 border-black">
              <blockquote className="space-y-1 text-base text-right">
                <p className="leading-7">
                  سلام، من تجربه ی خرید حضوری و اقساط رو از گالری شما دارم
                  بینهایت هم از خریدم وکیفیت و برخورد اعضا مجموعه رضایت دارم
                </p>
                <footer className="flex items-center pt-2 space-x-2 space-x-reverse border-t border-white/10 mt-1">
                  <div className="relative w-10 h-10 overflow-hidden bg-neutral-700 rounded-full">
                    <svg
                      className="absolute w-12 h-12 text-yellow-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold font-display">
                      کاربر اینستاگرام #2
                    </p>
                  </div>
                </footer>
              </blockquote>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="backdrop-blur-xl bg-white relative px-8 pt-8 pb-4 transform shadow-xl md:translate-y-4 rounded-2xl border-2 border-black">
              <blockquote className="space-y-1 text-base text-right">
                <p className="leading-7">
                  خرید حضوری داشتم و واقعا برخورد خوبی داشتید و مجددا دلم میخواد
                  برای خرید از فرشگاهتونو داشته باشم
                </p>
                <footer className="flex items-center pt-2 space-x-2 space-x-reverse border-t border-white/10">
                  <div className="relative w-10 h-10 overflow-hidden bg-neutral-700 rounded-full">
                    <svg
                      className="absolute w-12 h-12 text-yellow-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold font-display">
                      کاربر اینستاگرام #3
                    </p>
                  </div>
                </footer>
              </blockquote>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="backdrop-blur-xl bg-white relative px-8 pt-8 pb-4 transform shadow-xl md:translate-y-4 rounded-2xl border-2 border-black">
              <blockquote className="space-y-1 text-base text-right">
                <p className="leading-7">
                  سلام، من از مجموعه طلای یاس گوشواره خریدم وراضی بود ممنون
                  منتظر آویز الیزابت و گردنی تیفانی موجود بشه
                </p>
                <footer className="flex items-center pt-2 space-x-2 space-x-reverse border-t border-white/10 mt-1">
                  <div className="relative w-10 h-10 overflow-hidden bg-neutral-700 rounded-full">
                    <svg
                      className="absolute w-12 h-12 text-yellow-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold font-display">
                      کاربر اینستاگرام #4
                    </p>
                  </div>
                </footer>
              </blockquote>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SpecialComments;
