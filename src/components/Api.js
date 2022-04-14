export default class Api {
  constructor({
    baseUrl,
    headers
  }) {
    this._baseUrl = baseUrl;
    this._userUrl = `${this._baseUrl}/users/me`;
    this._avaUrl = `${this._baseUrl}/users/me/avatar`;
    this._cardsUrl = `${this._baseUrl}/cards`;
    this._likesUrl = `${this._baseUrl}/cards/likes`;
    this._headers = headers
  }

  //получение информации о пользователе с сервера
  getUserData() {
    return fetch(this._userUrl, {
        headers: this._headers
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  //получение карточек с сервера
  getInitialCards() {
    return fetch(this._cardsUrl, {
        headers: this._headers
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  //отправка данных пользователя на сервер
  changeUserData({ user, character }) {
    return fetch(this._userUrl, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: user,
          about: character,
        })
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  //добавлениt новой карточки на сервер
  addNewCard({ name, link }) {
    return fetch(this._cardsUrl, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link,
        })
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  //удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._cardsUrl}/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  //ставить лайк
  likedCard(cardId) {
    return fetch(`${this._likesUrl}/${cardId}`, {
        method: 'PUT',
        headers: this._headers
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  //удалить лайк
  deleteLike(cardId) {
    return fetch(`${this._likesUrl}/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  //смена аватара
  chengeAvatar(avatar) {
    return fetch(this._avaUrl, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(avatar),
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
}
