const menu = document.querySelector('.nav-pic');
const mobMenu = document.getElementById('menu');

menu.addEventListener('click', () => {
  mobMenu.classList.toggle('active');
});
