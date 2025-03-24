const loader = document.querySelector('.loader-wrap');
window.onload = loader.style.opacity = '0';

let header = document.querySelector("header");
let body = document.querySelector("body");
let footer = document.querySelector(".footer");

const form = document.querySelector(".form");
const banner = document.querySelector(".banner");

const btn_get_started = document.querySelector(".get-started");
const btn_sign_up = document.querySelector(".btn-sign-up");

function setHeights(H, B, F) {
  let H_H, B_H, F_H;
  
 const getHeight = (H, B, F) => {
    H_H = getComputedStyle(H).height
    B_H = getComputedStyle(B).height
    F_H = getComputedStyle(F).height
  }
  
  getHeight(H, B, F);
  
  // alert(H_H + B_H + F_H);
}

setHeights(header, body, footer);

btn_sign_up.addEventListener('click', sign_up_clicked);
//btn_get_started.addEventListener('click', get_started_clicked);

function sign_up_clicked() {
  
  form.style.display = "none";
  banner.style.display = "flex";
}

//btn_get_started.addEventListener('click', get_started_clicked);

function get_started_clicked() {
  
  form.style.display = "flex";
  banner.style.display = "none";
}

const liWraps = document.querySelectorAll('.nav-li-anim-wrap');

for (let i = 0; i < liWraps.length; i++) {
  const liWrap = liWraps[i];
  const liAnimWrap = liWrap.lastElementChild;
  liWrap.addEventListener('mouseenter', () => {
    liAnimWrap.style.visibility = 'visible';    
    liAnimWrap.classList.toggle('li-hover')
  })
  liWrap.addEventListener('mouseleave', () => {
    liAnimWrap.classList.toggle('li-hover')
    liAnimWrap.style.visibility = 'hidden';
  })
}


//Navigation menu button/icon and cancel button/icon
const menuIconOpen = document.querySelector('.menu-i');
const menuIconClose = document.querySelector('.menu-i-close');
const menuItems = document.querySelector('.nav-menu');
let menuOpen = false;

menuIconOpen.addEventListener('click', () => {
  console.log(menuOpen);
  menuOpen = !menuOpen;
  console.log(menuOpen);

  if(menuOpen) {
    console.log('openningng');
    menuItems.style.opacity = '1';
    menuItems.style.transform = 'translateY(0)';
    menuIconClose.classList.toggle('menu-i-close-animate');
    document.body.style.overflow = 'hidden'
  }
})
menuIconClose.addEventListener('click', () => {
  menuOpen = !menuOpen;
  if (!menuOpen) {
    console.log('closingng');
    menuItems.style.opacity = '0';
    menuItems.style.transform = 'translateY(-100%)';
    menuIconClose.classList.toggle('menu-i-close-animate');
    document.body.style.overflow = 'unset'
  }
})


