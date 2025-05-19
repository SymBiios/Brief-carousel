"use strict";
let indexImageActive = 0;
const slides = document.querySelectorAll(".carousel-slides figure");

function actualImage() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  switch (indexImageActive) {
    case 0:
      slides[0].classList.add("active");
      break;
    case 1:
      slides[1].classList.add("active");
      break;
    case 2:
      slides[2].classList.add("active");
      break;
    case 3:
      slides[3].classList.add("active");
      break;
  }
}

function nextImage() {
  indexImageActive < slides.length - 1
    ? (indexImageActive += 1)
    : (indexImageActive = 0);
  actualImage();
}

function previousImage() {
  indexImageActive == 0
    ? (indexImageActive = slides.length - 1)
    : (indexImageActive -= 1);

  actualImage();
}

function initCarousel() {
  actualImage();

  const nextButton = document.querySelector(".next-image");
  const previousButton = document.querySelector(".prev-image");

  nextButton.addEventListener("click", nextImage);
  previousButton.addEventListener("click", previousImage);
}

document.addEventListener("DOMContentLoaded", initCarousel);
