//#region  Declaration
const toggle = document.querySelector(".toggle > img");
const closeIcon = document.querySelector(".close");
const dropDownList = document.querySelector(".drop-down") as HTMLElement;
const overly = document.querySelector(".overly");
//#endregion
//#region  Functions
function toggleMenu() {
  toggle?.addEventListener("click", () => {
    toggle.className = "hide";
    overly?.classList.add("show");
    closeIcon?.classList.add("show");
    dropDownList?.classList.add("show");
  });
}
function close() {
  closeIcon?.classList.remove("show");
  dropDownList?.classList.remove("show");
  overly?.classList.remove("show");
  toggle?.classList.remove("hide");
}
function closeMenu() {
  closeIcon?.addEventListener("click", () => {
    close();
  });
  document.addEventListener("click", (event: any) => {
    if (event.target !== closeIcon && event.target !== toggle) {
      close();
    }
  });
}
//#endregion
//#region Calls
toggleMenu();
closeMenu();
//#endregion
