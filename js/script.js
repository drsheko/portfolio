const sideNav = document.querySelector('.sideNav')
    sideNav.addEventListener('mouseover',displayNavNames)
    sideNav.addEventListener('mouseout',hideNavNames)
function displayNavNames  (){
    var navItemText = document.querySelectorAll('.nav-item-text')
    navItemText.forEach(ele=>{sideNav.style.width='150px';ele.style.display='block'})
   
}
function hideNavNames  (){
    var navItemText = document.querySelectorAll('.nav-item-text')
    navItemText.forEach(ele=>{sideNav.style.width='50px';
     ele.style.display='none'
   } )
   //sideNav.style.width = '10%'
}