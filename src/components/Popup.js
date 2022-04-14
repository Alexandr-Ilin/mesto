export default class Popup {
  constructor(popup) {
    this._popup = document.querySelector(popup)
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    //this.setEventListeners()
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      this.close();
    };
  }

  _handlerOverlayClick = (event) => {
    if (event.target === event.currentTarget || event.target.classList.contains('popup__close')) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', this._handlerOverlayClick);
  }
}
