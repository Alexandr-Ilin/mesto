// //валидация полей input
// const checkInputValidity = ({ inputErrorClass }, inputItem) => {
//   const errorMassage = inputItem.nextElementSibling;
//   if (inputItem.validity.valid) {
//     errorMassage.textContent = '';
//     inputItem.classList.remove(inputErrorClass);
//   } else {
//     errorMassage.textContent = inputItem.validationMessage;
//     inputItem.classList.add(inputErrorClass);
//   }
// }

// //активация/деактивация кнопки submit в зависимости от валидации формы
// const checkButtonValidity = ({ inactiveButtonClass }, form, button) => {
//   if (form.checkValidity()) {
//     button.removeAttribute('disabled');
//     button.classList.remove(inactiveButtonClass);
//   } else {
//     button.setAttribute('disabled', '');
//     button.classList.add(inactiveButtonClass);
//   }
// }

// //определение элементов валидации
// function enableValidation({ inputSelector, formSelector, submitButtonSelector, ...rest }) {
//   const inputItems = document.querySelectorAll(inputSelector);
//   inputItems.forEach(inputItem => {
//     inputItem.addEventListener('input', () => {
//       const form = inputItem.closest(formSelector);
//       const button = form.querySelector(submitButtonSelector);
//       checkInputValidity(rest, inputItem);
//       checkButtonValidity(rest, form, button);
//     });
//   });
// };


//показать ошибку
const showError = (config, form, inputItem, errorMessage) => {
  inputItem.classList.add(config.inputErrorClass);
  const message = form.querySelector(`.form__error-message_type_${inputItem.name}`);
  message.textContent = errorMessage;
  message.classList.add(config.errorClass)

}

//убрать ошибку
const hideError = (config, form, inputItem) => {
  inputItem.classList.remove(config.inputErrorClass)
  const message = form.querySelector(`.form__error-message_type_${inputItem.name}`);
  //message.textContent = '';
  message.classList.remove(config.errorClass)
  message.textContent = '';
}

//валидация инпутов
function checkInputValidity(config, form, inputItem) {

  if (inputItem.validity.valid) {

    hideError(config, form, inputItem);
  } else {
    showError(config, form, inputItem, inputItem.validationMessage);
  };
}

//
const hasInvalidInput = (inputItems) => {

  return inputItems.some(inputItem => {

    return !inputItem.validity.valid;
  });
};

//
const toogleButtonState = (config, inputItems, button) => {
  if (hasInvalidInput(inputItems)) {
    button.classList.add(config.inactiveButtonClass)
  } else {
    button.removeAttribute('disabled')
    button.classList.remove(config.inactiveButtonClass)
  }
}

//слушатели на инпуты
function addInputListener(config, form) {
  const inputItems = Array.from(form.querySelectorAll(config.inputSelector));
  const button = form.querySelector(config.submitButtonSelector);

  //toogleButtonState(config, inputItems, button);
  inputItems.forEach(inputItem => {
    //const message = form.querySelector(`.form__error-message_type_${inputItem.name}`);
    inputItem.addEventListener('input', function() {
      checkInputValidity(config, form, inputItem);
      toogleButtonState(config, inputItems, button);
    })
  })
}

//слушатели на формы
function addFormListener(config) {
  const forms = Array.from(document.querySelectorAll(config.formSelector))
  forms.forEach(form => {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
    });
    addInputListener(config, form)
  });
}

function enableValidation(config) {
  addFormListener(config)
}

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__item_error',
  errorClass: 'form__error-message_visible',
});
