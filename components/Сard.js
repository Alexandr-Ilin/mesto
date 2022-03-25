export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick
  }

  _getTemplate() {
    this._cardElement = document.querySelector(this._templateSelector)
      .content
      .querySelector('.elements__item')
      .cloneNode(true);
    return this._cardElement;
  }

  _deletePlace() {
    this._element.remove();
  }

  _toogleHeart() {
    this._likeButton.classList.toggle('element__heart_active');
  }

  _addListeners() {
    this._likeButton.addEventListener('click', () => { this._toogleHeart() });
    this._element.querySelector('.elements__item-delete').addEventListener('click', () => { this._deletePlace() });
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.element__heart')
    this._elementImage = this._element.querySelector('.element__image')
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._element.querySelector('.element__place').textContent = this._name;
    this._addListeners();
    return this._element;
  }
}
