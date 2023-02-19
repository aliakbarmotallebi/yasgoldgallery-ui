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
    <div
      id="dropdown"
      className={`lg:absolute z-30 w-full lg:w-60 !mr-0 bg-transparent lg:bg-white divide-y divide-gray-100 rounded lg:shadow  top-[40px]`}
    >
      {children}
    </div>
  );
};

export default Dropdown;
