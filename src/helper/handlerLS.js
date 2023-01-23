const checkLS = (
  key,
  defaultValueType = "object" || "array" || "string" || "number"
) => {
  let variable;
  switch (defaultValueType) {
    case "object":
      variable = {};
      break;
    case "array":
      variable = [];
      break;
    default:
      variable = "";
      break;
  }
  if (localStorage.getItem(key) !== null) {
    variable = JSON.parse(localStorage.getItem(key));
  } else {
    setLS(
      key,
      defaultValueType === "object"
        ? {}
        : defaultValueType === "array"
        ? []
        : ""
    );
  }
  return variable;
};

const setLS = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const getDataLS = (key) => JSON.parse(localStorage.getItem(key));

const removeDataLS = (key) => localStorage.removeItem(key);

export { checkLS, setLS, getDataLS, removeDataLS };
