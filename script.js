const game_container = document.querySelector('.game-container')
const images_array = ['./images/ana_du.jpeg', './images/ana_laura.jpeg', './images/baeta.jpeg', './images/izabella_vidigal.jpeg', './images/djvoana_boeing.jpeg', './images/gabi_martins.jpeg', './images/gus_caetano.jpeg', './images/isaac_batista.jpeg', './images/jessica_lopes.jpeg', './images/lucas_cassiano.jpeg', './images/matheus_goyas.jpeg', './images/oliva.jpeg','./images/rafael-luiz.jpeg', './images/rods.jpeg', './images/ronald_lima.jpeg'];


const creatingInitialDivs = () => {
  for (let i = 0; i < 30; i += 1) {
    const new_card_container = document.createElement('div');
    new_card_container.className = 'card-container';
    game_container.appendChild(new_card_container);
    const new_front_card = document.createElement('div');
    new_front_card.className = 'card-front';
    new_card_container.appendChild(new_front_card);
    const new_back_card = document.createElement('div');
    new_back_card.className = 'card-back';
    new_card_container.appendChild(new_back_card);
    const new_card_image = document.createElement('img');
    new_card_image.className = 'card-image-front';
    new_front_card.appendChild(new_card_image);
    const new_card_image_back = document.createElement('img');
    new_card_image_back.className = 'card-image-back';
    new_card_image_back.src = 'images/back_card.png';
    new_back_card.appendChild(new_card_image_back);
    new_front_card.appendChild(new_card_image);
  }  
}

const generateRandomIndex = () => {
  const random_numbers_array = [];
  for (let i = 0; i < 100000; i += 1) {
    const random_number = Math.floor(Math.random() * images_array.length);
    if(random_numbers_array.filter((elem) => elem === random_number).length < 2) {
    random_numbers_array.push(random_number);
    } else {
      if(random_numbers_array.length === 30) {
        return random_numbers_array;
      }
    }
  }
} 

const insertRandomImages = () => {
  const front_card_images = document.getElementsByClassName('card-image-front');
  const random_numbers_array = generateRandomIndex();
  for(let i = 0; i < front_card_images.length; i += 1) {
    front_card_images[i].src = images_array[random_numbers_array[i]];
  }
}

const createWinnerPopout = () => {
  const div_container = document.createElement('div');
  div_container.className = 'winner-container';
  document.querySelector('body').insertBefore(div_container, document.querySelector('.header'));
  const h2 = document.createElement('h2');
  h2.className = 'winner-text';
  h2.innerText = 'Obrigado por todos os ensinamentos!';
  div_container.appendChild(h2);
  const reload_button = document.createElement('button');
  reload_button.className = 'reload-button';
  reload_button.innerText = 'JOGAR NOVAMENTE';
  reload_button.addEventListener('click', () => {
    window.location.reload();
  })
  div_container.appendChild(reload_button);
}

const createBlock = () => {
  const div_container = document.createElement('div');
  div_container.className = 'block';
  document.querySelector('body').insertBefore(div_container, document.querySelector('.header'));
}

const removeBloc = () => {
  const block = document.querySelector('.block')
  block.remove();
}

const flipFunction = () => {
  const cards = document.querySelectorAll('.card-container');
  for (let i = 0; i < cards.length; i += 1) {
    cards[i].addEventListener('click', async ({ target }) => {
      if (target.classList[0] !== 'card-container' && target.classList[0] !== 'card-front'){
      target.parentNode.parentNode.classList.add('flip');
      const flipped = document.querySelectorAll('.flip');
      if (flipped.length === 2) {
        if(flipped[0].firstChild.firstChild.src === flipped[1].firstChild.firstChild.src) {
          flipped[0].classList.remove('flip')
          flipped[1].classList.remove('flip')
          flipped[0].classList.add('find')
          flipped[1].classList.add('find')
          const find = document.querySelectorAll('.find');
          if (find.length === 30) {
            setTimeout(() => {
              createWinnerPopout();
            },  1000);
          }
        } else {
          createBlock();
          setTimeout(() => {
            flipped[0].classList.remove('flip')
            flipped[1].classList.remove('flip')
            removeBloc();
          }, 1000);

        }
      }
    }
    })
  }
}

const dinamicFooter = () => {
  setInterval(() => {
    const apolo = document.querySelector('.apolo');
    const caio = document.querySelector('.caio');
    if (apolo.style.color === 'white') {
      apolo.style.color = 'black';
      caio.style.color = 'white';
      caio.style.fontSize = '1.5em';
      apolo.style.fontSize = '';
    } else {
      apolo.style.color = 'white';
      caio.style.color = 'black';
      caio.style.fontSize = '';
      apolo.style.fontSize = '1.5em';
    }    
  }, 800);
  
}

window.onload = () => {
  creatingInitialDivs();
  insertRandomImages();
  flipFunction();  
  dinamicFooter()
}
