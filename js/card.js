import { viewPlacePopup, viewPlaceName, viewImage } from "./constants.js";
import { openPopup } from "./index.js";


//темплейт элемент
//document.querySelector('.elements__template')

export class Card {
  constructor(data, templateSelector) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
  }

  _getTemplate() {
    this._cardElement = document.querySelector(this._templateSelector)
      .content
      .querySelector('.elements__item')
      .cloneNode(true);
    console.log('cardElement', this._cardElement)
    return this._cardElement;
  }

  _deletePlace() {
    this._element.closest('.elements__item').remove();
  }

  _toogleHeart() {
    this._element.querySelector('.element__heart').classList.toggle('element__heart_active');
  }

  _addListeners() {
    this._element.querySelector('.element__heart').addEventListener('click', () => { this._toogleHeart() });
    this._element.querySelector('.elements__item-delete').addEventListener('click', () => { this._deletePlace() });
    this._element.querySelector('.element__image').addEventListener('click', () => { this._openViewPlacePopup() });
  };

  generateCard() {
    this._element = this._getTemplate();
    console.log(this)
    this._addListeners();
    const _elementImage = this._element.querySelector('.element__image')
    _elementImage.src = this._link;
    _elementImage.alt = this._name;
    this._element.querySelector('.element__place').textContent = this._name;


    return this._element;
  }



  _openViewPlacePopup() {
    viewPlaceName.src = this._link;
    viewPlaceName.textContent = this._name;
    viewImage.alt = this._name;
    openPopup(viewPlacePopup);
  }
}
