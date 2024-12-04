// Get the slider container
const slides = document.querySelectorAll('.slide');
const backgroundSlides = document.querySelectorAll('.background-slide');

// Get the navigation buttons
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Get the dots
const dots = document.querySelectorAll('.dot');

// Set the current slide index
let currentSlideIndex = 0;

// Function to show the slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    backgroundSlides[i].classList.remove('active');
    dots[i].classList.remove('active');

    if (i === index) {
      slide.classList.add('active');
      backgroundSlides[i].classList.add('active');
      dots[i].classList.add('active');
    }
  });
}

// Function to show the next slide
function showNextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

// Function to show the previous slide
function showPreviousSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
}

// Add event listeners to the navigation buttons
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Add event listeners to the dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
  });
});

// Initialize the slider on page load
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlideIndex);
});
