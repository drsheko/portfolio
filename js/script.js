const sideNav = document.querySelector('.sideNav')
    sideNav.addEventListener('mouseover',displayNavNames)
    sideNav.addEventListener('mouseout',hideNavNames)
function displayNavNames  (){
    var navItemText = document.querySelectorAll('.nav-item-text')
    navItemText.forEach(ele=>{sideNav.style.width='150px';ele.style.display='block'})
    //console.log(sideNav.offsetWidth)
   // const skills = document.querySelector('.skills')
   // skills.style.marginLeft ='25%'
}
function hideNavNames  (){
    var navItemText = document.querySelectorAll('.nav-item-text')
    navItemText.forEach(ele=>{sideNav.style.width='50px';
     ele.style.display='none'
   } )
   //console.log(sideNav.offsetWidth)
   //const skills = document.querySelector('.skills')
   //skills.style.marginLeft =  '80px'
}
