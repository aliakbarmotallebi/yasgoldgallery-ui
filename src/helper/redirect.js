const redirect = (url) => {
  let currentUrl = window.location.toString();
  window.location = url.replace(currentUrl, url);
};

export default redirect;
