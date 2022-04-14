import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popup, handleProfileFormSubmit) {
    super(popup)
    this._handleProfileFormSubmit = handleProfileFormSubmit
    this._form = this._popup.querySelector('.form')
    this._inputs = this._form.querySelectorAll('.form__item')
    this._button = this._form.querySelector('.form__submit-button')
    this._text = this._button.textContent
  }

  _getInputValues = () => {
    const inputsValue = {}
    this._inputs.forEach(input => {
      inputsValue[input.name] = input.value
    })
    return (inputsValue)
  }

  hendleLoad(data) {
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
