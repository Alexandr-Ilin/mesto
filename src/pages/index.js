import { Card } from "../components/Сard.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js"
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

import {
  initialCards,
  buttonEdit,
  buttonAdd,
  nameInput,
  jobInput,
  validationConfig,
} from "../utils/constants.js"

const userInfo = new UserInfo({
  user: '.profile__name',
  character: '.profile__about-self'
})
const validatorEditProfileForm = new FormValidator(validationConfig, '.form_type_edit-profile');
const validatorAddPlaceForm = new FormValidator(validationConfig, '.form_type_edit-place');
const popupEditProfile = new PopupWithForm('.popup_type_edit-profile', userInfo.setUserInfo)
const popupAddPlace = new PopupWithForm('.popup_type_add-card', renderer)
const popupViewPlace = new PopupWithImage('.popup_type_view-image')
const section = new Section({ initialCards, renderer }, '.elements')

import './index.css'

validatorEditProfileForm.enableValidation()
validatorAddPlaceForm.enableValidation()

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
  const card = new Card(data, '.elements__template', popupViewPlace.open);
  const cardElement = card.generateCard();
  return cardElement;
}

//Открыть popup добавления карточки места пользователем
function openAddCardPopup() {
  validatorAddPlaceForm.validationOpenPopup()
  popupAddPlace.open();

};

//Открыть popup редактирования профиля
function openpopupEditProfile() {
  const userData = userInfo.getUserInfo()
  nameInput.value = userData.user;
  jobInput.value = userData.character;
  validatorEditProfileForm.validationOpenPopup()
  popupEditProfile.open();
};

buttonEdit.addEventListener('click', openpopupEditProfile);
buttonAdd.addEventListener('click', openAddCardPopup);

popupEditProfile.setEventListeners()
popupAddPlace.setEventListeners()
popupViewPlace.setEventListeners()
