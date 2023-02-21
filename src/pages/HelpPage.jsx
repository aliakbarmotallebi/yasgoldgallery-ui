const HelpPage = () => {
  return (
    <>
      <div className="bg-gray-100 xl:px-4 py-14 text-black">
        <div className="mx-auto container text-center xl:max-w-6xl px-4 xl:px-0">
          <h2 className="text-4xl font-bold text-gray-900">
            راهنمای خرید آنلاین از وبسایت
            <span className="text-yellow-500">یاس</span>
          </h2>

          <div className="accordion py-10" id="accordionExample5">
            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header text-2xl mb-0">
                <button
                  className="
        accordion-button
                after:mr-auto
        after:ml-0
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base !text-gray-800 font-bold text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                >
                  محصول مورد نظر خود را جستجو کنید.
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show">
                <div className="accordion-body text-justify leading-8 py-4 px-5"></div>
              </div>
            </div>
            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header text-2xl mb-0">
                <button
                  className="
        accordion-button
                after:mr-auto
        after:ml-0
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base !text-gray-800 font-bold text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                >
                  پس از یافتن محصول، آنرا انتخاب کنید.
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse">
                <div className="accordion-body text-justify leading-8 py-4 px-5"></div>
              </div>
            </div>
            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header text-2xl mb-0">
                <button
                  className="
        accordion-button
                after:mr-auto
        after:ml-0
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base !text-gray-800 font-bold text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                >
                  پس از اطمینان از مشخصات و قیمت، افزودن به سبد خرید را انتخاب
                  کنید.
                </button>
              </h2>
              <div
                id="collapse3"
                className="accordion-collapse collapse"
                aria-labelledby="heading3"
              >
                <div className="accordion-body text-justify leading-8 py-4 px-5"></div>
              </div>
            </div>

            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header text-2xl mb-0">
                <button
                  className="
        accordion-button
                after:mr-auto
        after:ml-0
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base !text-gray-800 font-bold text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                >
                  سبد خرید خود را کنترل نمایید و سپس تکمیل خرید را انتخاب کنید.
                </button>
              </h2>
              <div id="collapse4" className="accordion-collapse collapse">
                <div className="accordion-body text-justify leading-8 py-4 px-5"></div>
              </div>
            </div>

            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header text-2xl mb-0">
                <button
                  className="
        accordion-button
                after:mr-auto
        after:ml-0
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base !text-gray-800 font-bold text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                >
                  برای اطمینان بیشتر، اطلاعات خرید خود را کنترل کنید. در صورت
                  تایید ادامه را انتخاب کنید.
                </button>
              </h2>
              <div id="collapse5" className="accordion-collapse collapse">
                <div className="accordion-body text-justify leading-8 py-4 px-5"></div>
              </div>
            </div>

            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header text-2xl mb-0">
                <button
                  className="
        accordion-button
                after:mr-auto
        after:ml-0
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base !text-gray-800 font-bold text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse6"
                >
                  در صورتی که از قبل در وبسایت عضو نشده باشید و یا وارد اکانت
                  خود نشده باشید با این پیغام مواجه خواهید شد.
                </button>
              </h2>
              <div id="collapse6" className="accordion-collapse collapse">
                <div className="accordion-body text-justify leading-8 py-4 px-5"></div>
              </div>
            </div>

            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header text-2xl mb-0">
                <button
                  className="
        accordion-button
                after:mr-auto
        after:ml-0
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base !text-gray-800 font-bold text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse7"
                >
                  اطلاعات کاربری خود را وارد کرده و ورود به سایت یاس را انتخاب
                  کنید
                </button>
              </h2>
              <div id="collapse7" className="accordion-collapse collapse">
                <div className="accordion-body text-justify leading-8 py-4 px-5"></div>
              </div>
            </div>

            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header text-2xl mb-0">
                <button
                  className="
        accordion-button
                after:mr-auto
        after:ml-0
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base !text-gray-800 font-bold text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse8"
                >
                  پس از ورود به حساب کاربری، به سبد خرید منتقل خواهید
                  شد. ادامه را کلیک کنید.
                </button>
              </h2>
              <div id="collapse8" className="accordion-collapse collapse">
                <div className="accordion-body text-justify leading-8 py-4 px-5"></div>
              </div>
            </div>

            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header text-2xl mb-0">
                <button
                  className="
        accordion-button
                after:mr-auto
        after:ml-0
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base !text-gray-800 font-bold text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse9"
                >
                  آدرس مد نظر خود انتخاب کنید
                </button>
              </h2>
              <div id="collapse9" className="accordion-collapse collapse">
                <div className="accordion-body text-justify leading-8 py-4 px-5"></div>
              </div>
            </div>

            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header text-2xl mb-0">
                <button
                  className="
        accordion-button
                after:mr-auto
        after:ml-0
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base !text-gray-800 font-bold text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse10"
                >
                  پس از تکمیل مشخصات آدرس و انتخاب نحوه تحویل، ادامه را کلیک
                  کنید
                </button>
              </h2>
              <div id="collapse10" className="accordion-collapse collapse">
                <div className="accordion-body text-justify leading-8 py-4 px-5"></div>
              </div>
            </div>

            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header text-2xl mb-0">
                <button
                  className="
        accordion-button
                after:mr-auto
        after:ml-0
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base !text-gray-800 font-bold text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse11"
                >
                  اطلاعات سبد خرید خود را بررسی و در صورت تایید، ادامه را کلیک
                  کنید
                </button>
              </h2>
              <div id="collapse11" className="accordion-collapse collapse">
                <div className="accordion-body text-justify leading-8 py-4 px-5"></div>
              </div>
            </div>

            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header text-2xl mb-0">
                <button
                  className="
        accordion-button
                after:mr-auto
        after:ml-0
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base !text-gray-800 font-bold text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse12"
                >
                  جهت تکمیل خرید خود و پرداخت، پس از انتخاب درگاه پرداخت مورد
                  نظر، پرداخت را کلیک و اطلاعات بانکی خود را در مرحله نهایی وارد
                  کنید
                </button>
              </h2>
              <div id="collapse12" className="accordion-collapse collapse">
                <div className="accordion-body text-justify leading-8 py-4 px-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpPage;
