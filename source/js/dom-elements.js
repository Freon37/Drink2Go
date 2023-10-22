const navMain = document.querySelector('.main-nav');
const navToogle = document.querySelector('.main-nav__toogle');

const siteMenu = document.querySelector('.site-list');
// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.controls__button--prev');
const nextButton = document.querySelector('.controls__button--next');
const slides = slider.querySelectorAll('.slider__item');
// Получаем элементы пагинации
const pagination = document.querySelector('.pagination');
const paginationButtons = pagination.querySelectorAll('.pagination__item-button');


export { navMain, navToogle, siteMenu, prevButton, nextButton, slides, paginationButtons };
