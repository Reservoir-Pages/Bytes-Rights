// Send mail
const form = document.querySelector(".form");
const sendMessage = document.querySelector(".send-modal");
const inputs = document.querySelectorAll(".form__input");

function sendMail() {
  let formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // postDb(formData);
        sendMessage.classList.add("send-modal--visible");
        setTimeout(() => sendMessage.classList.remove("send-modal--visible"), 2000);
      }
    }
  };
  xhr.open("POST", "../mail.php", true);
  xhr.send(formData);
  form.reset();
}

// function postDb(formData) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "../db.php", true);
//   xhr.send(formData);
// }

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let validatesArray = [];

    inputs.forEach((input, i) => {
      if (input.style.borderColor === "green") {
        validatesArray[i] = true;
      }
    });
    if (validatesArray.length === 3) {
      sendMail();
      inputs.forEach((input) => {
        input.style.borderColor = "black";
      });
    }
  });
}
