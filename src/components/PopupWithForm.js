import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popup, handleProfileFormSubmit) {
    super(popup)
    this._handleProfileFormSubmit = handleProfileFormSubmit
    this._form = this._popup.querySelector('.form')
    this._inputList = this._form.querySelectorAll('.form__item')
    this._button = this._form.querySelector('.form__submit-button')
    this._text = this._button.textContent
  }

  _getInputValues = () => {
    const inputsValue = {}
    this._inputList.forEach(input => {
      inputsValue[input.name] = input.value
    })
    return (inputsValue)
  }

  setInputsValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  renderLoading(data) {
    if (data) {
      this._button.textContent = 'Cохранение...';
    } else {
      this._button.textContent = this._text;
    }
  }

  close() {
    super.close()
    this._form.reset()
  }

  setEventListeners = () => {
    super.setEventListeners()
    this._form.addEventListener('submit', () => this._handleProfileFormSubmit(this._getInputValues()))
  }
}
