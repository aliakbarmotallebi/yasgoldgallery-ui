const Footer = () => {
    return (
        <>
            <footer>
                <div className="bg-neutral-900">
                    <div className="md:w-10/12 lg:w-8/12 m-auto py-8">
                        <ul class="flex flex-wrap items-center justify-between md:flex-nowrap list-disc list-inside">
                            <li>
                                <a href="/" class="hover:text-sky-400 transition whitespace-nowrap text-white">صفحه اصلی</a>
                            </li>
                            <li>
                                <a href="/about" class="hover:text-sky-400 transition whitespace-nowrap text-white">
                                    درباره ما
                                </a>
                            </li>
                            <li>
                                <a href="/page/privacy" class="hover:text-sky-400 transition whitespace-nowrap text-white">
                                    حریم شخصی
                                </a>
                            </li>
                            <li>
                                <a href="/page/helper" class="hover:text-sky-400 transition whitespace-nowrap text-white">
                                    راهنمایی خرید
                                </a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-sky-400 transition whitespace-nowrap text-white">تماس با ما</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-neutral-900/50">
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 container mx-auto py-12">
                        <div class="mb-6 md:mb-0">
                            <a href="/" class="flex items-center">
                                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 ml-3" alt="FlowBite Logo" />
                                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                    فروشگاه یاس
                                </span>
                            </a>
                            <div className="text-justify pt-4 leading-6">
                                با سخت کوشی کار کردیم، که نه تنها دغدغه های خرید طلا را برای
                                شما حل کنیم، بلکه لذت ویترین گردی مجازی و خرید
                                آنلاین طلا راهم به شما هدیه دهیم.
                            </div>
               
                            <div class="flex flex-wrap justify-center gap-2 pt-4">
        <button class="bg-[#0088cc] p-2 font-semibold text-white inline-flex items-center space-x-2 rounded hover:opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M1.923 9.37c-.51-.205-.504-.51.034-.689l19.086-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37zm4.89-.2l5.636 2.255 3.04 6.082 3.546-12.41L6.812 9.17z"/></svg>
        </button>

        <button class="bg-[#bc2a8d] p-2 font-semibold text-white inline-flex items-center space-x-2 rounded hover:opacity-60">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>
        </button>

        <button class="bg-[#25d365] p-2 font-semibold text-white inline-flex items-center space-x-2 rounded hover:opacity-60">
            <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.253 18.494l.724.423A7.953 7.953 0 0 0 12 20a8 8 0 1 0-8-8c0 1.436.377 2.813 1.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 0 1-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 0 0 .367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 0 1 .378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 0 1-.21.302 2.378 2.378 0 0 1-.33.288 3.71 3.71 0 0 1-.125.09 5.024 5.024 0 0 1-.383.22 1.99 1.99 0 0 1-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 0 1-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 0 1 6.9 9.62a2.729 2.729 0 0 1 .564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 0 1 .371-.1z"/></svg>
        </button>

        </div>
   
                        </div>
                        <div class="pr-5">
                          
                            <div className="font-thin">
                                <h2 class="mb-6 text-sm font-semibold text-white uppercase">
                                    ارتباط با ما
                                </h2>
                                <ul class="text-white list-disc">
                                    <li class="mb-4">
                                        <a class="hover:underline after:content-[':'] ">
                                            مشاور خرید
                                        </a>
                                        <span className="mr-2">
                                            09121990160
                                        </span>
                                    </li>
                                    <li class="mb-4">
                                        <a class="hover:underline after:content-[':']">
                                            تلفن مدیریت
                                        </a>
                                        <span className="mr-2">
                                            02155959517
                                        </span>
                                        
                                    </li>
                                    <li class="mb-4">
                                        <a class="hover:underline after:content-[':']">
                                            تلفن ثابت فروشگاه یاس
                                        </a>
                                        <span className="mr-2">
                                        02155959517
                                        </span>
                                    </li>
                                </ul>
                            </div>
                           
                        </div>
                        <div>
                        جواهری یاس. آدرس: تهران - شهرری - دولت آباد - فلکه دوم - پاساژ ولیعصر - پلاک 12.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;