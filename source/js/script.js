/* в этот файл добавляет скрипты*/
import { showBurgerMenu } from "../../js/burger_menu.js";
import { navToogle, siteMenu, slides } from "../../js/dom_elements.js";
import {switchPagination, moveLeft, moveRight} from "../../js/slider.js";

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

for (let i = 1; i < slides.length; i++) {
  const slide = slides[i];
  slide.classList.add('visually-hidden');
}

document.addEventListener('click', (evt) => {
  let target;
  let activeSlideIndex;

  if (target = evt.target.closest(".pagination__item-button")) {
    activeSlideIndex = target.dataset.index;
    switchPagination(activeSlideIndex);
  }

  if (target = evt.target.closest(".controls__button--next")) {
    moveLeft();
  }

  if (target = evt.target.closest(".controls__button--prev")) {
    moveRight();
  }
});
