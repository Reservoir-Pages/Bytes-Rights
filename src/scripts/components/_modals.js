// Modal
const body = document.querySelector('.body');
const modalOverlay = document.querySelector('.modal__overlay');
const modalBtns = document.querySelectorAll('.modal-btn');
const modalWindows = document.querySelectorAll('.modal__window');
const feedbackBtns = document.querySelectorAll('.modal__btn');
const closeBtns = document.querySelectorAll('.modal__close');

if(modalOverlay) {
  modalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');

      modalWindows.forEach(modal => {
        modal.classList.remove('modal__window--visible');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('modal__window--visible');
      modalOverlay.classList.add('modal__overlay--visible');
      body.style.overflow = "hidden";

      setTimeout(() => {
        document.querySelector(`[data-target="${path}"]`).querySelector('.modal__close').focus();
      }, 100);
    });
  });
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    };
  });
  feedbackBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      closeModal();
    });
  });
  closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      closeModal();
    });
  });
  document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape') {
      closeModal();
    }
  });
  function closeModal() {
    modalOverlay.classList.remove('modal__overlay--visible');
    modalWindows.forEach(modal => {
      modal.classList.remove('modal__window--visible');
    });
    body.style.overflow = "auto";
  };
}

