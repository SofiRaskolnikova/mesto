import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup-image__img')
    this._imagePopupCaption = this._popup.querySelector('.popup-image__text') 
  }

  open = (cardData) => {
    this._popupImage.src = cardData.link;
    this._popupImage.alt = `Изображение ${cardData.name}`;
    this._imagePopupCaption.textContent = cardData.name;
    super.open()

  }
}