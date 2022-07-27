const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".nav-mobile");
const burgerIcon = document.querySelector(".icon-burger");
const closeIcon = document.querySelector(".icon-close");

export function burgerAddListener() {
  burger.addEventListener("click", () => {
    if (mobileNav.style.display === "block") {
      closeIcon.style.opacity = "0";
      setTimeout(() => {
        mobileNav.style.opacity = "0";
      }, 100);
      setTimeout(() => {
        burgerIcon.style.opacity = "1";
      }, 200);
      setTimeout(() => {
        mobileNav.style.display = "none";
      }, 300);
    } else {
      burgerIcon.style.opacity = "0";
      setTimeout(() => {
        mobileNav.style.display = "block";
      }, 100);
      setTimeout(() => {
        closeIcon.style.opacity = "1";
        mobileNav.style.opacity = "1";
      }, 200);
    }
  });
}
