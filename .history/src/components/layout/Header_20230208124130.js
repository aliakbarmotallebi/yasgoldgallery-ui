import React, { useContext, useState, memo, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CartStore } from "context/CartContext";
import checkLoginUser from "helper/checkLoginUser";
import { removeDataLS } from "helper/handlerLS";
import Modal from "components/shared/Modal";
import Login from "components/shared/Login";
import { UserStore } from "context/UserContext";
import ContactUs from "components/shared/ContactUs";
import { categories } from "services/products";
import Dropdown from "components/shared/Dropdown";
import Logo from "../../assets/images/logo/logo.png";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [contactUsModal, setContactUsModal] = useState(false);
  const { user, setUser } = useContext(UserStore);
  const [showHumburgerMenu, setShowHumburgerMenu] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const { pathname } = useLocation();
  const [dropdown, setDropdown] = useState({
    category: false,
  });

  const {
    state: { cart },
  } = useContext(CartStore);
  useEffect(() => {
    const getCategories = async () => {
      const res = await categories();
      if (res.status) setAllCategories(res.data);
    };
    getCategories();
  }, []);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const userLogout = () => {
    removeDataLS("user");
    setUser(undefined);
  };
  const handlerCategoryDropdown = (e) => {
    e.stopPropagation();
    setDropdown({ ...dropdown, category: !dropdown.category });
  };
  useEffect(() => {
    setShowHumburgerMenu(false);
  }, [pathname]);

  const handleShowHumBurgerMenu = (e) => {
    e.stopPropagation();
    setShowHumburgerMenu(!showHumburgerMenu);
  };
  console.log(allCategories);
  return (
    <>
      <div class="bg-neutral-900 w-full fixed lg:relative z-10">
        <header class="flex flex-none items-center h-16 bg-neutral-900 shadow-sm top-0 right-0 left-0 z-30 relative">
          <div class="flex justify-between container xl:max-w-6xl mx-auto px-4 xl:px-0">
            <div class="flex items-center space-x-2 space-x-reverse ">
            <div class="hidden md:block">
              <Link to="/" class="flex items-center">
                  <img src={Logo} class="h-12 ml-3" alt="Logo" />
                </Link>
            </div>
              <button
                onClick={handleShowHumBurgerMenu}
                class="lg:hidden humburger-menu-icon relative w-8 h-5 "
              >
                <span
                  class={`transition-all absolute left-0 duration-500  w-full h-[3px] bg-white ${
                    showHumburgerMenu ? " top-1/2 rotate-45" : "top-0"
                  } `}
                ></span>
                <span
                  class={`transition-all absolute left-0 duration-500 top-1/2 w-full h-[3px] bg-white ${
                    showHumburgerMenu ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  class={`transition-all absolute left-0 duration-500  w-full h-[3px] bg-white ${
                    showHumburgerMenu ? "top-1/2 -rotate-45" : "top-full"
                  } `}
                ></span>
              </button>
              <nav
                class={`absolute top-16 transition-all duration-500 overflow-scroll lg:overflow-visible right-0 bg-neutral-900 w-screen !mr-0 lg:transition-none lg:w-fit lg:bg-transparent lg:top-0 lg:relative lg:flex lg:items-center lg:space-x-2 text-sm lg:space-x-reverse ${
                  showHumburgerMenu ? "h-screen p-4 pb-20" : "h-0 lg:h-auto "
                }`}
              >
                <NavLink
                  to="/"
                  class={({ isActive }) =>
                    isActive
                      ? "font-medium flex items-center space-x-2 px-3 py-2 rounded text-neutral-300 bg-neutral-800 hover:text-neutral-300 hover:bg-neutral-800"
                      : "font-medium flex items-center space-x-2 px-3 py-2 rounded text-neutral-400 hover:text-neutral-300 hover:bg-neutral-800"
                  }
                >
                  صفحه اصلی
                </NavLink>
                <NavLink
                  to="/about"
                  class={({ isActive }) =>
                    isActive
                      ? "font-medium flex items-center space-x-2 px-3 py-2 rounded text-neutral-300 bg-neutral-800 hover:text-neutral-300 hover:bg-neutral-800"
                      : "font-medium flex items-center space-x-2 px-3 py-2 rounded text-neutral-400 hover:text-neutral-300 hover:bg-neutral-800"
                  }
                >
                  درباره ما
                </NavLink>
                <button
                  type="button"
                  onClick={() => setContactUsModal(!contactUsModal)}
                  class="font-medium flex items-center space-x-2 px-3 py-2 rounded text-neutral-400 hover:text-neutral-300 hover:bg-neutral-800"
                >
                  تماس با ما
                </button>
                <button
                  onClick={handlerCategoryDropdown}
                  type="button"
                  class="relative dropdown-btn text-sm font-medium w-full lg:w-fit inline-flex flex-col justify-center items-start space-x-2 space-x-reverse px-3 py-2 rounded text-neutral-400 hover:text-neutral-300 hover:bg-neutral-800 shadow-none outline-none ring-none"
                  data-dropdown="dropdown"
                >
                  <div class={dropdown.category ? "mb-2 lg:mb-0" : ""}>
                    <span>دسته بندی</span>
                    <svg
                      class="hi-solid hi-chevron-down inline-block w-4 h-4 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  {dropdown.category && (
                    <Dropdown dropdown={dropdown} setDropdown={setDropdown}>
                      <ul class="py-1 text-sm text-white text-right lg:text-gray-600 overflow-hidden p-0">
                        {allCategories.map((category) => (
                          <li key={category.id}>
                            <Link
                              to={`/products/category/${category.id}/${category.slug}`}
                              class="block px-2 lg:px-6 py-2 hover:bg-neutral-900 lg:hover:bg-gray-100 lg:hover:text-black lg:hover:text-dark lg:flex lg:justify-between lg:items-center group"
                            >
                              {category.name}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                class="hidden lg:block translate-x-8 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" />
                              </svg>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Dropdown>
                  )}
                </button>
                <NavLink
                  to="/products"
                  class={({ isActive }) =>
                    isActive
                      ? "font-medium flex items-center space-x-2 px-3 py-2 rounded text-neutral-300 bg-neutral-800 hover:text-neutral-300 hover:bg-neutral-800"
                      : "font-medium flex items-center space-x-2 px-3 py-2 rounded text-neutral-400 hover:text-neutral-300 hover:bg-neutral-800"
                  }
                >
                  شرایط اقساط
                </NavLink>
                {checkLoginUser() && (
                  <button
                    onClick={userLogout}
                    class="block md:hidden text-xs text-rose-500 space-x-2 px-3 py-2 hover:opacity-50 hover:underline"
                  >
                    خروج از حساب کاربری
                  </button>
                )}
              </nav>
            </div>

            <div class="flex items-center justify-content">
              <div>
                {checkLoginUser() ? (
                  <div class="flex items-center space-x-2 space-x-reverse">
                    <div class="relative  w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <Link to="profile">
                        <svg
                          class="absolute w-12 h-12 text-gray-400 -left-1"
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
                      </Link>
                    </div>
                    <div class="hidden md:block">
                      <div>
                        <Link
                          to="profile"
                          class="text-xs font-bold text-gray-300"
                        >
                          <span class="after:content-[':'] ml-2">
                            نام کاربری
                          </span>
                          {user}
                        </Link>
                      </div>
                      <div>
                        <button
                          onClick={userLogout}
                          class="text-xs text-rose-500 hover:opacity-50 hover:underline"
                        >
                          خروج از حساب کاربری
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={openModal}
                    class="text-xs sm:text-base inline-flex rounded-lg bg-blue-800 text-white px-3 py-2"
                  >
                    ورود به حساب کاربری
                  </button>
                )}
                <Modal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  title="ورود به حساب کاربری"
                >
                  <Login
                    setUser={setUser}
                    setShowModal={setShowModal}
                    openModal={openModal}
                  />
                </Modal>
                <Modal
                  showModal={contactUsModal}
                  setShowModal={setContactUsModal}
                  class="bg-stone-900"
                >
                  <ContactUs />
                </Modal>
              </div>
              <div class="relative inline-block mr-4 md:mr-8">
                <Link
                  to="/cart"
                  class="block relative py-2 rounded px-2 hover:bg-white/20 transition duration-200 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                  {cart.length > 0 && (
                    <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-2">
                      {cart.reduce((total, product) => total + product.qty, 0)}
                    </div>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default memo(Header);
