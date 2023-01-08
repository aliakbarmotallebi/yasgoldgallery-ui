const Header = ({children}) => {
    return (
        <header className="flex flex-none items-center h-16 bg-gray-900 shadow-sm fixed top-0 right-0 left-0 z-30">
            <div className="flex justify-between container xl:max-w-6xl mx-auto px-4 lg:px-8">
            
                <div className="flex items-center">
                    <a href="" className="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-blue-400 hover:text-blue-500">
                        <svg className="hi-solid hi-cursor-click inline-block w-5 h-5 text-blue-200 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd"></path></svg>
                        <span className="hidden sm:inline">Analytics Pro</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;