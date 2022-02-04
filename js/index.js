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

// function render() {

//   initialCards.forEach(renderElements);
// }

function renderElements() {
  for (i = 0; i < initialCards.length; i++) {
    const newElement = elementsTemplate.cloneNode(true);
    newElement.querySelector('.element__place').textContent = initialCards[i].name;
    newElement.querySelector('.element__image').setAttribute('src', initialCards[i].link);
    elements.append(newElement);
  };
};

renderElements()


//конец template

const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__about-self');
const formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__item_type_name');
let jobInput = formElement.querySelector('.form__item_type_about');

//Открыть popup
function openPopup() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  popup.classList.add('popup_opened');
};

//Закрыть popup
function closePopup() {
  popup.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
}

// Like

// let heartButton = document.querySelector('.element__heart');

// function heartActive() {
//   heartButton.classList.toggle('element__heart_active');
// };

// heartButton.addEventListener('click', heartActive);
// Слушатели событий
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
