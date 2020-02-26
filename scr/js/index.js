//--------------------------- Scroll Reveal ---------------------------//
//Carousel
ScrollReveal().reveal('#carousel', { delay: 500 });
ScrollReveal().reveal('#carousel', { duration: 2000 });
//Sobre
ScrollReveal().reveal('#titulo-sobre', { delay: 500 });
ScrollReveal().reveal('#titulo-sobre', { duration: 2000 });
//Card1
ScrollReveal().reveal('#card1', { delay: 700 });
ScrollReveal().reveal('#card1', { duration: 2000 });
//Card2
ScrollReveal().reveal('#card2', { delay: 1000 });
ScrollReveal().reveal('#card2', { duration: 2000 });
//Card3
ScrollReveal().reveal('#card3', { delay: 1300 });
ScrollReveal().reveal('#card3', { duration: 2000 });

//Equipe
ScrollReveal().reveal('#equipe-titulo', { delay:500 });
ScrollReveal().reveal('#equipe-titulo', { duration: 2000 });
//Cards-Equipe
ScrollReveal().reveal('#cards-equipe', { delay: 700 });
ScrollReveal().reveal('#cards-equipe', { duration: 2000 });

//Atendimento
ScrollReveal().reveal('#atendimento-titulo', { delay:500 });
ScrollReveal().reveal('#atendimento-titulo', { duration: 2000 });
//Formulário
ScrollReveal().reveal('#form', { delay: 700 });
ScrollReveal().reveal('#form', { duration: 2000 });

//Contato
ScrollReveal().reveal('#contato', { delay:500 });
ScrollReveal().reveal('#contato', { duration: 2000 });
//---------------------------------------------------------------------//

//Sidenav
const slide_menu = document.querySelectorAll(".sidenav");
M.Sidenav.init(slide_menu, {});

// Inicialização do ScrollsPy
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, options);
    throttle: 50;
});


//Contador de Caracteres
$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
