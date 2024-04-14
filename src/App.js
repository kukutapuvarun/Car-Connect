let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
  menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
  menu.classList.toggle('active');
  search.classList.remove('active');
}
//hide menu and search on scroll
window.onscroll = () => {
  search.classList.remove('active');
  menu.classList.remove('active');
}

//header
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
})