var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); 
}


var text = ["ENVÍO GRATIS A PARTIR DE $40.000 🚀", "3 CUOTAS SIN INTERÉS", "ENVIOS A TODO EL PAÍS"]; 
var index = 0; 
var duration = 3000; 

function changeText() {
  document.getElementById("text-container").textContent = text[index];
  index++;
  if (index === text.length) {
    index = 0;
  }
  setTimeout(changeText, duration);
}

changeText();