var scrollSlideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  scrollSlideIndex++;
  if (scrollSlideIndex > slides.length) {scrollSlideIndex = 1}
  slides[scrollSlideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
