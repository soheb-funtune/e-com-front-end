export const PreventBack = () => {
  window.history.pushState(null, "", window.location.href);

  window.addEventListener("popstate", function (event) {
    window.history.pushState(null, "", window.location.href);
  });
};
