const cardTxts = document.querySelectorAll('.cardTxt');

cardTxts.forEach(cardTxt => {

    cardTxt.addEventListener('mouseover', () => {

    cardTxt.style.backgroundColor = 'red'; 
  });
  
  cardTxt.addEventListener('mouseleave', () => {
    cardTxt.style.backgroundColor = ''; 
  });
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    card.addEventListener('mousedown', () => {
        card.classList.add('pressed'); 
    });
    
    card.addEventListener('mouseup', () => {
    card.classList.remove('pressed'); 
    });

    card.addEventListener('mouseleave', () => {
    card.classList.remove('pressed'); 
    });

});
