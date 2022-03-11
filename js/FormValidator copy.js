export class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._settings = settings;
  }

  _hideError(inputItem) {
    inputItem.classList.remove(this._settings.inputErrorClass)
    const message = this._form.querySelector(`.form__error-message_type_${inputItem.name}`);
    message.classList.remove(this._settings.errorClass)
    message.textContent = '';
  }

  _showError(inputItem, errorMessage) {
    console.log(inputItem.validationMessage)
    debugger
    inputItem.classList.add(this._inputErrorClass);
    const message = this._form.querySelector(`.form__error-message_type_${inputItem.name}`);
    message.textContent = errorMessage;
    message.classList.add(this._settings.errorClass);
  }

  _checkInputValidity(inputItem) {
    console.log('input', inputItem)

    if (inputItem.validity.valid) {
      this._hideError(inputItem);
    } else {
      this._showError(inputItem, inputItem.validationMessage);
    };
  }

  _hasInvalidInput() {

    return this._inputItems.some(inputItem => {
      return !inputItem.validity.valid;
    });
  };


  _toogleButtonState() {
    if (this._hasInvalidInput()) {

      this._button.setAttribute('disabled', '');
      this._button.classList.add(this._settings.inactiveButtonClass);
    } else {

      this._button.removeAttribute('disabled')
      this._button.classList.remove(this._settings.inactiveButtonClass)
    }
  }

  _addInputListener() {

    this._inputItems = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._button = this._form.querySelector(this._settings.submitButtonSelector);
    this._inputItems.forEach(inputItem => {
      inputItem.addEventListener('input', () => {
        this._checkInputValidity(inputItem);
        this._toogleButtonState();
      })
    })
  }

  enableValidation() {

    this._form.addEventListener('submit', function(event) {
      event.preventDefault();
    });
    this._addInputListener();
  }
}
