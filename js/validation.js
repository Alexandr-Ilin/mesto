const checkInputValidity = (inputItem) => {
  const errorMassage = document.querySelector(`.error-message_type_${inputItem.name}`);
  console.log(errorMassage)
  if (inputItem.validity.valid) {
    errorMassage.textContent = '';
    inputItem.classList.remove('form__item_error');
  } else {
    errorMassage.textContent = inputItem.validationMessage;
    inputItem.classList.add('form__item_error');
  }
}

const checkButtonValidity = (form, button) => {
  console.log('peredano', form)
  if (form.checkValidity()) {
    console.log('valid', form.checkValidity())
      //console.log('button-check', form, button)
    button.removeAttribute('disabled')
    button.classList.remove('button_edit')
  } else {
    console.log('button-noCheck', button)
    button.setAttribute('disabled', '')
    button.classList.add('button_edit')
      //button.classList.add('gfdh')
    console.log('invalid', form.checkValidity())
  }
}

// function enableValidation() {
//   const inputItems = document.querySelectorAll('.form__item');
//   console.log(inputItems);
//   checkButtonValidity(form, button)
//   inputItems.forEach(inputItem => {
//     inputItem.addEventListener('input', () => {
//       checkInputValidity(inputItem);
//       const form = inputItem.closest('.form')
//       console.log('form:', form.checkValidity())
//       const button = form.querySelector('.form__submit-button')
//       console.log('button', button)
//       checkButtonValidity(form, button)
//     });
//   });
// };

function enableValidation() {
  const inputItems = document.querySelectorAll('.form__item');
  console.log(inputItems);
  checkButtonValidity(form, button)
  inputItems.forEach(inputItem => {
    inputItem.addEventListener('input', () => {
      checkInputValidity(inputItem);
      const form = inputItem.closest('.form')
      console.log('form:', form.checkValidity())
      const button = form.querySelector('.form__submit-button')
      console.log('button', button)
      checkButtonValidity(form, button)
    });
  });
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'button_edit',
  inputErrorClass: 'form__item_error',
  errorClass: '`.error-message_type_${inputItem.name}`',
});
