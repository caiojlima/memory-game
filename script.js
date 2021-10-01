const game_container = document.querySelector('.game-container')

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

window.onload = () => {
  creatingInitialDivs();
}