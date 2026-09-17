var slides = document.querySelectorAll('.slide');
var buttons = document.querySelectorAll('.slider-btn');
var currentSlide = 0;
var timer;

var showSlide = function (slideIndex) {
    if (!slides.length || slideIndex < 0 || slideIndex >= slides.length) {
        return;
    }

    currentSlide = slideIndex;

    slides.forEach(function (slide, index) {
        slide.classList.toggle('active', index === currentSlide);
    });

    buttons.forEach(function (button, index) {
        button.classList.toggle('active', index === currentSlide);
        button.toggleAttribute('aria-current', index === currentSlide);
    });
};

var startSlider = function () {
    if (slides.length < 2) {
        return;
    }

    clearInterval(timer);
    timer = setInterval(function () {
        showSlide((currentSlide + 1) % slides.length);
    }, 5000);
};

buttons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        showSlide(index);
        startSlider();
    });
});

showSlide(currentSlide);
startSlider();