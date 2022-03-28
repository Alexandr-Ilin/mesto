import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  open = (name, link) => {
    const _viewPlaceName = this._popup.querySelector('.element-view__place');
    const _viewImage = this._popup.querySelector('.element-view__image');
    _viewPlaceName.textContent = name;
    _viewImage.alt = name;
    _viewImage.src = link;
    super.open()
  }
}
