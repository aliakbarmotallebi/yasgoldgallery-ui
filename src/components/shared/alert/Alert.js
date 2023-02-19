import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AlertStore } from "./AlertProvider";

const Alert = ({ text, status }) => {
  const { setShowAlert } = useContext(AlertStore);
  const [style, setStyle] = useState("gray");

  useEffect(() => {
    switch (status) {
      case "success":
        setStyle("green");
        break;
      case "error":
        setStyle("red");
        break;
      case "info":
        setStyle("blue");
        break;
      case "warning":
        setStyle("yellow");
        break;
    }
  }, []);

  return (
    <div
      className={`alert z-[1000] fixed right-1/2 translate-x-1/2 top-4 mx-auto bg-${style}-100 rounded-lg py-4 px-6 mb-3 text-base flex items-center justify-between container lg:max-w-6xl alert-dismissible fade show`}
    >
      <span className={`text-${style}-800`}>{text}</span>
      <button
        type="button"
        className={`btn-close box-content w-4 h-4 p-1 mr-auto text-${style}-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline`}
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() =>
          setShowAlert({
            show: false,
            status: null,
            text: "",
          })
        }
      ></button>
    </div>
  );
};

export default Alert;
