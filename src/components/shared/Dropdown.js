import React from "react";
import { useEffect } from "react";

const Dropdown = ({ dropdown, setDropdown, children }) => {
  useEffect(() => {
    const handler = () => setDropdown({ ...dropdown, category: false });

    window.addEventListener("click", handler);

    return () => window.removeEventListener("click", handler);
  }, []);
  return (
    <div
      id="dropdown"
      className={`lg:absolute z-30 w-full lg:w-44 !mr-0 bg-transparent lg:bg-white divide-y divide-gray-100 rounded lg:shadow  top-[40px] right-0`}
    >
      {children}
    </div>
  );
};

export default Dropdown;
