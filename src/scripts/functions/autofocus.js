// Set focus
function setFocus(linkTo, focusElement) {
  document.querySelectorAll(linkTo).forEach((link) => {
    link.addEventListener("click", (e) => {
      setTimeout(() => {
        document.getElementById(focusElement).focus();
      }, 1);
    });
  });
}
setFocus('[href="./#feedback"]', "firstInput");
