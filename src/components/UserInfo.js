export default class UserInfo {
  constructor({ name, character }) {
    this._name = document.querySelector(name)
    this._character = document.querySelector(character)
  }

  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      character: this._character.textContent
    }
    return userData
  }

  setUserInfo = (inputsValue) => {
    console.log(inputsValue)
      //debugger
    this._name.textContent = name
    this._character.textContent = about
  }
}
