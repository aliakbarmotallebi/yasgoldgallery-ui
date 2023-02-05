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
      className={`absolute z-30 bg-white divide-y divide-gray-100 rounded shadow w-44 top-[40px] right-0`}
    >
      {children}
    </div>
  );
};

export default Dropdown;
