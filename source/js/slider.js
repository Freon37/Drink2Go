import { prevButton, nextButton, slides, paginationButtons } from "../../js/dom_elements.js";

let slideIndex = 0;

function switchPagination(activeSlideIndex) {
  if (activeSlideIndex === slides.length - 1) { // Убираем "правую" стрелку, если справа слайдов больше нет
    nextButton.disabled = true;
  }
  if (activeSlideIndex === 0) { // Убираем "левую" стрелку, если слева слайдов больше нет
    prevButton.disabled = true;
  }
  document.querySelector(".pagination__item-button--current").classList.remove("pagination__item-button--current");
  document.querySelector('.slider__item--current').classList.add("visually-hidden");
  document.querySelector('.slider__item--current').classList.remove("slider__item--current");
  document.querySelectorAll(".pagination__item-button")[activeSlideIndex].classList.add("pagination__item-button--current");
  document.querySelectorAll('.slider__item')[activeSlideIndex].classList.remove("visually-hidden");
  document.querySelectorAll('.slider__item')[activeSlideIndex].classList.add("slider__item--current");
}

function moveLeft() {
  prevButton.disabled = false;
  slides[slideIndex].classList.add('visually-hidden');
  paginationButtons[slideIndex].classList.remove('pagination__item-button--current');
  ++slideIndex;
  slides[slideIndex].classList.remove('visually-hidden');
  paginationButtons[slideIndex].classList.add('pagination__item-button--current');
  if (slideIndex === slides.length - 1) { // Убираем "правую" стрелку, если справа слайдов больше нет
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


// document.addEventListener("DOMContentLoaded", initSlider)

// function initSlider() {
//   let activeSlideIndex = 0;
//   const slidesQuantity = slides.length;

//   // init slider and clicks
//   initSliderClicks();

//   function initSliderClicks() {
//     document.addEventListener("click", (evt) => {
//       let target;

//       if (target = evt.target.closest(".controls__button--next")) {
//         switchSlide(1)
//         return
//       }
//       if (target = evt.target.closest(".controls__button--prev")) {
//         switchSlide(-1)
//         return
//       }
//       if (target = evt.target.closest(".pagination__item-button")) {
//         let neededIndex = target.dataset.index;
//         activeSlideIndex = +neededIndex;
//         switchPagination();
//       }
//     })
//   }

//   function switchSlide(direction) {
//     activeSlideIndex += direction;
//     if (activeSlideIndex === slidesQuantity) {
//       activeSlideIndex = 0;
//     };
//     if (activeSlideIndex < 0) {
//       activeSlideIndex = slidesQuantity - 1;
//       slides[activeSlideIndex + 1].classList.add('visually-hidden');
//     } else {
//       slides[activeSlideIndex - 1].classList.add('visually-hidden');
//     }

//     slides[activeSlideIndex].classList.remove('visually-hidden');

//     switchPagination();
//   }

//   function switchPagination() {
//     document.querySelector(".pagination__item-button--current").classList.remove("pagination__item-button--current");
//     document.querySelector('.slider__item--current').classList.add(".visually-hidden");
//     document.querySelector('.slider__item--current').classList.remove(".slider__item--current");
//     document.querySelectorAll(".pagination__item-button")[activeSlideIndex].classList.add("pagination__item-button--current");
//     document.querySelectorAll('.slider__item')[activeSlideIndex].classList.remove(".visually-hidden");
//     document.querySelectorAll('.slider__item')[activeSlideIndex].classList.add(".slider__item--current");
//   }
// }
