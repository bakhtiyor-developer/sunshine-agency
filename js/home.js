let navTogglerBtnElement = document.querySelector('.nav__toggler');
let navListElement = document.querySelector('.nav__list');

navTogglerBtnElement.addEventListener('click', (e) => {
    e.preventDefault();
    navListElement.classList.toggle('nav__list--active');
})