import React from "react";
import { useEffect } from "react";

const Dropdown = ({ dropdown, setDropdown, children, showHumburgerMenu }) => {
  useEffect(() => {
    const handler = () => setDropdown({ ...dropdown, category: false });

    window.addEventListener("click", handler);

    return () => window.removeEventListener("click", handler);
  }, []);

  return showHumburgerMenu ? (
    <div
      id="dropdown"
      className={`lg:absolute z-30 w-full lg:w-60 !mr-0 bg-transparent lg:bg-white divide-y divide-gray-100 rounded lg:shadow  top-[40px]`}
    >
      {children}
    </div>
  ) : (
    <div className="fixed hidden md:flex items-center justify-center top-0 left-0 right-0 z-[100] w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full bg-black/90">
      <div
        id="dropdown"
        className={`lg:absolute z-30 w-full lg:w-60 !mr-0 bg-transparent lg:bg-white divide-y divide-gray-100 rounded lg:shadow  top-[40px]`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
