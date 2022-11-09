// Variables
const menu = document.querySelector('.nav__menu')
const nav__ul = document.querySelector('.nav__ul')
const nav__close = document.querySelector('.nav__close')
const nav__icons = document.querySelector('.nav__icons')
const form = document.querySelector('.form')
const button__enviame = document.querySelector('.enviame')
// Eventos
menu.addEventListener('click', mostrarMenu)
form.addEventListener('submit', enviarFormulario)
nav__close.addEventListener('click', cerrarMenu)
// Funciones

function mostrarMenu(){
    console.log('hola');
    nav__ul.classList.toggle('activo')
}

function cerrarMenu(){

    nav__ul.classList.toggle('activo')

}

function enviarFormulario (evento){
    evento.preventDefault()
    const formulario = new FormData(this)
    console.log(formulario.get('nombre'));
    button__enviame.setAttribute('href', `mailto:carlosmoralessoy@gmail.com?subject=Nombre : ${formulario.get('nombre')}, Email: ${formulario.get('email')}&body=${formulario.get('mensaje')}`)
    button__enviame.click()
}
