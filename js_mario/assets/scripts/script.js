var mario = document.querySelector('.mario')
const tubo = document.querySelector('.pipe')
const nuvem = document.querySelector('.cloud')
const gameOver = document.querySelector('.score-board')

function pulo(){
  // Adicionando a classe 'jump' no elemento 'mario'
  mario.classList.add('jump');

  // Timer
  setTimeout(() =>{

    mario.classList.remove('jump')

  }, 500)
}

// Verificar a colisao do mario e do tubo
const jogo = setInterval(() =>{

  // Receber a posicao do tubo
  var posicaoTubo = tubo.offsetLeft
  var posicaoNuvem = nuvem.offsetLeft
  var posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '')

  if( posicaoTubo <= 120 && posicaoTubo > 0 && posicaoMario < 80 ){

    // Game over
    // mario.style.animation = 'none'
    mario.style.bottom = `${posicaoMario}px`
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'
    mario.src = "./assets/imgs/game-over.png"

    // Parar tubo
    tubo.style.animation = 'none'
    tubo.style.left = `${posicaoTubo}px`

    // Parar nuvem
    nuvem.style.animation = 'none'
    nuvem.style.left = `${posicaoNuvem}px`

    // Mostrar game over
    // gameOver.style.display = 'flex'

    clearInterval( jogo )
  }

}, 10)


document.addEventListener('keydown', pulo)