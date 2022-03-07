import { Card } from "./card.js";

const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];

//кнопки
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button')
const closeButtons = document.querySelectorAll('.popup__close');

//для редактирования профиля
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__about-self');
const editFormElement = document.querySelector('.form_type_edit-profile');
const nameInput = editFormElement.querySelector('.form__item_type_name');
const jobInput = editFormElement.querySelector('.form__item_type_about');

//для добавления места
const addFormElement = document.querySelector('.form_edit_place')
const inputPlace = document.querySelector('.form__item_type_place');
const inputLink = document.querySelector('.form__item_type_link');

//template
const elementsTemplate = document.querySelector('.elements__template').content;
const elements = document.querySelector('.elements');

//определения popup
const profilePopup = document.querySelector('.popup_type_edit-profile');
const addCardPopup = document.querySelector('.popup_type_add-card');
export const viewCardPopup = document.querySelector('.popup_type_view-image');

//просмотр фото
const viewPlaceName = document.querySelector('.element-view__place');
const viewImage = document.querySelector('.element-view__image');

initialCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(item.name, item.link);
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  // Добавляем в DOM
  document.querySelector('.elements').append(cardElement);
});

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

//добавление карточки места вниз списка
function appendCard(item) {
  elements.append(creatCard(item));
}

//добавление карт мест в начало и обработчиков
function prependCard(userPlace) {
  elements.prepend(creatCard(userPlace));
};

//Открыть popup редактирования профиля
function openEditProfilePopup() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  resetError(profilePopup);
  disableSubmitButton(profilePopup);
  openPopup(profilePopup);
};

//Открыть popup добавления карточки места пользователем
function openAddCardPopup() {
  inputPlace.value = '';
  inputLink.value = '';
  const form = addCardPopup.querySelector('.form');
  resetError(addCardPopup);
  disableSubmitButton(addCardPopup);
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
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const userPlace = {
    name: inputPlace.value,
    link: inputLink.value,
  };
  closePopup(addCardPopup);
  prependCard(userPlace);
};

//submit редактирования данных
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
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
viewCardPopup.addEventListener('click', handlerOverlayClick);
//submit
editFormElement.addEventListener('submit', handleProfileFormSubmit);
addFormElement.addEventListener('submit', handleAddFormSubmit);
