const menu = document.getElementById('menu');
const menuAberto = document.querySelector('.menu-aberto');

menu.addEventListener('click', () => {
    menuAberto.classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".banners img");
    let slideAtual = 0;

    function MostrarSlide() {
        slides[slideAtual].classList.remove("active");
        slideAtual = (slideAtual + 1) % slides.length;
        slides[slideAtual].classList.add("active");
    }

    setInterval(MostrarSlide, 3000);
});

function TrocarTema() {

    let header = document.getElementById("header");
    let menu = document.querySelector(".menu-aberto");

    if (document.body.style.backgroundColor === "black") {

        document.body.style.backgroundColor = "white";
        header.style.backgroundColor = "rgb(90, 90, 220)";
        menu.style.backgroundColor = "rgb(65, 65, 224)";
    } else {

        document.body.style.backgroundColor = "black";
        header.style.backgroundColor = "rgb(0, 0, 173)";
        menu.style.backgroundColor = "rgba(0, 0, 78, 1)";
    }
}



function Alerta() {
    alert("site em desenvolvimento!!!");

}