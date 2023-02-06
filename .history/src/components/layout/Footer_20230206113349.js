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
          <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
        </button>

        <button class="bg-[#8a3ab9] p-2 font-semibold text-white inline-flex items-center space-x-2 rounded hover:opacity-60">
          <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
        </button>

        <button class="bg-[#25d365] p-2 font-semibold text-white inline-flex items-center space-x-2 rounded hover:opacity-60">
          <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
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