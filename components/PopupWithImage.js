import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popup, name, link) {
    super(popup)
    this._name = name
      // console.log(this._name)
      // debugger
    this._link = link

  }
  open() {
    const _viewPlaceName = this._popup.querySelector('.element-view__place');
    const _viewImage = this._popup.querySelector('.element-view__image');
    _viewPlaceName.textContent = this._name;
    _viewImage.alt = this._name;
    _viewImage.src = this._link;
    super.open()
  }
}
