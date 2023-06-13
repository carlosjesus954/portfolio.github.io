// Variables
const menu = document.querySelector('.nav__menu')
const navUl = document.querySelector('.nav__ul')
const navClose = document.querySelector('.nav__close')
const navIcons = document.querySelector('.nav__icons')
const form = document.querySelector('.form')
const buttonEnviame = document.querySelector('.enviame')
const navA = document.querySelectorAll('.nav__a')
const moon = document.querySelector('.nav__moon')
const botonShadows = document.querySelectorAll('.button--shadows')
const body = document.querySelector('.body')
const textoColor = document.querySelectorAll('.text--darkmode')
const socialImg = document.querySelectorAll('.socials__img')


// Eventos
menu.addEventListener('click', mostrarMenu)
form.addEventListener('submit', enviarFormulario)
navClose.addEventListener('click', cerrarMenu)
navA.forEach((e)=>{
    e.addEventListener('click', cerrarMenu)
})
moon.addEventListener('click', cambiarTema)
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

function cambiarTema(){
    moon.classList.toggle('nav__moon--light')
    menu.classList.toggle('socials__img--dark')
    menu.classList.toggle('socials__img--light')
    navClose.classList.toggle('socials__img--dark')
    navClose.classList.toggle('socials__img--light')
    navUl.classList.toggle('mode--light')
    navUl.classList.toggle('nav__ul--dark')

    botonShadows.forEach((ele) => {
        ele.classList.toggle('button--lightshadows')
        ele.classList.toggle('button--shadows')
        body.classList.toggle('mode--light')
    });
    textoColor.forEach((texto)=>{
        texto.classList.toggle('text--darkmode')
        texto.classList.toggle('text--lightmode')
    })
    socialImg.forEach((img)=>{
        img.classList.toggle('socials__img--dark')
        img.classList.toggle('socials__img--light')
    })
}
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
