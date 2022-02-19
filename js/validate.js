//валидация полей input
const checkInputValidity = ({ inputErrorClass }, inputItem) => {
  const errorMassage = inputItem.nextElementSibling;
  if (inputItem.validity.valid) {
    errorMassage.textContent = '';
    inputItem.classList.remove(inputErrorClass);
  } else {
    errorMassage.textContent = inputItem.validationMessage;
    inputItem.classList.add(inputErrorClass);
  }
}

//активация/деактивация кнопки submit в зависимости от валидации формы
const checkButtonValidity = ({ inactiveButtonClass }, form, button) => {
  if (form.checkValidity()) {
    button.removeAttribute('disabled');
    button.classList.remove(inactiveButtonClass);
  } else {
    button.setAttribute('disabled', '');
    button.classList.add(inactiveButtonClass);
  }
}

//определение элементов валидации
function enableValidation({ inputSelector, formSelector, submitButtonSelector, ...rest }) {
  const inputItems = document.querySelectorAll(inputSelector);
  inputItems.forEach(inputItem => {
    inputItem.addEventListener('input', () => {
      const form = inputItem.closest(formSelector);
      const button = form.querySelector(submitButtonSelector);
      checkInputValidity(rest, inputItem);
      checkButtonValidity(rest, form, button);
    });
  });
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__item_error',
});
