"use strict";
const toggle = document.querySelector(".toggle > img");
const closeIcon = document.querySelector(".close");
const dropDownList = document.querySelector(".drop-down");
const overly = document.querySelector(".overly");
function toggleMenu() {
    toggle === null || toggle === void 0 ? void 0 : toggle.addEventListener("click", () => {
        toggle.className = "hide";
        overly === null || overly === void 0 ? void 0 : overly.classList.add("show");
        closeIcon === null || closeIcon === void 0 ? void 0 : closeIcon.classList.add("show");
        dropDownList === null || dropDownList === void 0 ? void 0 : dropDownList.classList.add("show");
    });
}
function close() {
    closeIcon === null || closeIcon === void 0 ? void 0 : closeIcon.classList.remove("show");
    dropDownList === null || dropDownList === void 0 ? void 0 : dropDownList.classList.remove("show");
    overly === null || overly === void 0 ? void 0 : overly.classList.remove("show");
    toggle === null || toggle === void 0 ? void 0 : toggle.classList.remove("hide");
}
function closeMenu() {
    closeIcon === null || closeIcon === void 0 ? void 0 : closeIcon.addEventListener("click", () => {
        close();
    });
    document.addEventListener("click", (event) => {
        if (event.target !== closeIcon && event.target !== toggle) {
            close();
        }
    });
}
toggleMenu();
closeMenu();
//# sourceMappingURL=main.js.map