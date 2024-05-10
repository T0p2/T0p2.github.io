<<<<<<< HEAD:index.js
=======
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



>>>>>>> c29fe79d0fef5712aa2ac675ab8bde3cbd3f5ff1:code.js

var check=document.querySelector(".check");
check.addEventListener("click", idioma);


function idioma (){
    let id = check.checked;
<<<<<<< HEAD:index.js
    if(id == true){
        location.href = "/index.html";
=======
    if(id ==true){
        location.href = "index.html";
>>>>>>> c29fe79d0fef5712aa2ac675ab8bde3cbd3f5ff1:code.js
    }else{
        location.href= "indexx.html";
    }
}