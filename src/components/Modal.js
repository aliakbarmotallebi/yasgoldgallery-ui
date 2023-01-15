import React, { useRef, useEffect, useCallback } from "react";

const Modal = ({ title, showModal, setShowModal, children }) => {
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div onClick={() => setShowModal(false) }className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black/90">
          <div className="flex justify-center items-center h-full">
            <div className="relative w-full h-full max-w-2xl md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="p-6 space-y-6">{children}</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
