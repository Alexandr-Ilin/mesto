//кнопки
export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const buttonAvatar = document.querySelector('.profile__avatar-button');

//для редактирования профиля
export const nameInput = document.querySelector('.form__item_type_name');
export const jobInput = document.querySelector('.form__item_type_about');

//настройка валидации
export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__item_error',
  errorClass: 'form__error-message_visible',
};