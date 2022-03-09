import { Card } from "./card.js";

import {
  initialCards,
  elements,
  editButton,
  addButton,
  profilePopup,
  addCardPopup,
  viewPlacePopup,
  editFormElement,
  addFormElement,
  inputPlace,
  inputLink,
  nameInput,
  jobInput,
  nameProfile,
  jobProfile,
} from "./constants.js"

initialCards.forEach((item) => {
  appendCard(renderNewCard(item));
});


//создание новой карточки
function renderNewCard(item) {
  const card = new Card(item, '.elements__template');
  const cardElement = card.generateCard();
  return cardElement;
}

//добавление карточки места вниз списка
function appendCard(cardElement) {
  elements.append(cardElement);
}

//добавление карт мест в начало и обработчиков
function prependCard(item) {
  const card = new Card(item, '.elements__template')
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
};

//Открыть popup редактирования профиля
function openEditProfilePopup() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  //resetError(profilePopup);
  //disableSubmitButton(profilePopup);
  openPopup(profilePopup);
};

//Открыть popup добавления карточки места пользователем
function openAddCardPopup() {
  inputPlace.value = '';
  inputLink.value = '';
  //const form = addCardPopup.querySelector('.form');
  //resetError(addCardPopup);
  //disableSubmitButton(addCardPopup);
  openPopup(addCardPopup);

};

//Деактивировать submit при открытии формы
function disableSubmitButton(element) {
  const submitButton = element.querySelector('.form__submit-button');
  submitButton.setAttribute('disabled', '');
  submitButton.classList.add('form__submit-button_disabled');
}

//функция сброса ошибок при открытиии popup
function resetError(element) {
  const errorMessages = element.querySelectorAll('.form__error-message');
  errorMessages.forEach(errorMessage => {
    errorMessage.textContent = '';
    errorMessage.classList.remove('form__error-message_visible');
  })
  const inputItems = element.querySelectorAll('.form__item');
  inputItems.forEach(inputItem => {
    inputItem.classList.remove('form__item_error')
  })
}

//функция открыть popup
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handlerEscButton);
};

//Закрыть popup
function closePopup() {
  document.querySelector('.popup_opened').classList.remove('popup_opened');
  document.removeEventListener('keydown', handlerEscButton);
};

//закрытие popup по клику overlay
const handlerOverlayClick = (event) => {
  if (event.target === event.currentTarget || event.target.classList.contains('popup__close')) {
    closePopup();
  };
};


//закрытие popup по нажатию esc
const handlerEscButton = (event) => {
  if (event.keyCode === 27) {
    closePopup();
  };
};

//submit добавить место
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const userPlace = {
    name: inputPlace.value,
    link: inputLink.value,
  };
  closePopup(addCardPopup);
  prependCard(renderNewCard(userPlace));
};

//submit редактирования данных
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
};

//кнопки открытия popup
editButton.addEventListener('click', openEditProfilePopup);
addButton.addEventListener('click', openAddCardPopup);

//popup
profilePopup.addEventListener('click', handlerOverlayClick);
addCardPopup.addEventListener('click', handlerOverlayClick);
viewPlacePopup.addEventListener('click', handlerOverlayClick);

//submit
editFormElement.addEventListener('submit', handleProfileFormSubmit);
addFormElement.addEventListener('submit', handleAddFormSubmit);


//
//просмотр фото
//const viewPlaceName = document.querySelector('.element-view__place');
//const viewImage = document.querySelector('.element-view__image');
//functions
//добавление мест из архива
// function renderCards() {
//   initialCards.forEach(appendCard);
// };

// renderCards()

//создание карточки места и обработчиков событий
// function creatCard(item) {
//   const newElement = elementsTemplate.cloneNode(true);
//   newElement.querySelector('.element__place').textContent = item.name;
//   const placeImage = newElement.querySelector('.element__image');
//   placeImage.alt = item.name;
//   placeImage.src = item.link;
//   newElement.querySelector('.element__image').src = item.link;
//   addListeners(newElement);
//   return newElement;
// };
//const closeButtons = document.querySelectorAll('.popup__close');
//const elementsTemplate = document.querySelector('.elements__template').content;
