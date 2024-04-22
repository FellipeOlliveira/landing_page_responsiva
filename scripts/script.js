const menu = document.querySelector('.menu');
const nav_menu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    nav_menu.classList.toggle('ativo');
})