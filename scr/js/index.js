
// Slider da Equipe
function rightSlider() {
  const scroll = document.getElementById('cards-equipe')
  scroll.scrollLeft += 50;
}

function leftSlider() {
  const scroll = document.getElementById('cards-equipe')
  scroll.scrollLeft -= 50;
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
  loop: true
});
