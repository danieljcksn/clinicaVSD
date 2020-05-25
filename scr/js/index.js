
// Slider da Equipe
function rightSlider() {
  const scroll = document.getElementById('cards-equipe')
  scroll.scrollLeft += 300;
}

function leftSlider() {
  const scroll = document.getElementById('cards-equipe')
  scroll.scrollLeft -= 300;
}
// Remove Botões no Mobile
const width = screen.width;
const height = screen.height;

if (width < 768) {
    let botoes = document.querySelector('.equip-but')
    botoes.remove()
    // alert("A resolução da tela do seu monitor é " + width + "x" + height + "");

}

//Selecionador de data
$(document).ready(function(){
  $('.datepicker').datepicker();
});

//Horário
$(document).ready(function(){
  $('select').formSelect();
});

// Animação
const heart = document.querySelector('#heart')

anime({
  targets: heart,
  scale: 1.1,
  loop: true,
  direction: 'alternate',
  easing: 'linear'
});
