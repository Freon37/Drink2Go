/* в этот файл добавляет скрипты*/
import { showBurgerMenu } from '../../js/burger-menu.js';
import { navToogle, siteMenu /*, slides */ } from '../../js/dom-elements.js';
import  '../../js/slider.js';

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
