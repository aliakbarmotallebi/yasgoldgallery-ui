import React, { useEffect, useCallback } from "react";

const Modal = ({ showModal, setShowModal, children, className = "" }) => {
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  const clickedOnModal = (e) => {
    if (e.target.id === "modal") setShowModal(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div
          id="modal"
          onClick={(e) => clickedOnModal(e)}
          className="fixed flex items-center justify-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black/90"
        >
          <div className="flex justify-center items-center w-fit h-fit">
            <div className="relative w-full h-full max-w-3xl md:h-auto">
              <div
                className={`relative bg-white rounded-lg shadow dark:bg-gray-700 max-w-3/4 ${className}`}
              >
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
