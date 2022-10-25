// Variables
const menu = document.querySelector('.nav__menu')
const nav__ul = document.querySelector('.nav__ul')
// Eventos
menu.addEventListener('click', mostrarMenu)

// Funciones
function mostrarMenu(){
    console.log('hola');
    nav__ul.classList.toggle('activo')
}