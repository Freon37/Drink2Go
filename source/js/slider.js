import { prevButton, nextButton, slides, paginationButtons } from '../../js/dom-elements.js';

let slideIndex = 0;

function switchPagination(activeSlideIndex) {
  if (activeSlideIndex === slides.length - 1) {
    nextButton.disabled = true;
  }
  if (activeSlideIndex === 0) {
    prevButton.disabled = true;
  }
  document.querySelector('.pagination__item-button--current').classList.remove('pagination__item-button--current');
  document.querySelector('.slider__item--current').classList.add('visually-hidden');
  document.querySelector('.slider__item--current').classList.remove('slider__item--current');
  document.querySelectorAll('.pagination__item-button')[activeSlideIndex].classList.add('pagination__item-button--current');
  document.querySelectorAll('.slider__item')[activeSlideIndex].classList.remove('visually-hidden');
  document.querySelectorAll('.slider__item')[activeSlideIndex].classList.add('slider__item--current');
}

function moveLeft() {
  prevButton.disabled = false;
  slides[slideIndex].classList.add('visually-hidden');
  paginationButtons[slideIndex].classList.remove('pagination__item-button--current');
  ++slideIndex;
  slides[slideIndex].classList.remove('visually-hidden');
  paginationButtons[slideIndex].classList.add('pagination__item-button--current');
  if (slideIndex === slides.length - 1) {
    nextButton.disabled = true;
  }
}

function moveRight() {
  nextButton.disabled = false;
  slides[slideIndex].classList.add('visually-hidden');
  paginationButtons[slideIndex].classList.remove('pagination__item-button--current');
  --slideIndex;
  slides[slideIndex].classList.remove('visually-hidden');
  paginationButtons[slideIndex].classList.add('pagination__item-button--current');
  if (slideIndex === 0) {
    prevButton.disabled = true;
  }
}

export { switchPagination, moveLeft, moveRight };
