const checkOrderInfo = (order) => {
  const validateOrder = {
    products: true,
    firstName: true,
    lastName: true,
    addressId: true,
  };
  if (order.address_id === null) {
    validateOrder.addressId = false;
  }
  if (order.products.length < 1) {
    validateOrder.products = false;
  }
  if (order.userInfo.firstname.trim() === "") {
    validateOrder.firstName = false;
  }
  if (order.userInfo.lastname.trim() === "") {
    validateOrder.lastName = false;
  }

  if (Object.values(validateOrder).includes(false)) return false;
  return true;
};

export default checkOrderInfo;
