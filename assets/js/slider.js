// var counter = 2

// setInterval(function(){
//     document.getElementById('radio' + counter).checked = true
//     counter++
//     if ( counter > 4){
//         counter = 1
//     }
// }, 4000)

// Cach nay cho hako
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("container__slider-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}