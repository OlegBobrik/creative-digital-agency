// Styles
import './scss/main.scss';

document.addEventListener(`DOMContentLoaded`, () => {
  let menuButton = document.querySelector(`.page-header__button-menu`);
  let menu = document.querySelector(`.nav`);

  if (window.innerWidth < 769) {
    menu.classList.add(`nav--hide`);
  }

  menuButton.addEventListener(`click`, () => {
    menu.classList.toggle(`nav--hide`);
    menuButton.classList.toggle(`page-header__button-menu--open`);
  });

  window.addEventListener(`resize`, () => {
    window.innerWidth > 769 ?
      menu.classList.remove(`nav--hide`) :
      menu.classList.add(`nav--hide`);
  });
});