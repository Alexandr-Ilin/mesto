import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popup, handleProfileFormSubmit) {
    super(popup)
    this._handleProfileFormSubmit = handleProfileFormSubmit
    this._form = this._popup.querySelector('.form')
    this._inputs = Array.from(this._form.querySelectorAll('.form__item'))
  }

  _getInputValues = (evt) => {
    evt.preventDefault();
    console.log(this._inputs)
    const inputsData = this._inputs.map(element => {
      const value = element.value

      //console.log(element)
      return value
        //debugger
    });
    this._handleProfileFormSubmit(inputsData)
    console.log(inputsData)
      //debugger
    this.close()
    this._form.reset()
  }

  close() {
    super.close()
    this._form.removeEventListener('submit', this._getInputValues)
  }


  setEventListeners = () => {
    super.setEventListeners()
    this._form.addEventListener('submit', this._getInputValues)
  }
}
