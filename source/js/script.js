/* в этот файл добавляет скрипты*/
// import { showBurgerMenu } from "../../js/burger_menu.js";
// import { navToogle } from "../../js/dom_elements.js";

const navMain = document.querySelector('.main-nav');
const navToogle = document.querySelector('.main-nav__toogle');

const siteMenu = document.querySelector('.site-list');

const showBurgerMenu = () =>  {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
};

navToogle.addEventListener('click', showBurgerMenu);

siteMenu.addEventListener('click', (evt) => {
  const clickedLink = evt.target;
  if (!clickedLink.classList.contains('site-list__link')) {
    return;
  }

  const currentLink = siteMenu.querySelector('.site-list__link--current');
  currentLink.classList.remove('site-list__link--current');
  clickedLink.classList.add('site-list__link--current');

});
