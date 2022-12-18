// Navigation btn
const navBtns = document.querySelectorAll('.header__nav-link');
navBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    navBtns.forEach(btn => {
      btn.classList.remove('header__nav-link--active');
    });
    btn.classList.add('header__nav-link--active');
  });
});
// Change language
const languageBtns = document.querySelectorAll('.header__languages-btn');
languageBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    languageBtns.forEach(btn => {
      btn.classList.remove('header__languages-btn--active');
    });
    btn.classList.add('header__languages-btn--active');
  });
});
// Modal
const body = document.querySelector('.body');
const modalOverlay = document.querySelector('.modal__overlay');
const modalBtns = document.querySelectorAll('.services__card-btn');
const modalWindows = document.querySelectorAll('.modal__window');
const feedbackBtns = document.querySelectorAll('.modal__btn');
modalBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    modalWindows.forEach(modal => {
      modal.classList.remove('modal__window--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal__window--visible');
    modalOverlay.classList.add('modal__overlay--visible');
    body.style.overflow = "hidden";
  });
});
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('modal__overlay--visible');
    modalWindows.forEach(modal => {
      modal.classList.remove('modal__window--visible');
    });
    body.style.overflow = "auto";
  };
});
feedbackBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    modalOverlay.classList.remove('modal__overlay--visible');
    modalWindows.forEach(modal => {
      modal.classList.remove('modal__window--visible');
    });
    body.style.overflow = "auto";
  });
});
// Send mail
const form = document.querySelector('.form');
const sendMessage = document.querySelector('.send-modal');
function sendMail() {
  let formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        sendMessage.classList.add('send-modal--visible');
        setTimeout(() => sendMessage.classList.remove('send-modal--visible'), 2000);
      };
    };
  };
  xhr.open('POST', '../mail.php', true);
  xhr.send(formData);
  form.reset();
};
form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendMail();
});
// Privacy policy
const privacyPolicyBtn = document.querySelector('.checkbox__link');
privacyPolicyBtn.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Эта страница находиться в разработке, попробуйте зайти позднее.');
});
