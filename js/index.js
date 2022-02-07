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

//добавление мест из архива
function renderCards() {
  initialCards.forEach(appendAddCard);
};

renderCards()

//создание карточки места и обработчиков событий
function creatCard(item) {
  const newElement = elementsTemplate.cloneNode(true);
  newElement.querySelector('.element__place').textContent = item.name;
  newElement.querySelector('.element__image').src = item.link;
  newElement.querySelector('.element__image').alt = item.name;
  addListeners(newElement);
  return newElement;
};

//добавление карточки места вниз списка
function appendAddCard(item) {
  elements.append(creatCard(item));
}

//добавление карт мест в начало и обработчиков
function prependAddCard(userPlace) {
  elements.prepend(creatCard(userPlace));
};

//Открыть popup редактирования профиля
function openEditProfilePopup() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
};

//Открыть popup добавления карточки места пользователем
function openAddCardPopup() {
  document.querySelector('.form__item_type_place').value = '';
  document.querySelector('.form__item_type_link').value = '';
  document.querySelector('.popup_type_add-card').classList.add('popup_opened');
};

//Открыть popup просмотра фото места
function openViewPlacePopup(event) {
  console.log(event.target);
  document.querySelector('.element-view__image').src = event.target.src;
  document.querySelector('.element-view__place').textContent = event.target.alt;
  document.querySelector('.popup_type_view-image').classList.add('popup_opened');
}

//Закрыть popup
function closePopup() {
  document.querySelector('.popup_opened').classList.remove('popup_opened');
};

//submit добавить место
function addFormSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const userPlace = {
    name: inputPlace.value,
    link: inputLink.value
  };
  closePopup();
  prependAddCard(userPlace);
};

//submit редактирования данных
function editFormSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
}

//Функция like
function heartActive(event) {
  event.target.classList.toggle('element__heart_active');
};

//Функция удаление места
function deletePlace(event) {
  event.target.closest('.elements__item').remove();
}

// Слушатели событий
//Функция. добавляющая обработчики в создаваемые карточки мест
function addListeners(el) {
  el.querySelector('.element__heart').addEventListener('click', heartActive);
  el.querySelector('.elements__item-delete').addEventListener('click', deletePlace);
  el.querySelector('.element__image').addEventListener('click', openViewPlacePopup);
}
editButton.addEventListener('click', openEditProfilePopup);
addButton.addEventListener('click', openAddCardPopup);

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', closePopup);
});

editFormElement.addEventListener('submit', editFormSubmitHandler);
addFormElement.addEventListener('submit', addFormSubmitHandler);
