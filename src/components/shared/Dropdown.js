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
      className={` z-30 w-full !mr-0 bg-transparent divide-y divide-gray-100 rounded top-[40px]`}
    >
      {children}
    </div>
  ) : (
    <div
      id="dropdown"
      className={`absolute z-30 w-60 !mr-0 bg-transparent divide-y divide-gray-100 rounded shadow  top-[40px]`}
    >
      {children}
    </div>
  );
};

export default Dropdown;
