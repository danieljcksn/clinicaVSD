
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
const botaoL = document.getElementById('btnL')
const botaoR = document.getElementById('btnR')

if (width <= 768) {
    botaoL.remove()
    botaoR.remove()
}

// Animação
const heart = document.querySelector('#heart')

anime({
  targets: heart,
  scale: 1.1,
  loop: true,
  direction: 'alternate',
  easing: 'linear'
});
