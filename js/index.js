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

//initialCards.forEach

// function renderElements() {
//   for (i = 0; i < initialCards.length; i++) {
//     const newElement = elementsTemplate.cloneNode(true);
//     newElement.querySelector('.element__place').textContent = initialCards[i].name;
//     newElement.querySelector('.element__image').setAttribute('src', initialCards[i].link);
//     elements.append(newElement);
//   };
// };

// renderElements()


//конец template

//const popup = document.querySelectorAll('.popup');

const popupEditProfile = document.querySelector('.popup_edit_profile')
const popupAddCard = document.querySelector('.popup_add_card')

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button')

const closeButtons = document.querySelectorAll('.popup__close');
//для редактирования профиля
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__about-self');

const editFormElement = document.querySelector('.form_edit_profile');
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
  initialCards.forEach(creatCard);
};

//добавление мест в низ
function creatCard(item) {
  const newElement = elementsTemplate.cloneNode(true);
  newElement.querySelector('.element__place').textContent = item.name;
  newElement.querySelector('.element__image').src = item.link;
  newElement.querySelector('.element__image').alt = item.name;
  addListeners(newElement);
  //newElement.querySelector('.element__heart').addEventListener('click', heartActive)
  elements.append(newElement);
};
renderCards()

//добавление мест в начало
function creatUserCard(item) {
  const newElement = elementsTemplate.cloneNode(true);
  newElement.querySelector('.element__place').textContent = item.name;
  newElement.querySelector('.element__image').src = item.link;
  newElement.querySelector('.element__image').alt = item.name;
  addListeners(newElement);
  elements.prepend(newElement);
};

//Открыть popup
function openPopup(el) {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  //console.log(el)
  el.classList.add('popup_opened');
};

//Закрыть popup
function closePopup() {
  //event.target.closest('.popup_opened').remove();
  document.querySelector('.popup_opened').classList.remove('popup_opened');
};

//submit добавить место
function addFormSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const userPlace = {
    name: inputPlace.value,
    link: inputLink.value
  };
  console.log(userPlace);
  closePopup();
  creatUserCard(userPlace);
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
  //debugger;
  event.target.classList.toggle('element__heart_active');
};

//Функция удаление места
function deletePlace(event) {
  debugger;
  event.target.closest('.elements__item').remove();
}

//Функция. добавляющая обработчик
function addListeners(el) {
  el.querySelector('.element__heart').addEventListener('click', heartActive);
  el.querySelector('.elements__item-delete').addEventListener('click', deletePlace);
  el.querySelector('.element__image').addEventListener('click', imageView);
}

function imageView() {
  document.querySelector('.popup_view_image').classList.add('popup_opened');
}

// Слушатели событий
editButton.addEventListener('click', () => openPopup(popupEditProfile));
addButton.addEventListener('click', () => openPopup(popupAddCard));

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', closePopup);
});

editFormElement.addEventListener('submit', editFormSubmitHandler);
addFormElement.addEventListener('submit', addFormSubmitHandler);

//closeButtons.addEventListener('click', closePopup(event))
