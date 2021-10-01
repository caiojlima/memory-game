const game_container = document.querySelector('.game-container')

const creatingInitialDivs = () => {
  for (let i = 0; i < 30; i += 1) {
    const new_card = document.createElement('div');
    new_card.className = 'card';
    game_container.appendChild(new_card);
    const new_card_image = document.createElement('img');
    new_card_image.className = 'card-image';
    new_card.appendChild(new_card_image);
  }  
}

window.onload = () => {
  creatingInitialDivs();
}