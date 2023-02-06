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
                            <a href="https://flowbite.com/" class="flex items-center">
                                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
                                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                            </a>
                            جواهری یاس. آدرس: تهران - شهرری - دولت آباد - فلکه دوم - پاساژ ولیعصر - پلاک 12.
                        </div>
                        <div class="">
                          
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
                            s
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;