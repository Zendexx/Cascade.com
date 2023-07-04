// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
      slideIndex = 1;
  }
  if (n < 1) {
      slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Automated scrolling
function automateScrolling() {
  const slides = document.querySelectorAll('.product-slide');
  const interval = 2000; // Set the interval time in milliseconds (e.g., 2000ms = 2 seconds)
  let currentSlide = 0;

  function showSlide(index) {
      slides.forEach((slide) => {
          slide.style.display = 'none';
      });

      slides[index].style.display = 'block';
  }

  function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
          currentSlide = 0;
      }
      showSlide(currentSlide);
  }

  setInterval(nextSlide, interval);
}

document.addEventListener('DOMContentLoaded', automateScrolling);
