const menuIcon = document.querySelector('.burger_menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle("change");
})
