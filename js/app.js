// Variables
const menu = document.querySelector('.nav__menu')
const navUl = document.querySelector('.nav__ul')
const navClose = document.querySelector('.nav__close')
const navIcons = document.querySelector('.nav__icons')
const form = document.querySelector('.form')
const buttonEnviame = document.querySelector('.enviame')
const navA = document.querySelectorAll('.nav__a')
// Eventos
menu.addEventListener('click', mostrarMenu)
form.addEventListener('submit', enviarFormulario)
navClose.addEventListener('click', cerrarMenu)
navA.forEach((e)=>{
    e.addEventListener('click', cerrarMenu)
})
// Efecto smooth cuando hacemos click a algun enlace del header
navA.forEach((link) => {
    link.addEventListener('click', (e)=>{
        e.preventDefault()

        const seccionScroll = e.target.attributes.href.value;
        const seccion = document.querySelector(seccionScroll);
        seccion.scrollIntoView({behavior: "smooth"});
    })
});
// Funciones

function mostrarMenu(){
    navUl.classList.toggle('activo')
}

function cerrarMenu(){

    navUl.classList.toggle('activo')

}

function enviarFormulario (evento){
    evento.preventDefault()
    const formulario = new FormData(this)
    buttonEnviame.setAttribute('href', `mailto:carlosmoralessoy@gmail.com?subject=Nombre : ${formulario.get('nombre')}, Email: ${formulario.get('email')}&body=${formulario.get('mensaje')}`)
    buttonEnviame.click()
}
