const checkLS = () => {
  let cart = [];
  if (localStorage.getItem("cart") !== null) {
    cart = JSON.parse(localStorage.getItem("cart"));
  } else {
    setLS([]);
  }
  return cart;
};

const setLS = (newCart) =>
  localStorage.setItem("cart", JSON.stringify(newCart));

export { checkLS, setLS };
