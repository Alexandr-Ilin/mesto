import { Card } from "./Сard.js";

import { FormValidator } from "./FormValidator.js"

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
  validationConfig,
  viewPlaceName,
  viewImage
} from "./constants.js"

const editFormElementValidator = new FormValidator(validationConfig, editFormElement);
const addFormElementValidator = new FormValidator(validationConfig, addFormElement);

editFormElementValidator.enableValidation()
addFormElementValidator.enableValidation()

initialCards.forEach((item) => {
  appendCard(renderNewCard(item));
});

//создание новой карточки
function renderNewCard(item) {
  const card = new Card(item, '.elements__template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

//добавление карточки места вниз списка
function appendCard(cardElement) {
  elements.append(cardElement);
}

//добавление карт мест в начало и обработчиков
function prependCard(cardElement) {
  elements.prepend(cardElement);
};

//Открыть popup редактирования профиля
function openEditProfilePopup() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  editFormElementValidator.validationOpenPopup()
  openPopup(profilePopup);
};

//Открыть popup добавления карточки места пользователем
function openAddCardPopup() {
  inputPlace.value = '';
  inputLink.value = '';
  addFormElementValidator.validationOpenPopup()
  openPopup(addCardPopup);
};

//Открыть popup просмотра фото в классе Card
function handleCardClick(name, link) {
  viewPlaceName.textContent = name;
  viewImage.alt = name;
  viewImage.src = link;
  openPopup(viewPlacePopup);
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
  if (event.key === 'Escape') {
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

//слушатели событий
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
