let popup = document.querySelector('.popup');

//Открыть popup
let editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', function() {
  popup.classList.add('popup_opened');
});

//Закрыть popup
function close() {
  popup.classList.remove('popup_opened');
};
let closeButton = document.querySelector('.popup__close');
closeButton.addEventListener('click', close);

// Находим форму в DOM
let formElement = document.querySelector('.form');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.form__item_type_name');
let jobInput = formElement.querySelector('.form__item_type_about');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  let newName = nameInput.value;
  let newJob = jobInput.value;

  // Выберите элементы, куда должны быть вставлены значения полей
  let name = document.querySelector('.profile__name');
  let job = document.querySelector('.profile__about-self');

  // Вставьте новые значения с помощью textContent
  name.textContent = newName;
  job.textContent = newJob;

  close();

  nameInput.value = "";
  jobInput.value = "";
}

formElement.addEventListener('submit', formSubmitHandler);

// Like

// let heartButton = document.querySelector('.element__heart');

// function heartActive() {
//   heartButton.classList.toggle('element__heart_active');
// };

// heartButton.addEventListener('click', heartActive);
