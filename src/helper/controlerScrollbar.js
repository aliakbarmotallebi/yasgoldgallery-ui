const lockScroll = () => {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = `${scrollbarWidth}px`;
  document.body.classList.add("fixed", "inset-x-0", "overflow-hidden");
};

const unlockScroll = () => {
  document.body.style.paddingRight = null;
  document.body.classList.remove("fixed", "inset-x-0", "overflow-hidden");
};
export { lockScroll, unlockScroll };
