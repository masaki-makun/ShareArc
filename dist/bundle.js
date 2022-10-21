/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/fonts/css/all.css":
/*!*******************************!*\
  !*** ./src/fonts/css/all.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

const switchingMenus = () => {
  const menuList = document.querySelectorAll(".box-header-menu");
  const menu1 = document.querySelector(".box-header-menu--1");
  const menu2 = document.querySelector(".box-header-menu--2");
  const menu3 = document.querySelector(".box-header-menu--3");
  const searchInput = document.querySelector(".box-header-menu__form--input");
  const ACTIVE_CLASS = "is-active";
  const hamburgerBtn = document.querySelector(".hamburger-menu");
  const searchBtn = document.querySelector(".btn-search");
  const menus = document.querySelectorAll(".box-header-menu__item");
  const contents = document.querySelectorAll(".box-contents");

  menuList.forEach((menu) => {
    menu.addEventListener("click", () => {
      if (!menu.classList.contains(ACTIVE_CLASS)) {
        menu.classList.add(ACTIVE_CLASS);
      }
    });
  });

  const navMenuToggle = () => {
    hamburgerBtn.classList.toggle(ACTIVE_CLASS);
    const menu1Menus = menu1.querySelectorAll(".box-header-menu__item");
    const menu2Menus = menu2.querySelectorAll(".box-header-menu__item");
    if (hamburgerBtn.classList.contains(ACTIVE_CLASS)) {
      menu1.classList.remove(ACTIVE_CLASS);
      menu2.classList.add(ACTIVE_CLASS);
      menu3.classList.remove(ACTIVE_CLASS);
    } else if (!hamburgerBtn.classList.contains(ACTIVE_CLASS)) {
      menu1.classList.add(ACTIVE_CLASS);
      menu2.classList.remove(ACTIVE_CLASS);
      menu3.classList.remove(ACTIVE_CLASS);
    }
    if (searchBtn.classList.contains(ACTIVE_CLASS)) {
      searchBtn.classList.remove(ACTIVE_CLASS);
      searchInput.value = "";
    }
  };

  const resetMenuList = () => {
    let current;
    for (let i = 0, l = menus.length; i < l; i++) {
      tabInit(menus[i], l);
    }

    function tabInit(link) {
      if (!current) {
        current = link;
        link.classList.remove(ACTIVE_CLASS);
      }
    }
  };

  const contentsToggle = () => {
    if (menu1.classList.contains(ACTIVE_CLASS)) {
      contents[0].classList.add(ACTIVE_CLASS);
      contents[1].classList.remove(ACTIVE_CLASS);
    } else if (menu2.classList.contains(ACTIVE_CLASS)) {
      contents[1].classList.add(ACTIVE_CLASS);
      contents[0].classList.remove(ACTIVE_CLASS);
    } else if (menu3.classList.contains(ACTIVE_CLASS)) {
      contents[0].classList.add(ACTIVE_CLASS);
      contents[1].classList.remove(ACTIVE_CLASS);
    }
  };

  hamburgerBtn.addEventListener("click", navMenuToggle);
  hamburgerBtn.addEventListener("click", resetMenuList);
  hamburgerBtn.addEventListener("click", contentsToggle);
  searchBtn.addEventListener("click", resetMenuList);
  searchBtn.addEventListener("click", contentsToggle);

  const searchMenuToggle = () => {
    searchBtn.classList.toggle(ACTIVE_CLASS);
    if (searchBtn.classList.contains(ACTIVE_CLASS)) {
      menu1.classList.remove(ACTIVE_CLASS);
      menu2.classList.remove(ACTIVE_CLASS);
      menu3.classList.add(ACTIVE_CLASS);
    } else if (!searchBtn.classList.contains(ACTIVE_CLASS)) {
      menu1.classList.add(ACTIVE_CLASS);
      menu2.classList.remove(ACTIVE_CLASS);
      menu3.classList.remove(ACTIVE_CLASS);
      searchInput.value = "";
    }
    if (hamburgerBtn.classList.contains(ACTIVE_CLASS)) {
      hamburgerBtn.classList.remove(ACTIVE_CLASS);
    }
  };
  searchBtn.addEventListener("click", searchMenuToggle);
};

const switchingMenuIcons = () => {
  const menuElements = document.querySelectorAll("[data-menus]");
  const contentElements = document.querySelectorAll("[data-contents]");
  const ACTIVE_CLASS = "is-active";
  let hamburgerBtn = document.querySelector(".hamburger-menu");
  let searchBtn = document.querySelector(".btn-search");

  if (menuElements.length > 0) {
    for (let i = 0; i < menuElements.length; i++) {
      let menu = menuElements[i];
      let menuBtnElements = menu.querySelectorAll("[data-menu]");
      let contents = contentElements[i];
      let content = contents.querySelectorAll("[data-content]");
      let input = document
        .querySelector(".box-contents--1")
        .querySelectorAll("[data-input]");
      for (let i = 0; i < menuBtnElements.length; i++) {
        let menuBtn = menuBtnElements[i];
        function iconInit(e) {
          e.preventDefault();
          for (let i = 0; i < menuBtnElements.length; i++) {
            menuBtnElements[i].classList.remove(ACTIVE_CLASS);
            content[i].classList.remove(ACTIVE_CLASS);
          }
          menuBtn.classList.add(ACTIVE_CLASS);
          content[i].classList.add(ACTIVE_CLASS);
          input[i].value = "";
        }
        function resetIcon(e) {
          const menuItem = document.querySelectorAll(".box-header-menu__item");
          e.preventDefault();
          for (let i = 0; i < menuElements.length; i++) {
            menuBtn.classList.remove(ACTIVE_CLASS);
          }
          menuBtnElements[0].classList.add(ACTIVE_CLASS);
        }
        menuBtn.addEventListener("click", iconInit);
        hamburgerBtn.addEventListener("click", resetIcon);
        searchBtn.addEventListener("click", resetIcon);
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", switchingMenus);
document.addEventListener("DOMContentLoaded", switchingMenuIcons);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _fonts_css_all_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/css/all.css */ "./src/fonts/css/all.css");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/main.js */ "./src/js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_3__);





})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map