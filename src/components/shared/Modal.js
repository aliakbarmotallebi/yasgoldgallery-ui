import { lockScroll, unlockScroll } from "helper/controlerScrollbar";
import React, { useEffect, useCallback } from "react";

const Modal = ({ showModal, setShowModal, children }) => {
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
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

  useEffect(() => {
    showModal ? lockScroll() : unlockScroll();
  }, [showModal]);

  return (
    <>
      {showModal ? (
        <div
          onClick={(e) => clickedOnModal(e)}
          class="fixed flex items-center justify-center top-0 left-0 right-0 z-[100] w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full bg-black/90"
        >
          <div
            id="modal"
            class="flex justify-center items-center w-full h-full"
          >
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
