// Services card - доступность
const cards = document.querySelectorAll('.services__card');
cards.forEach(card => {
  card.addEventListener('focus', (e) => {
    cards.forEach(card => {
      card.classList.remove('is-focused');
    });
    card.classList.add('is-focused');
    card.querySelector('.services__card-btn ').focus();
    card.querySelector('.services__card-btn ').addEventListener('keydown', (e) => {
      if(e.code === 'Enter') {
        card.classList.remove('is-focused');
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



  // card.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   cards.forEach(card => {
  //     card.classList.remove('is-active');
  //   });
  //   card.classList.add('is-active');
  // });
  // // document.addEventListener('click', (e) => {
  // //   cards.forEach(card => {
  // //     card.classList.remove('is-active');
  // //   });
  // // });
});
