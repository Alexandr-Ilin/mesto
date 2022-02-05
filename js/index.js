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

//template
const elementsTemplate = document.querySelector('.elements__template').content;
const elements = document.querySelector('.elements');

function renderCards() {
  initialCards.forEach(creatCard);
};

function creatCard(item) {
  const newElement = elementsTemplate.cloneNode(true);
  newElement.querySelector('.element__place').textContent = item.name;
  newElement.querySelector('.element__image').src = item.link;
  newElement.querySelector('.element__image').alt = item.name;
  elements.append(newElement);
};

renderCards()

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

const popup = document.querySelectorAll('.popup');

const popupEditProfile = document.querySelector('.popup__edit-profile')
const popupAddCard = document.querySelector('.popup__add-card')

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button')

const closeButtons = document.querySelectorAll('.popup__close');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__about-self');
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('.form__item_type_name');
const jobInput = formElement.querySelector('.form__item_type_about');



//Открыть popup
function openPopup(el) {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  //console.log(el)
  el.classList.add('popup_opened');
};

//Закрыть popup
function closePopup(el) {
  //event.target.closest('.popup_opened').remove();
  el.classList.remove('popup_opened');

};

//submit редактирования данных
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

// Like
// let heartButton = document.querySelector('.element__heart');
// function heartActive() {
//   heartButton.classList.toggle('element__heart_active');
// };
// heartButton.addEventListener('click', heartActive);

// Слушатели событий
editButton.addEventListener('click', () => openPopup(popupEditProfile));
addButton.addEventListener('click', () => openPopup(popupAddCard));
closeButtons.forEach(button => {
  const popup = button.closest('.popup');
  console.log(popup);
  button.addEventListener('click', () => closePopup(popup))
});
formElement.addEventListener('submit', formSubmitHandler);
