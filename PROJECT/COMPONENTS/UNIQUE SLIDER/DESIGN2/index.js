// Get DOM elements
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

// Show arrows on mouse movement near the left or right edges
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mousemove', function(e) {
    const width = sliderContainer.offsetWidth;
    const mouseX = e.clientX;

    if (mouseX < width * 0.2) {
        leftArrow.style.opacity = '1';
        leftArrow.style.display = 'block';
        rightArrow.style.opacity = '0';
    } else if (mouseX > width * 0.8) {
        rightArrow.style.opacity = '1';
        rightArrow.style.display = 'block';
        leftArrow.style.opacity = '0';
    } else {
        leftArrow.style.opacity = '0';
        rightArrow.style.opacity = '0';
    }
});

// Hide arrows when mouse leaves the slider
sliderContainer.addEventListener('mouseleave', function() {
    leftArrow.style.opacity = '0';
    rightArrow.style.opacity = '0';
});

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });

    const offset = -index * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Move to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Event listeners for arrow buttons
rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);

// Update the slides based on dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Automatically move to the next slide every 5 seconds
setInterval(nextSlide, 5000);
