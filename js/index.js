import { Card } from "../components/Сard.js";
import Section from "../components/section.js";
import UserInfo from "../components/UserInfo.js";
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
  elements,
  //viewPlaceName,
  //viewImage
} from "../utils/constants.js"

import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

const viewPlacePopup = new PopupWithImage('.popup_type_view-image')

const editFormElementValidator = new FormValidator(validationConfig, editFormElement);
const addFormElementValidator = new FormValidator(validationConfig, addFormElement);

const section = new Section({ initialCards, renderer }, '.elements')

editFormElementValidator.enableValidation()
addFormElementValidator.enableValidation()

//карточки по умолчанию
// const
//   data: initialCards,
//   renderer: (item) => {
//     const cardElement = renderNewCard(item)
//     defaultCardList.prependCard(cardElement);
//   }
// }, '.elements');
initialCards.forEach(inicialCardsItem => {
  renderer(inicialCardsItem)
    // console.log(inicialCardsItem)
    // debugger
})

//инициирует создание
function renderer(data) {
  const cardElement = renderNewCard(data) //создает возвращает
  section.addItem(cardElement); //отрисовывает
}

//создание новой карточки
function renderNewCard(data) {
  const card = new Card(data, '.elements__template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

//submit добавить место
function handleAddFormSubmit(inputsData) {
  console.log(inputsData)
    //debugger
  const card = renderer(inputsData)
  section.addItem()
};

//Открыть popup просмотра фото в классе Card
function handleCardClick(name, link) {

  viewPlacePopup.open(name, link);
}

const addPlacePopup = new PopupWithForm('.popup_type_add-card', handleAddFormSubmit)

// function renderer(cardElement) {
//   const cardElement = renderNewCard(item)
//   section.addItem(cardElement);
// }

//Открыть popup добавления карточки места пользователем
function openAddCardPopup() {
  addPlacePopup.open();
};

//Открыть popup редактирования профиля
function openEditProfilePopup() {
  // nameInput.value = nameProfile.textContent;
  // jobInput.value = jobProfile.textContent;
  nameInput.value = '';
  jobInput.value = '';
  //editFormElementValidator.validationOpenPopup()
  const newPopup = new PopupWithForm('.popup_type_edit-profile', handleProfileFormSubmit)
  newPopup.open();
};

//callback редактирования данных
function handleProfileFormSubmit(inputsData) {
  nameProfile.textContent = inputsData[0];
  jobProfile.textContent = inputsData[1];
};

//profilePopup.addEventListener('click', handlerOverlayClick);
//addFormElement.addEventListener('submit', (e) => console.log(w))
viewPlacePopup.setEventListeners()


editButton.addEventListener('click', openEditProfilePopup);
addButton.addEventListener('click', openAddCardPopup);



//слушатели событий
//кнопки открытия popup


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
