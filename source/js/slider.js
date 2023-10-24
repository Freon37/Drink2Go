import {
  slider,
  prevButton,
  nextButton,
  paginationButtons
} from '../../js/dom-elements.js';

let paginationButtonIndex = 0;
let position = 0;
let currentWIdth;

// Functions

const unlockingButtons = () => {
  prevButton.disabled = false;
  nextButton.disabled = false;
};

const lockingStartButton = () => {
  prevButton.disabled = true;
  nextButton.disabled = false;
};

const lockingEndButton = () => {
  prevButton.disabled = false;
  nextButton.disabled = true;
};

const thisSlide = (index) => {
  for (let paginationButton of paginationButtons) {
    paginationButton.classList.remove('pagination__item-button--current');
  }
  paginationButtons[index].classList.add('pagination__item-button--current');
};

const nextSlide = () => {
  currentWIdth = document.querySelector(".hero__wrapper-slider").offsetWidth;
  if (position === 0) {
    lockingStartButton();
  }
  position += currentWIdth;
  paginationButtonIndex++;
  slider.style.left = -position + 'px';
  thisSlide(paginationButtonIndex);
  if (position === (paginationButtons.length - 1) * currentWIdth) {
    lockingEndButton();
  } else {
    unlockingButtons();
  }
};

const prevSlide = () => {
  currentWIdth = document.querySelector(".hero__wrapper-slider").offsetWidth;
  if (position === (paginationButtons.length - 1) * currentWIdth) {
    lockingEndButton();
  }
  position -= currentWIdth;
  paginationButtonIndex--;
  slider.style.left = -position + 'px';
  thisSlide(paginationButtonIndex);
  if (position === 0) {
    lockingStartButton();
  } else {
    unlockingButtons();
  }
};

// Events

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

paginationButtons.forEach((paginationButton, index) => {
  paginationButton.addEventListener('click', () => {
    currentWIdth = document.querySelector(".hero__wrapper-slider").offsetWidth;
    position = currentWIdth * index;
    if (index == 0) {
      lockingStartButton();
    }
    if (index === (paginationButtons.length - 1)) {
      lockingEndButton();
    }
    if (index !== 0 && index !== (paginationButtons.length - 1)) {
      unlockingButtons();
    }

    slider.style.left = -position + 'px';
    paginationButtonIndex = index;
    thisSlide(paginationButtonIndex);
  })
});
