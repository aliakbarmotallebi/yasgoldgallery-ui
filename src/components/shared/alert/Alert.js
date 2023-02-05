import React from "react";
import { useContext } from "react";
import { AlertStore } from "./AlertProvider";

const Alert = ({ text, status }) => {
  const { setShowAlert } = useContext(AlertStore);

  const styleType = (status) => {
    let style = "gray";
    switch (status) {
      case "success":
        style = "green";
        break;
      case "error":
        style = "red";
        break;
      case "info":
        style = "blue";
        break;
      case "warning":
        style = "yellow";
        break;
    }
    return style;
  };

  return (
    <div
      className={`alert z-[1000] fixed right-1/2 translate-x-1/2 top-4 mx-auto bg-${styleType(
        status
      )}-100 rounded-lg py-4 px-6 mb-3 text-base text-${styleType(
        status
      )}-900 flex items-center justify-between container lg:max-w-6xl alert-dismissible fade show`}
    >
      <span>{text}</span>
      <button
        type="button"
        class="btn-close box-content w-4 h-4 p-1 mr-auto text-${style}-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline"
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
