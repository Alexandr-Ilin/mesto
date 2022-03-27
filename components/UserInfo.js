export default class UserInfo {
  constructor(name, character) {
    this._name = document.querySelector(name)
    this._character = document.querySelector(character)
      //принимает селектор элемента имени пользователя и элемента информации о себе
      //export const nameProfile = document.querySelector('.profile__name');
      //export const jobProfile = document.querySelector('.profile__about-self');
  }
  getUserInfo() {
    inputsData[0].value = this._name.textContent
    inputsData[1].value = this._character.textContent
      //возвращает объект с данными пользователя
      //забирает данные из селекторов и подставляет в инпуты после открытия

  }
  setUserInfo(inputsData) {
    //принимает новые данные пользователя и добавляет их на страницу
    //принимает из инпутов из инпутов и нужна при закрытии, т.е. колбек
    this._name.textContent = inputsData[0].value
    this._character.textContent = inputsData[1].value
  }
}
