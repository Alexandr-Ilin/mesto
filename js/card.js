import { openPopup, viewCardPopup } from "./index.js";

export class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('.elements__template')
      .content
      .querySelector('.elements__item')
      .cloneNode(true);
    //console.log(cardElement)
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._addListeners();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__place').textContent = this._name;
    this._element.querySelector('.element__image').alt = this._name;


    return this._element;
  }

  _addListeners() {
    this._element.querySelector('.element__heart').addEventListener('click', () => { this._toogleHeart() });
    this._element.querySelector('.elements__item-delete').addEventListener('click', () => { this._deletePlace() });
    this._element.querySelector('.element__image').addEventListener('click', () => { this._openViewPlacePopup() });
  };

  _toogleHeart() {
    this._element.querySelector('.element__heart').classList.toggle('element__heart_active');
  }

  _deletePlace() {
    this._element.closest('.elements__item').remove();
  }

  _openViewPlacePopup() {
    document.querySelector('.element-view__place').src = this._link;
    document.querySelector('.element-view__place').alt = this._name;
    document.querySelector('.element-view__image').alt = this._name;

    //viewImage.alt = event.target.alt;
    //viewPlaceName.textContent = event.target.alt;
    openPopup(viewCardPopup);
  }
}
