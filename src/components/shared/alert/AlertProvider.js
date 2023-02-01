import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Alert from "./Alert";

export const AlertStore = createContext();
const AlertProvider = ({ children, time }) => {
  const [showAlert, setShowAlert] = useState({
    show: false,
    status: null,
    text: "",
  });

  useEffect(() => {
    if (showAlert)
      setTimeout(() => {
        setShowAlert({
          show: false,
          status: null,
          text: "",
        });
      }, time);
  }, [showAlert]);

  return (
    <AlertStore.Provider value={{ showAlert, setShowAlert, Alert }}>
      {children}
    </AlertStore.Provider>
  );
};

export default AlertProvider;
