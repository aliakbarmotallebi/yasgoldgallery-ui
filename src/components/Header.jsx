const Header = ({children}) => {
    return (
        <header className="flex flex-none items-center h-16 bg-gray-900 shadow-sm fixed top-0 right-0 left-0 z-30">
            <div className="flex justify-between container xl:max-w-6xl mx-auto px-4 lg:px-8">


                <div class="flex items-center space-x-2 space-x-reverse">
                    <nav className="hidden lg:flex lg:items-center lg:space-x-2 text-sm lg:space-x-reverse">
                        <a href="" className="font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-300 bg-gray-800">
                            صفحه اصلی
                        </a>
                        <a href="javascript:void(0)" className="font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-400 hover:text-gray-300 hover:bg-gray-800">
                            درباره ما
                        </a>
                        <a href="javascript:void(0)" className="font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-400 hover:text-gray-300 hover:bg-gray-800">
                            تماس با ما
                        </a>
                        <button type="button" class="text-sm font-medium inline-flex justify-center items-center space-x-2 space-x-reverse px-3 py-2 rounded text-gray-400 hover:text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring" id="tk-dropdown-layouts-user" >
                            <span>
                                محصولات
                            </span>
                            <svg class="hi-solid hi-chevron-down inline-block w-4 h-4 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </nav>
                </div>

                <div>
                    <div class="relative inline-block">
                        <button class="py-2 rounded px-2 hover:bg-white/20 transition duration-200 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z"/><path d="M5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm7-16c4.97 0 9 4.043 9 9.031V20H3v-8.969C3 6.043 7.03 2 12 2zM9.5 21h5a2.5 2.5 0 1 1-5 0z"/></svg>
                        </button>
                    </div>
                    <div class="relative inline-block">
                        <button class="py-2 rounded px-2 hover:bg-white/20 transition duration-200 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z"/><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;