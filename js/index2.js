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
    button.classList.remove('form__submit-button_disabled')
  } else {
    console.log('button-noCheck', button)
    button.setAttribute('disabled', '')
    button.classList.add('form__submit-button_disabled')
      //button.classList.add('gfdh')
    console.log('invalid', form.checkValidity())
  }
}

function enableValidation() {
  console.log(document.forms)
  const inputItems = document.querySelectorAll('.form__item');
  console.log(inputItems);
  //проверка форм на валидность
  const forms = document.querySelectorAll('.form')
  forms.forEach(formaa => {
      console.log('formaa', formaa.checkValidity())
    })
    //checkButtonValidity(form, button)
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
enableValidation();
