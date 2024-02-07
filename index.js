const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})




//// Función para cambiar el idioma
function cambiarIdioma() {
    var checkbox = document.querySelector('.check');

    document.documentElement.lang = checkbox.checked ? 'en' : 'es';

    var idiomaActual = checkbox.checked ? 'en' : 'es';
    var elementos = document.querySelectorAll('.' + idiomaActual);

    elementos.forEach(function (elemento) {
        elemento.classList.toggle('checked', checkbox.checked);
    });
}

// Asignar la función al evento change del checkbox
document.querySelector('.check').addEventListener('change', cambiarIdioma);