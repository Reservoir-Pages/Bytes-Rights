function formValidate() {
  const inputs = document.querySelectorAll('.form__input');
  const sendBtn = document.querySelector('.form__btn');

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      let validatesArray = [];

      inputs.forEach((input, i) => {
        if(validate(input)) {
          validatesArray[i] = validate(input);
        } else {
          validatesArray = [];
        };
      });

      if(validatesArray.length === 3) {
        sendBtn.disabled = false;
      } else {
        sendBtn.disabled = true;
      }
    });
    input.addEventListener('paste', () => {
      validate(input);
    });
  });
};
formValidate();

// function formValidate() {
//   const inputs = document.querySelectorAll('.form__input');
//   const sendBtn = document.querySelectorAll('.form__btn');

//   inputs.forEach((input, i) => {
//     input.addEventListener('input', () => {
//       let validatesArray = [];
//       console.log(validate(input));
//       if(validate(input)) {
//         console.log('111');
//       } else {
//         console.log('222');
//       }
//     });
//     input.addEventListener('paste', () => {
//       validate(input);
//     });
//   });
// };
// formValidate();

function validate(element) {
  const rePhone = /^[+]*[()\s0-9-]+$/;
  const reEmail = /^[a-z0-9_]+@+[a-z_]+\.+[a-z]+$/;
  const reFullname = /^[А-яa-zA-Z]+[-|\s|А-яa-zA-Z]*[А-яa-zA-Z]+$/;
  const value = element.value

  let elValidate = false;
  switch(element.name) {
    case 'phone':
      if(value.length > 7 && value.length < 20 && rePhone.test(value)) {
        element.style.borderColor = 'green';
        elValidate = true;
      } else {
        element.style.borderColor = 'red';
        elValidate = false;
      };
    break;
    case 'email':
      if (reEmail.test(value)) {
        element.style.borderColor = 'green';
        elValidate = true;
      } else {
        element.style.borderColor = 'red';
        elValidate = false;
      };
    break;
    default:
      if (value.length > 2 && value.length < 50 && reFullname.test(value)) {
        element.style.borderColor = 'green';
        elValidate = true;
      } else {
        element.style.borderColor = 'red';
        elValidate = false;
      };
    break;
  };

  return elValidate;
};
