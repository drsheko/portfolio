// scroll reveal
ScrollReveal({
  reset: true,
  duration: 3000,
  delay: 200,
})
ScrollReveal().reveal('.home-content', { origin: 'top', distance: '500px' })
ScrollReveal().reveal('.home-img', {
  origin: 'right',
  delay: 900,
  duration: 1700,
  distance: '500px',
})
ScrollReveal().reveal('.navbar , .switch-btn , #menu-icon', {
  origin: 'right',
  distance: '300px',
  delay: 50,
  reset: false,
  container: 'header',
})
//ScrollReveal().reveal(' .switch-btn ', {origin:'right', distance:'300px', delay:0, reset:false, container:'header'});
//ScrollReveal().reveal('#menu-icon ', {opacity:0,delay:1000, reset:false, container:'header'});
ScrollReveal().reveal('.logo ', {
  origin: 'left',
  distance: '50px',
  delay: 50,
  reset: false,
  container: 'header',
})
ScrollReveal().reveal('.heading', {
  origin: 'top',
  distance: '100px',
  duration: 1500,
})
ScrollReveal().reveal('.heading', {
  origin: 'top',
  distance: '100px',
  duration: 1500,
})
ScrollReveal().reveal('.about-left', { origin: 'left',
  distance: '100px',
  duration: 2000, })
ScrollReveal().reveal('.about-right', {
  origin: 'bottom',
  distance: '100px',
  duration: 1500,
})
ScrollReveal().reveal('.graduation-heading', {
  origin: 'left',
  distance: '130px',
  duration: 1500,
})
ScrollReveal().reveal('.certifications-heading', {
  origin: 'right',
  distance: '150px',
  duration: 1500,
})
ScrollReveal().reveal('.contact-info-container', {
  origin: 'right',
  delay: 0,
  distance: '100px',
  duration: 2000,
})

// Grid animation
/*for (let i = 1; i <= 16; i++) {
  let delay = i * 980
   ScrollReveal().reveal('.skills-container div:nth-of-type('+i+')',{  scale:1.3, duration:250, delay:delay,reset:true} );
}*/
// Graduation animation
for (let i = 2; i <= 4; i++) {
  let delay = i * 180
   ScrollReveal().reveal('.graduation-container div:nth-of-type('+i+')',{  scale:1.3, duration:250, delay:delay,reset:true} );
}
// Certifications animation
for (let i = 2; i <= 3; i++) {
  let delay = i * 280
   ScrollReveal().reveal('.certifications-container div:nth-of-type('+i+')',{  scale:1.3, duration:350, delay:delay,reset:true} );
}
// =======typed
var typed = new Typed('.my-text', {
  strings: ['Full-Stack Web Developer', 'Front-End Web Developer', 'Back-End Web Developer'],
  startDelay: 1200,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: 2,
})
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')
let sideLinks = document.querySelectorAll('.sideNavbar nav a')

// elevate navbar with scrolling down
const navbar = document.querySelector('.nav-container')
window.onscroll = function () {
  sections.forEach((sec) => {
    let top = window.scrollY
    let offset = sec.offsetTop - 150
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active-link')
        link.firstElementChild.classList.remove('bx-tada')
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active-link')
        document
          .querySelector('.header nav a[href*=' + id + '] i')
          .classList.add('bx-tada')
      })
      sideLinks.forEach((link) => {
        link.classList.remove('sideNavbar-active')
        link.firstElementChild.classList.remove('bx-tada')
        document
          .querySelector('.sideNavbar nav a[href*=' + id + ']')
          .classList.add('sideNavbar-active')
        document
          .querySelector('.sideNavbar nav a[href*=' + id + '] i')
          .classList.add('bx-tada')
      })
    }
  })

  let navigationbar = document.querySelector('header')
  navigationbar.classList.toggle('scrolled-navbar', window.scrollY > 100)
}

// ========Slider==========

let slide_index = { '1': 1, '2': 1, "3":1, "4":1 }

showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);

function plusSlides(n, projectId) {
  showSlides((slide_index[projectId] += n), projectId)
}
function currentSlide(n, projectId) {
  slide_index[projectId] = n
  showSlides(n, projectId)
}
function showSlides(n, projectId) {
  var i
  var slides = document.querySelectorAll(`.project-${projectId}-slide`)
  var dots = document.querySelectorAll(`.project-${projectId}-dot`)
  if (n > slides.length) {
    slide_index[projectId] = 1
  }
  if (n < 1) {
    slide_index[projectId] = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' dot-active', '')
  }
  slides[slide_index[projectId] - 1].style.display = 'block'
  dots[slide_index[projectId] - 1].className += ' dot-active'
}

// show sideNav + hide top nav
const hamburgerMenu = document.querySelector('#menu-icon')
const sideNavbar = document.querySelector('.sidenavbar-container')
function showSideNavbar() {
  //hamburgerMenu.style.display='none';
  sideNavbar.classList.remove('fadeOutLeft')
  sideNavbar.classList.add('bounceInLeft')
  sideNavbar.style.display = 'flex'
  // hamburgerMenu.style.display='none'
  hamburgerMenu.classList.toggle('bx-menu')
}
hamburgerMenu.addEventListener('click', showSideNavbar)

// hide sideNav + show top nav
const sideNavbarCloseBtn = document.querySelector('.closs-sidenavbar')
sideNavbarCloseBtn.addEventListener('click', hideSideNavbar)
function hideSideNavbar() {
  sideNavbar.classList.add('fadeOutLeft')

  // hamburgerMenu.style.display='block ';

  hamburgerMenu.classList.toggle('bx-menu')
}

// hide sidenav when link chosed

sideLinks.forEach((link) => {
  link.addEventListener('click', hideSideNavbar)
})

const switcherBtn = document.querySelector('.switch-btn')
const switcher = document.querySelector('.switch-btn-toggler')
const switcherIcon = document.querySelector('.switch-btn-toggler i')
var theme = 'dark' //default
switcherBtn.addEventListener('click', () => {
  // switch icons
  switcher.classList.toggle('switch-btn-toggler-active')
  switcherIcon.classList.toggle('bxs-moon')
  switcherIcon.classList.toggle('bxs-sun')
  //switch theme
  theme === 'dark' ? (theme = 'light') : (theme = 'dark')
  // switch colors to match theme
  if (theme === 'light') {
    // document.documentElement.style.setProperty('--main-color', '#0091ea');
    document.documentElement.style.setProperty('--main-color', '#7843E9')
    document.documentElement.style.setProperty(
      '--bg-color',
      'rgba(255, 255, 255, 1)',
    )
    // document.documentElement.style.setProperty('--second-bg-color','#F3F8FF');
    document.documentElement.style.setProperty('--second-bg-color', '#E6E6E6')
    document.documentElement.style.setProperty('--text-color', '#354259 ')
    document.getElementById("home-image").src = "./style/images/personal/logo-2-removebg-preview.png"
    document.getElementById("sidenavbar-logo").src = "./style/images/personal/light-avatar-left.png"

  } else {
    document.documentElement.style.setProperty('--main-color', '#32c766')
    //document.documentElement.style.setProperty('--bg-color', '#1f242d')
    document.documentElement.style.setProperty('--bg-color', '#000F17')
  //  document.documentElement.style.setProperty('--second-bg-color', '#323946')
    document.documentElement.style.setProperty('--second-bg-color', '#03222D')
    document.documentElement.style.setProperty('--text-color', '#bababa')
    document.getElementById("home-image").src = "./style/images/personal/logo-1-removebg-preview.png"
    document.getElementById("sidenavbar-logo").src = "./style/images/personal/dark-avatar-left.png"

  }
})

let display = document.getElementById('display')
let about = document.querySelector('#about-whoami')
let skills = document.querySelector('#about-skills')
let aboutTab = document.querySelector('.about-tab')
let skillsTab = document.querySelector('.skills-tab')

let setAbout = () => {
  aboutTab.classList.remove('active-tab')
  skillsTab.classList.remove('active-tab')
  aboutTab.classList.add('active-tab')
  about.style.display = 'block'
  skills.style.display = 'none'
}
let setSkills = () => {
  aboutTab.classList.remove('active-tab')
  skillsTab.classList.remove('active-tab')
  skillsTab.classList.add('active-tab')
  skills.style.display = 'flex'
  about.style.display = 'none'
}

// SEND EMAIL THROUGH CONTACT SECTION
var submitBtn = document.querySelector('#form-submit')
var form = document.querySelector('.form')
//var modal =document.querySelector('.modal')
const submitForm = async (e) => {
  console.log('wwwwwwwww')
  e.preventDefault()
  e.stopImmediatePropagation()
  var fullName = document.querySelector('#form-name')
  var email = document.getElementById('form-email')
  var message = document.querySelector('#form-message')

  try {
    //$('#modal-spinner').modal('show')
    var url = 'https://jd-broker-admin.onrender.com/'
    var res = await fetch(`${url}api/portfolio/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        fullName: fullName.value,
        email: email.value,
        message: message.value,
      }),
    })
    openModal()
    var data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }

  fullName.value = ''
  email.value = ''
  message.value = ''
}

form.addEventListener('submit', submitForm)

// Modal OPEN /CLose
let modalClose = document.getElementsByClassName('modal-close')
let modal = document.querySelector('#modal')
let openModal = () => {
  modal.style.display = 'flex'
}

let closeModal = () => {
  modal.style.display = 'none'
}
