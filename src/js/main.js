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
