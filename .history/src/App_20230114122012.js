import Header from "./components/Header";
import Image1 from "./assets/images/image1.png";
import Image2 from "./assets/images/image2.png";
import Image3 from "./assets/images/image3.png";
import Image4 from "./assets/images/image4.png";

import ImageSuggest from "./assets/images/box.png";


function App() {



    return (
        <div className="flex flex-col mx-auto w-full min-h-screen bg-neutral-800 text-neutral-300">
            <Header />
            <main className="container mx-auto">
                <section className="bg-neutral-100 py-10">
                    <div className="text-center py-10">
                        <h2 className="text-4xl font-bold text-neutral-900">
                            پیشنهاد شگفت انگیز
                            <span className="text-yellow-400">
                                یاس
                            </span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-5 gap-3 p-5 items-center">


                        <div class=" max-w-sm">
                            <div className="h-120 overflow-hidden flex justify-center">
                                <img class=""
                                    src={ImageSuggest} />
                            </div>
                        </div>

                        <div class=" max-w-sm">
                            <div className="relative">
                                <div className="h-60 overflow-hidden group shadow-md rounded-lg">
                                    <a href="#">
                                        <img class="transition-all duration-200 group-hover:scale-[1.05] group-hover:relative" src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg" />
                                    </a>
                                </div>
                                <div className="absolute bottom-5 right-5">
                                    <button class="flex items-center bg-white  pl-2 pr-4 py-1 rounded-lg overflow-hidden shadow-lg w-full text-neutral-900 hover:bg-gray-200 font-medium">
                                        <div className="text-xs ml-4">
                                            200,000,000 تومان
                                        </div>
                                        <div className="font-bold mr-auto text-yellow-500 text-xs">
                                            افزدون
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline fill-current" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" /></svg>
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
                            <div className="relative">
                                <div className="h-60 overflow-hidden group shadow-md rounded-lg">
                                    <a href="#">
                                        <img class="transition-all duration-200 group-hover:scale-[1.05] group-hover:relative" src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg" />
                                    </a>
                                </div>
                                <div className="absolute bottom-5 right-5">
                                    <button class="flex items-center bg-white  pl-2 pr-4 py-1 rounded-lg overflow-hidden shadow-lg w-full text-neutral-900 hover:bg-gray-200 font-medium">
                                        <div className="text-xs ml-4">
                                            200,000,000 تومان
                                        </div>
                                        <div className="font-bold mr-auto text-yellow-500 text-xs">
                                            افزدون
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline fill-current" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" /></svg>
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
                            <div className="relative">
                                <div className="h-60 overflow-hidden group shadow-md rounded-lg">
                                    <a href="#">
                                        <img class="transition-all duration-200 group-hover:scale-[1.05] group-hover:relative" src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg" />
                                    </a>
                                </div>
                                <div className="absolute bottom-5 right-5">
                                    <button class="flex items-center bg-white  pl-2 pr-4 py-1 rounded-lg overflow-hidden shadow-lg w-full text-neutral-900 hover:bg-gray-200 font-medium">
                                        <div className="text-xs ml-4">
                                            200,000,000 تومان
                                        </div>
                                        <div className="font-bold mr-auto text-yellow-500 text-xs">
                                            افزدون
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline fill-current" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" /></svg>
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
                            <div className="relative">
                                <div className="h-60 overflow-hidden group shadow-md rounded-lg">
                                    <a href="#">
                                        <img class="transition-all duration-200 group-hover:scale-[1.05] group-hover:relative" src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg" />
                                    </a>
                                </div>
                                <div className="absolute bottom-5 right-5">
                                    <button class="flex items-center bg-white  pl-2 pr-4 py-1 rounded-lg overflow-hidden shadow-lg w-full text-neutral-900 hover:bg-gray-200 font-medium">
                                        <div className="text-xs ml-4">
                                            200,000,000 تومان
                                        </div>
                                        <div className="font-bold mr-auto text-yellow-500 text-xs">
                                            افزدون
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline fill-current" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" /></svg>
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
                        <img class="h-full w-full object-cover "
                            src="https://dioragallery.com/images/1401/03/24/16238-2.jpg"
                            alt="" />
                    </div>
                    <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                        <img class="h-full w-full object-cover  "
                            src="https://dioragallery.com/images/1401/03/24/16635-5.jpg"
                            alt="" />
                    </div>
                    <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                        <img class="h-full w-full object-cover "
                            src="https://dioragallery.com/images/1401/03/24/16229-2.jpg"
                            alt="" />
                    </div>
                    <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                        <img class="h-full w-full object-cover "
                            src="https://dioragallery.com/images/1401/03/02/untitled-design-28.jpg"
                            alt="" />
                    </div>
                    <div class="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                        <a
                            href="#"
                            class="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">
                            مشاهده بیشتر
                        </a>
                    </div>
                </div>

                <section className="bg-white py-10">
                    <div className="text-center py-10">
                        <h2 className="text-4xl font-bold text-neutral-900">
                            محصولات پیشنهادی
                            <span className="text-yellow-400">
                                یاس
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-5 gap-3 p-5 items-center">


                        <div class=" max-w-sm">
                            <div className="h-120 overflow-hidden flex justify-center">
                                <img class=""
                                    src={ImageSuggest} />
                            </div>
                        </div>

                        <div class=" max-w-sm">
                            <div className="relative">
                                <div className="h-60 overflow-hidden group shadow-md rounded-lg">
                                    <a href="#">
                                        <img class="transition-all duration-200 group-hover:scale-[1.05] group-hover:relative" src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg" />
                                    </a>
                                </div>
                                <div className="absolute bottom-5 right-5">
                                    <button class="flex items-center bg-white  pl-2 pr-4 py-1 rounded-lg overflow-hidden shadow-lg w-full text-neutral-900 hover:bg-gray-200 font-medium">
                                        <div className="text-xs ml-4">
                                            200,000,000 تومان
                                        </div>
                                        <div className="font-bold mr-auto text-yellow-500 text-xs">
                                            افزدون
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline fill-current" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" /></svg>
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
                            <div className="relative">
                                <div className="h-60 overflow-hidden group shadow-md rounded-lg">
                                    <a href="#">
                                        <img class="transition-all duration-200 group-hover:scale-[1.05] group-hover:relative" src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg" />
                                    </a>
                                </div>
                                <div className="absolute bottom-5 right-5">
                                    <button class="flex items-center bg-white  pl-2 pr-4 py-1 rounded-lg overflow-hidden shadow-lg w-full text-neutral-900 hover:bg-gray-200 font-medium">
                                        <div className="text-xs ml-4">
                                            200,000,000 تومان
                                        </div>
                                        <div className="font-bold mr-auto text-yellow-500 text-xs">
                                            افزدون
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline fill-current" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" /></svg>
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
                            <div className="relative">
                                <div className="h-60 overflow-hidden group shadow-md rounded-lg">
                                    <a href="#">
                                        <img class="transition-all duration-200 group-hover:scale-[1.05] group-hover:relative" src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg" />
                                    </a>
                                </div>
                                <div className="absolute bottom-5 right-5">
                                    <button class="flex items-center bg-white  pl-2 pr-4 py-1 rounded-lg overflow-hidden shadow-lg w-full text-neutral-900 hover:bg-gray-200 font-medium">
                                        <div className="text-xs ml-4">
                                            200,000,000 تومان
                                        </div>
                                        <div className="font-bold mr-auto text-yellow-500 text-xs">
                                            افزدون
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline fill-current" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" /></svg>
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
                            <div className="relative">
                                <div className="h-60 overflow-hidden group shadow-md rounded-lg">
                                    <a href="#">
                                        <img class="transition-all duration-200 group-hover:scale-[1.05] group-hover:relative" src="https://dioragallery.com/images/stories/virtuemart/product/17427.jpg" />
                                    </a>
                                </div>
                                <div className="absolute bottom-5 right-5">
                                    <button class="flex items-center bg-white  pl-2 pr-4 py-1 rounded-lg overflow-hidden shadow-lg w-full text-neutral-900 hover:bg-gray-200 font-medium">
                                        <div className="text-xs ml-4">
                                            200,000,000 تومان
                                        </div>
                                        <div className="font-bold mr-auto text-yellow-500 text-xs">
                                            افزدون
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline fill-current" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" /></svg>
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
                            <span className="text-yellow-400">
                                یاس
                            </span>
                        </h2>
                    </header>
                    <div class="grid gap-8 mt-16 md:grid-cols-3">
                        <article class="relative px-8 pt-8 pb-4 transform bg-neutral-900 bg-opacity-50 shadow-xl md:translate-y-4 rounded-2xl">
                            <svg class="text-yellow-600 absolute top-0 right-0 hidden w-24 h-24 -mt-12 -mr-12 md:block" width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z" stroke="currentColor" stroke-width="8"></path>
                            </svg>
                            <blockquote class="space-y-1 text-base text-right">
                                <p>
                                    باسلام... من تجربه خرید حضوری واقساطی شما را دارم.
                                </p>
                                <p>
                                    بی نهایت هم از خریدم و کیفیت برخورد اعضا مجموعه راضی هستم
                                </p>
                                <footer class="flex items-center pt-2 mt-7 space-x-2 space-x-reverse border-t border-white/10 mt-1">
                                    <div class="relative w-10 h-10 overflow-hidden bg-neutral-700 rounded-full">
                                        <svg class="absolute w-12 h-12 text-yellow-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <div>
                                        <p class="text-lg font-bold font-display">
                                            بهنام اکبری
                                        </p>
                                    </div>
                                </footer>
                            </blockquote>
                        </article>
                        <article class="relative px-8 pt-8 pb-4 transform bg-neutral-900 bg-opacity-50 shadow-xl md:translate-y-4 rounded-2xl -rotate-3">
                            <blockquote class="space-y-1 text-base text-right">
                                <p>
                                    باسلام... من تجربه خرید حضوری واقساطی شما را دارم.
                                </p>
                                <p>
                                    بی نهایت هم از خریدم و کیفیت برخورد اعضا مجموعه راضی هستم
                                </p>
                                <footer class="flex items-center pt-2 mt-7 space-x-2 space-x-reverse border-t border-white/10 mt-1">
                                    <div class="relative w-10 h-10 overflow-hidden bg-neutral-700 rounded-full">
                                        <svg class="absolute w-12 h-12 text-yellow-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <div>
                                        <p class="text-lg font-bold font-display">
                                            بهنام اکبری
                                        </p>
                                    </div>
                                </footer>
                            </blockquote>
                        </article>
                        <article class="relative px-8 pt-8 pb-4 transform bg-neutral-900 bg-opacity-50 shadow-xl md:translate-y-4 rounded-2xl rotate-3">

                            <blockquote class="space-y-1 text-base text-right">
                                <p>
                                    باسلام... من تجربه خرید حضوری واقساطی شما را دارم.
                                </p>
                                <p>
                                    بی نهایت هم از خریدم و کیفیت برخورد اعضا مجموعه راضی هستم
                                </p>
                                <footer class="flex items-center pt-2 mt-7 space-x-2 space-x-reverse border-t border-white/10 mt-1">
                                    <div class="relative w-10 h-10 overflow-hidden bg-neutral-700 rounded-full">
                                        <svg class="absolute w-12 h-12 text-yellow-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <div>
                                        <p class="text-lg font-bold font-display">
                                            بهنام اکبری
                                        </p>
                                    </div>
                                </footer>
                            </blockquote>
                        </article>
                    </div>
                </div>

                <section className="overflow-y-auto overflow-x-hidden w-full h-80">
                    <div className="flex flex-nowrap">
                        <div className="w-1/3 whitespace-nowrap">
                            <a href="#" class="h-80 p-36 bg-red-600 text-white text-center text-4xl font-semibold block" href="#">
                                برند یک
                            </a>
                        </div>
                        <div className="w-1/3 whitespace-nowrap">
                            <a href="#" class="h-80 bg-yellow-400 text-white text-center text-4xl font-semibold p-36 block">
                                برند دو
                            </a>
                        </div>
                        <div className="w-1/3 whitespace-nowrap">
                            <a href="#" class="h-80 bg-green-400 text-white text-center text-4xl font-semibold p-36 block">
                                برند سه
                            </a>
                        </div>
                        <div className="w-1/3 whitespace-nowrap">
                            <a href="#" class="h-80 bg-blue-600 text-white text-center text-4xl font-semibold p-36 block">
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
