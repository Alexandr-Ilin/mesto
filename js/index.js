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
  }
];
// //формы
// const forms = document.querySelectorAll('.form')
// console.log(forms);
// forms.forEach(form) => {
//   form.addEventListener
// }
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
const viewCardPopup = document.querySelector('.popup_type_view-image');

//просмотр фото
const viewPlaceName = document.querySelector('.element-view__place');
const viewImage = document.querySelector('.element-view__image');

//functions
//добавление мест из архива
function renderCards() {
  initialCards.forEach(appendCard);
};

renderCards()

//создание карточки места и обработчиков событий
function creatCard(item) {
  const newElement = elementsTemplate.cloneNode(true);
  newElement.querySelector('.element__place').textContent = item.name;
  const placeImage = newElement.querySelector('.element__image');
  placeImage.alt = item.name;
  placeImage.src = item.link;
  newElement.querySelector('.element__image').src = item.link;
  addListeners(newElement);
  return newElement;
};

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
  openPopup(profilePopup);
};

//Открыть popup добавления карточки места пользователем
function openAddCardPopup() {
  inputPlace.value = '';
  inputLink.value = '';
  openPopup(addCardPopup);
  disableSubmitButton(addCardPopup);
};

//Деактивировать субмит при открытии формы

function disableSubmitButton(element) {
  console.log(element)
  const submitButton = element.querySelector('.form__submit-button');
  console.log(submitButton);
  submitButton.setAttribute('disabled', '');
  submitButton.classList.add('form__submit-button_disabled');
}

//Открыть popup просмотра фото места
function openViewPlacePopup(event) {
  viewImage.src = event.target.src;
  viewImage.alt = event.target.alt;
  viewPlaceName.textContent = event.target.alt;
  openPopup(viewCardPopup);

};


//функция открыть popup
function openPopup(popup) {
  //console.log(popup)
  popup.classList.add('popup_opened');
  handlerOverlayClick(popup)
  document.addEventListener('keydown', handlerEscButton);
};

//Закрыть popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handlerEscButton)

};

//submit добавить место
function handleAddFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const userPlace = {
    name: inputPlace.value,
    link: inputLink.value
  };
  closePopup(addCardPopup);
  prependCard(userPlace);


};

//submit редактирования данных
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(profilePopup);
};

//Функция like
function toggleHeart(event) {
  event.target.classList.toggle('element__heart_active');
};

//Функция удаление места
function deletePlace(event) {
  event.target.closest('.elements__item').remove();
};

// Слушатели событий
//Функция. добавляющая обработчики в создаваемые карточки мест
function addListeners(el) {
  el.querySelector('.element__heart').addEventListener('click', toggleHeart);
  el.querySelector('.elements__item-delete').addEventListener('click', deletePlace);
  el.querySelector('.element__image').addEventListener('click', openViewPlacePopup);
};

editButton.addEventListener('click', openEditProfilePopup);
addButton.addEventListener('click', openAddCardPopup);

closeButtons.forEach((closeButton) => {
  const popup = closeButton.closest('.popup')
  closeButton.addEventListener('click', () => {
    closePopup(popup)
  });
});

editFormElement.addEventListener('submit', handleProfileFormSubmit);
addFormElement.addEventListener('submit', handleAddFormSubmit);

//
