const sideNav = document.querySelector('.sideNav')
    sideNav.addEventListener('mouseover',displayNavNames)
    sideNav.addEventListener('mouseout',hideNavNames)
function displayNavNames  (){
    var navItemText = document.querySelectorAll('.nav-item-text')
    navItemText.forEach(
        ele=>{
            
            ele.style.display='block'
            
            sideNav.style.width='150px';
            
            })
    
}
function hideNavNames  (){
    var navItemText = document.querySelectorAll('.nav-item-text')
    navItemText.forEach(ele=>{sideNav.style.width='50px';
     ele.style.display='none'
   } )
   
}

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if(n > slides.length) {
    slideIndex = 1
  }
  if(n < 1) {
    slideIndex = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// display sideNav on menu icon click
const navContainer = document.querySelector('.nav-container')
const menu = document.querySelector('.menu')
menu.addEventListener('click', ()=>{
    if(navContainer.style.display==='none'){
        return navContainer.style.display='block'
    }
    else return navContainer.style.display = 'none'
})