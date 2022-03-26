import { Card } from "../components/Сard.js";
import Section from "../components/section.js";
//import Popup from "../components/Popup.js";

import { FormValidator } from "../components/FormValidator.js"

import {
  initialCards,
  //elements,
  editButton,
  addButton,
  //profilePopup,
  //addCardPopup,
  //viewPlacePopup,
  editFormElement,
  addFormElement,
  //inputPlace,
  //inputLink,
  nameInput,
  jobInput,
  nameProfile,
  jobProfile,
  validationConfig,
  //viewPlaceName,
  //viewImage
} from "../utils/constants.js"

import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

const editFormElementValidator = new FormValidator(validationConfig, editFormElement);
const addFormElementValidator = new FormValidator(validationConfig, addFormElement);

editFormElementValidator.enableValidation()
addFormElementValidator.enableValidation()

//карточки по умолчанию
const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const cardElement = renderNewCard(item)
    defaultCardList.appendCard(cardElement);
  }
}, '.elements');

//отрисовка карточек по умолчанию
defaultCardList.renderItems();

//создание новой карточки
function renderNewCard(item) {
  const card = new Card(item, '.elements__template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

//Открыть popup редактирования профиля
function openEditProfilePopup() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  editFormElementValidator.validationOpenPopup()
  const newPopup = new PopupWithForm('.popup_type_edit-profile', handleProfileFormSubmit)
  newPopup.open();
};

//callback редактирования данных
function handleProfileFormSubmit(inputsData) {
  nameProfile.textContent = inputsData[0];
  jobProfile.textContent = inputsData[1];
};


//Открыть popup просмотра фото в классе Card
function handleCardClick(name, link) {
  const newPopup = new PopupWithImage('.popup_type_view-image', name, link)
  newPopup.open();
}

//Открыть popup добавления карточки места пользователем
function openAddCardPopup() {
  addFormElementValidator.validationOpenPopup()
  const newPopup = new PopupWithForm('.popup_type_add-card', handleAddFormSubmit)
  newPopup.open();
  //newPopup.open(addCardPopup);
};

//submit добавить место
function handleAddFormSubmit(inputsData) {
  console.log(inputsData)
  const userCardList = new Section({
    data: [{
      name: inputsData[0],
      link: inputsData[1],
    }],
    renderer: (item) => {
      const cardElement = renderNewCard(item)
      userCardList.prependCard(cardElement);
    }
  }, '.elements');
  userCardList.renderItems()
};

//слушатели событий
//кнопки открытия popup
editButton.addEventListener('click', openEditProfilePopup);
addButton.addEventListener('click', openAddCardPopup);

//submit
//addFormElement.addEventListener('submit', handleAddFormSubmit);
// //popup
// profilePopup.addEventListener('click', handlerOverlayClick);
// addCardPopup.addEventListener('click', handlerOverlayClick);
// viewPlacePopup.addEventListener('click', handlerOverlayClick);


// //добавление карточки места вниз списка
// function appendCard(cardElement) {
//   elements.append(cardElement);
// }

// //добавление карт мест в начало и обработчиков
// function prependCard(cardElement) {
//   elements.prepend(cardElement);
// };
// //функция открыть popup
// export function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', handlerEscButton);
// };

//Закрыть popup
// function closePopup() {
//   document.querySelector('.popup_opened').classList.remove('popup_opened');
//   document.removeEventListener('keydown', handlerEscButton);
// };

//закрытие popup по клику overlay
// const handlerOverlayClick = (event) => {
//   if (event.target === event.currentTarget || event.target.classList.contains('popup__close')) {
//     closePopup();
//   };
// };

//закрытие popup по нажатию esc
// const handlerEscButton = (event) => {
//   if (event.key === 'Escape') {
//     closePopup();
//   };
// };
//editFormElement.addEventListener('submit', handleProfileFormSubmit);
