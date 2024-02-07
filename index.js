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




var check=document.querySelector(".check");
check.addEventListener("click", idioma);


function idioma (){
    let id = check.checked;
    if(id ==true){
        location.href = "/index.html";
    }else{
        location.href= "/indexx.html";
    }
}