import { Card } from "../components/Сard.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js"
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Api from "../components/Api.js"
import PopupDeletePlace from "../components/PopupDeletePlace.js";

import {
  buttonAvatar,
  buttonEdit,
  buttonAdd,
  nameInput,
  jobInput,
  validationConfig,
} from "../utils/constants.js"

const userInfo = new UserInfo({
  name: '.profile__name',
  character: '.profile__about-self',
  avatar: '.profile__avatar'
})
const validatorEditProfileForm = new FormValidator(validationConfig, '.form_type_edit-profile');
const validatorAddPlaceForm = new FormValidator(validationConfig, '.form_type_edit-place');
const validatorChengeAvatarForm = new FormValidator(validationConfig, '.form_type_chenge-avatar');
const popupEditProfile = new PopupWithForm('.popup_type_edit-profile', handleProfileFormSubmit)
const popupAddPlace = new PopupWithForm('.popup_type_add-card', handleAddCardFormSubmit)
const popupChengeAvatar = new PopupWithForm('.popup_type_chenge-avatar', handleChengeAvatarFormSubmit)
const popupViewPlace = new PopupWithImage('.popup_type_view-image')
const popupDeletePlace = new PopupDeletePlace('.popup_type_delete-card', deletePlace)
const section = new Section(renderNewCard, '.elements')
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: 'a251447a-ca8d-48d6-88cb-4cedc8f5baae',
    'Content-Type': 'application/json'
  }
});

import './index.css'

validatorEditProfileForm.enableValidation()
validatorAddPlaceForm.enableValidation()
validatorChengeAvatarForm.enableValidation()

//Новая карточка
function renderNewCard(data, userId) {
  const card = new Card(
    data, {
      openViewPlacePopup: function(name, link) {
        popupViewPlace.open(name, link)
      },
      openDeleteCardPopup: deletePlace,
      hanldeLikeButton: () => hanldeLikeButton(card, data)
    },
    '.elements__template',
    userId);
  const cardElement = card.generateCard();
  return cardElement;
}

//Открыть popup добавления карточки места пользователем
function openAddCardPopup() {
  validatorAddPlaceForm.validateOpenPopup()
  popupAddPlace.open();
};

//Открыть popup редактирования профиля
function openpopupEditProfile() {
  const userData = userInfo.getUserInfo()
  nameInput.value = userData.name;
  jobInput.value = userData.character;
  validatorEditProfileForm.validateOpenPopup()
  popupEditProfile.open();
};

//Открыть popup смены аватара
function openChengeAvatarPopup() {
  validatorChengeAvatarForm.validateOpenPopup()
  popupChengeAvatar.open()
}

//Замена аватара
function handleChengeAvatarFormSubmit(avatar) {
  popupChengeAvatar.renderLoading(true)
  api.chengeAvatar(avatar)
    .then((res) => {
      userInfo.setUserInfo(res)
      popupChengeAvatar.close()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupChengeAvatar.renderLoading(false);
    })
}

//Функция удаления карточки
function deletePlace(evt, card) {
  if (evt.type === 'submit') {
    evt.preventDefault()
    api.deleteCard(card._cardId)
      .then(() => {
        card.deletePlace()
        popupDeletePlace.close()
      })
      .catch((err) => {
        console.log(err);
      });
  }
  popupDeletePlace.open(card)
}

//Обработка лайков
function hanldeLikeButton(card) {
  if (!card.pointLike()) {
    api.likedCard(card._cardId)
      .then((res) => {
        card.changeLike(res)
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api.deleteLike(card._cardId)
      .then((res) => {
        card.changeLike(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

//Редактирование профиля
function handleProfileFormSubmit(data) {
  popupEditProfile.renderLoading(true)
  api.changeUserData(data)
    .then((data) => {
      userInfo.setUserInfo(data)
      popupEditProfile.close()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfile.renderLoading(false);
    })
}

//Добавление карточки
function handleAddCardFormSubmit(data) {
  popupAddPlace.renderLoading(true)
  api.addNewCard(data)
    .then((res) => {
      section.addItemPrepend(res, res.owner._id)
      popupAddPlace.close()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddPlace.renderLoading(false);
    })
}


//Слушатели
buttonEdit.addEventListener('click', openpopupEditProfile);
buttonAdd.addEventListener('click', openAddCardPopup);
buttonAvatar.addEventListener('click', openChengeAvatarPopup);

popupDeletePlace.setEventListeners()
popupChengeAvatar.setEventListeners()
popupEditProfile.setEventListeners()
popupAddPlace.setEventListeners()
popupViewPlace.setEventListeners()

//Начальные карточки
Promise.all([
    api.getUserData(),
    api.getInitialCards()
  ])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData)
    section.renderItems(cards, userData._id);
  })
  .catch((err) => {
    console.log(err);
  });
