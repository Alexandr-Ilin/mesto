import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  open(name, link) {
    this._viewPlaceName = this._popup.querySelector('.element-view__place');
    this._viewImage = this._popup.querySelector('.element-view__image');
    this._viewPlaceName.textContent = name;
    this._viewImage.alt = name;
    this._viewImage.src = link;
    super.open()
  }
}