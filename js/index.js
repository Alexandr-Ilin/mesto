import { Card } from "../components/Сard.js";
import Section from "../components/section.js";
import Popup from "../components/Popup.js";

import { FormValidator } from "../components/FormValidator.js"

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
} from "../utils/constants.js"

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
}, elements);

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
  const newPopup = new Popup(profilePopup)
  newPopup.open();
};

//Открыть popup добавления карточки места пользователем
function openAddCardPopup() {
  inputPlace.value = '';
  inputLink.value = '';
  addFormElementValidator.validationOpenPopup()
  const newPopup = new Popup(addCardPopup)
  newPopup.open();
  //newPopup.open(addCardPopup);
};

//Открыть popup просмотра фото в классе Card
function handleCardClick(name, link) {
  viewPlaceName.textContent = name;
  viewImage.alt = name;
  viewImage.src = link;
  const newPopup = new Popup(viewPlacePopup)
  newPopup.open();
  //openPopup(viewPlacePopup);
}

//submit добавить место
function handleAddFormSubmit(evt) {
  evt.preventDefault();
  newPopup.close();
  const userCardList = new Section({
    data: [{
      name: inputPlace.value,
      link: inputLink.value,
    }],
    renderer: (item) => {
      const cardElement = renderNewCard(item)
      userCardList.prependCard(cardElement);
    }
  }, elements);
  userCardList.renderItems()
};

//submit редактирования данных
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  newPopup.close();
};

//слушатели событий
//кнопки открытия popup
editButton.addEventListener('click', openEditProfilePopup);
addButton.addEventListener('click', openAddCardPopup);

//submit
editFormElement.addEventListener('submit', handleProfileFormSubmit);
addFormElement.addEventListener('submit', handleAddFormSubmit);



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
