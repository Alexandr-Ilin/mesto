export default class UserInfo {
  constructor({ user, character, avatar }) {
    this._name = document.querySelector(user)
    this._character = document.querySelector(character)
    this._avatar = document.querySelector(avatar)
  }

  getUserInfo() {
    const userData = {
      user: this._name.textContent,
      character: this._character.textContent
    }
    return userData
  }

  setUserInfo = ({ name, about, avatar }) => {
    this._name.textContent = name
    this._character.textContent = about
    this._avatar.src = avatar
  }
}
