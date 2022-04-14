export class Card {
  constructor(data, { openViewPlacePopup, openDeleteCardPopup, hanldeLikeButton }, templateSelector, userID) {
    this._templateSelector = templateSelector;
    this._data = data
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes
    this._userId = userID
    this._ownerId = data.owner._id;
    this._cardId = data._id
    this._handleCardClick = openViewPlacePopup
    this._hanldeLikeButton = hanldeLikeButton
    this._handleDeleteButton = openDeleteCardPopup
  }

  _getTemplate() {
    this._cardElement = document.querySelector(this._templateSelector)
      .content
      .querySelector('.elements__item')
      .cloneNode(true);
    return this._cardElement;
  }

  deletePlace() {
    this._element.remove();
  }

  changeLike(res) {
    this._likes = res.likes
    this._numberLikesElement.textContent = this._likes.length
    this._toogleHeart()
  }

  pointLike() {
    return this._likes.some((like) => {
      return this._userId === like._id
    })
  }

  _toogleHeart() {
    this._likeButton.classList.toggle('element__heart_active');
  }

  _addListeners() {
    this._likeButton.addEventListener('click', () => { this._hanldeLikeButton() });
    this._deleteButton.addEventListener('click', (evt) => { this._handleDeleteButton(this) })
    this._elementImage.addEventListener('click', () => { this._handleCardClick(this._name, this._link) });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.element__heart')
    this._elementImage = this._element.querySelector('.element__image')
    this._deleteButton = this._element.querySelector('.elements__item-delete')
    this._numberLikesElement = this._element.querySelector('.element__like-number')
    this._placeName = this._element.querySelector('.element__place')
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._placeName.textContent = this._name;
    this._numberLikesElement.textContent = this._likes.length;

    if (this._userId !== this._ownerId) {
      this._deleteButton.remove();
    }

    if (this._likes.length > 0 && this.pointLike()) {
      this._toogleHeart()
    }

    this._addListeners();
    return this._element;
  }
}
