export default class UserInfo {
  constructor({ user, character }) {
    this._user = document.querySelector(user)
    this._character = document.querySelector(character)
  }

  getUserInfo() {
    const userData = {
      user: this._user.textContent,
      character: this._character.textContent
    }
    return userData
  }

  setUserInfo = ({ user, character }) => {
    this._user.textContent = user
    this._character.textContent = character
  }
}
