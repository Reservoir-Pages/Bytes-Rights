// Services card - доступность
const cards = document.querySelectorAll('.services__card');
cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    document.activeElement.blur();
  });

  card.addEventListener('focus', (e) => {
    card.querySelector('.services__card-btn ').addEventListener('keydown', (e) => {
      if(e.code === 'Enter') {
        setTimeout(() => {
          document.querySelector('.modal__window--visible .modal__close').addEventListener('keydown', (e) => {
            if(e.code === 'Enter') {
              setTimeout(() => {
                card.focus();
              }, 1);
            };
          });
        }, 1);
      };
    });
  });
});
