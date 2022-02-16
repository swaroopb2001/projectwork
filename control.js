/* -------- Image slideshow ------------ */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i, j;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > 3 /*slides.length*/) {slideIndex = 1}
  if (n < 1) {slideIndex = 3 /*slides.length*/}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = slides[3 + (slideIndex-1)].style.display = "block";
  dots[slideIndex-1].className += " active";
  dots[3 + (slideIndex-1)].className += " active";
}

/* --------------------------------------- */

/* Toggling between 'About Hostel' and 'Mess' */

var defaultCls = 0;
initContent();

function initContent() {
  cls = "IH_Content";
  document.getElementsByClassName(cls)[0].style.display = "block";
  document.getElementsByClassName(cls)[1].style.display = "none";
}

function showContent(i) {
  cls = "IH_Content";
  if(i == 1-defaultCls) {
    document.getElementsByClassName(cls)[i].style.display = "block";
    document.getElementsByClassName(cls)[1-i].style.display = "none";

    var h = document.getElementsByClassName("highlight");
    h[1-i].className = h[1-i].className.replace(" udl", "");
    h[i].className += " udl";

    defaultCls = i;
  }  
}