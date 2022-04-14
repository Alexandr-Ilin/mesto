import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup)
    this._viewPlaceName = this._popup.querySelector('.element-view__place');
    this._viewImage = this._popup.querySelector('.element-view__image');
  }

  open(name, link) {
    this._viewPlaceName.textContent = name;
    this._viewImage.alt = name;
    this._viewImage.src = link;
    super.open()
  }
}
