let slideIndex = 0;
showSlides(slideIndex);

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000);
}

function bass() {
  window.open("./sections/bass.html");
}
function adv() {
  window.open("./sections/adv.html");
}

function opennav() {
  if (document.getElementById("navul").style.display == "block") {
    document.getElementById("navul").style.display = "none";
    document.getElementById("hero").style.margin = "100px 0 0 0 ";
  } else {
    document.getElementById("navul").style.display = "block";

    document.getElementById("hero").style.margin = "190px 0 0 0 ";
  }
}
