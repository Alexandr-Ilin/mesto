import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popup, handleProfileFormSubmit) {
    super(popup)
    this._handleProfileFormSubmit = handleProfileFormSubmit
    this._form = this._popup.querySelector('.form')
    this._inputs = this._form.querySelectorAll('.form__item')
  }

  _getInputValues = (evt) => {
    evt.preventDefault();
    const inputsValue = { name: this._inputs[0].value, link: this._inputs[1].value }
    this._handleProfileFormSubmit(inputsValue)
    this.close()
    this._form.reset()
  }

  close() {
    super.close()
      //this._form.removeEventListener('submit', this._getInputValues)
  }


  setEventListeners = () => {
    super.setEventListeners()
    this._form.addEventListener('submit', this._getInputValues)
  }
}
