//показать ошибку
const showError = ({ errorClass, inputErrorClass }, form, inputItem, errorMessage) => {
  inputItem.classList.add(inputErrorClass);
  const message = form.querySelector(`.form__error-message_type_${inputItem.name}`);
  message.textContent = errorMessage;
  message.classList.add(errorClass);
}

//убрать ошибку
const hideError = ({ errorClass, inputErrorClass }, form, inputItem) => {
  inputItem.classList.remove(inputErrorClass)
  const message = form.querySelector(`.form__error-message_type_${inputItem.name}`);
  message.classList.remove(errorClass)
  message.textContent = '';
}

//валидация инпутов
function checkInputValidity(rest, form, inputItem) {
  if (inputItem.validity.valid) {
    hideError(rest, form, inputItem);
  } else {
    showError(rest, form, inputItem, inputItem.validationMessage);
  };
}

//проверка инпутов формы на невалидность
const hasInvalidInput = (inputItems) => {
  return inputItems.some(inputItem => {
    return !inputItem.validity.valid;
  });
};

//активация/деактивация submit, в зависимости от результата проверки инпутов
const toogleButtonState = ({ inactiveButtonClass }, inputItems, button) => {
  if (hasInvalidInput(inputItems)) {
    button.setAttribute('disabled', '');
    button.classList.add(inactiveButtonClass);
  } else {
    button.removeAttribute('disabled')
    button.classList.remove(inactiveButtonClass)
  }
}

//слушатели на инпуты
function addInputListener({ inputSelector, submitButtonSelector, ...rest }, form) {
  const inputItems = Array.from(form.querySelectorAll(inputSelector));
  const button = form.querySelector(submitButtonSelector);
  inputItems.forEach(inputItem => {
    inputItem.addEventListener('input', function() {
      checkInputValidity(rest, form, inputItem);
      toogleButtonState(rest, inputItems, button);
    })
  })
}

//слушатели на формы
function addFormListener(formSelector, rest) {
  const forms = Array.from(document.querySelectorAll(formSelector))
  forms.forEach(form => {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
    });
    addInputListener(rest, form)
  });
}

function enableValidation({ formSelector, ...rest }) {
  addFormListener(formSelector, rest)
}

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__item_error',
  errorClass: 'form__error-message_visible',
});
