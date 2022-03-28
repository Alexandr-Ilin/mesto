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
    const inputsValue = {}
    this._inputs.forEach(input => {
      inputsValue[input.name] = input.value
    })
    console.log(inputsValue)
    debugger
    // return (inputsValue)
    this._handleProfileFormSubmit(inputsValue)

    this.close()

  }

  close() {
    super.close()
    this._form.reset()
      //this._form.removeEventListener('submit', this._getInputValues)
  }

  setEventListeners = () => {
    super.setEventListeners()
    this._form.addEventListener('submit', this._getInputValues)
  }
}
this._handleProfileFormSubmit(this._getInputValues())
