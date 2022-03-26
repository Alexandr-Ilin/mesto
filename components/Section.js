export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._items = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  appendCard(element) {
    this._container.append(element)
  }

  prependCard(element) {
    this._container.prepend(element)
  }

  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }
}
