const game_container = document.querySelector('.game-container')
const images_array = ['/images/ana_du.jpeg', '/images/ana_laura.jpeg', '/images/baeta.jpeg', '/images/cairo_noleto.jpeg', '/images/djvoana_boeing.jpeg', '/images/gabi_martins.jpeg', '/images/gus_caetano.jpeg', '/images/isaac_batista.jpeg', '/images/jessica_lopes.jpeg', '/images/lucas_cassiano.jpeg', '/images/matheus_goyas.jpeg', '/images/oliva.jpeg','/images/rafael-luiz.jpeg', '/images/rods.jpeg', '/images/ronald_lima.jpeg'];

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
    }
  }
  return random_numbers_array;
} 

const insertRandomImages = () => {
  const front_card_images = document.getElementsByClassName('card-image-front');
  const random_numbers_array = generateRandomIndex();
  for(let i = 0; i < front_card_images.length; i += 1) {
    front_card_images[i].src = images_array[random_numbers_array[i]];
  }
}

window.onload = () => {
  creatingInitialDivs();
  insertRandomImages()
}