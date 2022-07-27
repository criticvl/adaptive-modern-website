import * as functions from "./modules/functions.js";
import * as burger from "./modules/burger.js";

functions.isWebp();

burger.burgerAddListener();

window.onscroll = function () {
  changeNav();
};

function changeNav() {
  if (document.documentElement.scrollTop > 80) {
    document.getElementById("header").className = "navigation-scroll";
  } else {
    document.getElementById("header").className = "";
  }
}
