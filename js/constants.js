export const initialCards = [{
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
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button')

//для редактирования профиля
export const nameProfile = document.querySelector('.profile__name');
export const jobProfile = document.querySelector('.profile__about-self');
export const editFormElement = document.querySelector('.form_type_edit-profile');
export const nameInput = editFormElement.querySelector('.form__item_type_name');
export const jobInput = editFormElement.querySelector('.form__item_type_about');

//для добавления места
export const addFormElement = document.querySelector('.form_edit_place')
export const inputPlace = document.querySelector('.form__item_type_place');
export const inputLink = document.querySelector('.form__item_type_link');

//просмотр места
export const viewPlaceName = document.querySelector('.element-view__place');
export const viewImage = document.querySelector('.element-view__image');

//template
export const elements = document.querySelector('.elements');

//определения popup
export const profilePopup = document.querySelector('.popup_type_edit-profile');
export const addCardPopup = document.querySelector('.popup_type_add-card');
export const viewPlacePopup = document.querySelector('.popup_type_view-image');