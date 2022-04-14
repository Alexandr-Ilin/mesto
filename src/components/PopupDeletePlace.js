import Popup from "./Popup.js";
export default class PopupDeletePlace extends Popup {
  constructor(popup, deletePlace) {
    super(popup)
    this._form = this._popup.querySelector('.form')
    this._deletePlace = deletePlace
  }

  open(card) {
    this._card = card
    super.open()
  }

  setEventListeners = () => {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => this._deletePlace(evt, this._card))
  }
}