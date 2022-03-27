import { Card } from "../components/Сard.js";
import Section from "../components/section.js";
import UserInfo from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js"
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

import {
  initialCards,
  editButton,
  addButton,
  nameInput,
  jobInput,
  validationConfig,
} from "../utils/constants.js"

const userInfo = new UserInfo({
  name: '.profile__name',
  character: '.profile__about-self'
})
const editFormElementValidator = new FormValidator(validationConfig, '.form_type_edit-profile');
const addFormElementValidator = new FormValidator(validationConfig, '.form_type_edit-place');
const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', userInfo.setUserInfo)
const addPlacePopup = new PopupWithForm('.popup_type_add-card', renderer)
const viewPlacePopup = new PopupWithImage('.popup_type_view-image')
const section = new Section({ initialCards, renderer }, '.elements')

editFormElementValidator.enableValidation()
addFormElementValidator.enableValidation()

initialCards.forEach(inicialCardsItem => {
  renderer(inicialCardsItem)
})

//инициирует создание
function renderer(data) {
  const cardElement = renderNewCard(data) //создает возвращает
  section.addItem(cardElement); //отрисовывает
}

//создание новой карточки
function renderNewCard(data) {
  const card = new Card(data, '.elements__template', viewPlacePopup.open);
  const cardElement = card.generateCard();
  return cardElement;
}

//Открыть popup добавления карточки места пользователем
function openAddCardPopup() {
  addFormElementValidator.validationOpenPopup()
  addPlacePopup.open();
};

//Открыть popup редактирования профиля
function openEditProfilePopup() {
  const userData = userInfo.getUserInfo()
  nameInput.value = userData.name;
  jobInput.value = userData.character;
  editFormElementValidator.validationOpenPopup()
  editProfilePopup.open();
};

editButton.addEventListener('click', openEditProfilePopup);
addButton.addEventListener('click', openAddCardPopup);
