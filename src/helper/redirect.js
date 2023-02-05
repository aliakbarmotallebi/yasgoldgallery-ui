const redirect = (url) => {
  let currentUrl = window.location.toString();
  window.location = url.replace(currentUrl, url);
  console.log(currentUrl);
};

export default redirect;
