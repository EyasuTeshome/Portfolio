const menu = document.querySelector('.nav-pic');
const mobMenu = document.getElementById('menu');
const link = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const closeBtn = document.querySelector('.close');

menu.addEventListener('click', () => {
  mobMenu.classList.toggle('active');
});
closeBtn.addEventListener('click', () => {
  mobMenu.classList.remove('active');
});
link.addEventListener('click', () => {
  mobMenu.classList.remove('active');
});
link2.addEventListener('click', () => {
  mobMenu.classList.remove('active');
});
link3.addEventListener('click', () => {
  mobMenu.classList.remove('active');
});