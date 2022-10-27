// Variables
const menu = document.querySelector('.nav__menu')
const nav__ul = document.querySelector('.nav__ul')
const submit = document.querySelector('.form__submit')
const form = document.querySelector('.form')
const button__enviame = document.querySelector('.enviame')
// Eventos
menu.addEventListener('click', mostrarMenu)
form.addEventListener('submit', enviarFormulario)
// Funciones
function mostrarMenu(){
    console.log('hola');
    nav__ul.classList.toggle('activo')
}

function enviarFormulario (evento){
    evento.preventDefault()
    const formulario = new FormData(this)
    console.log(formulario.get('nombre'));
    button__enviame.setAttribute('href', `mailto:carlosmoralessoy@gmail.com?subject=Nombre : ${formulario.get('nombre')}, Email: ${formulario.get('email')}&body=${formulario.get('mensaje')}`)
    button__enviame.click()
}
