export default class Popup {
  constructor( popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButton = this._popup.querySelector('.popup__button-close')
  }

  _handleEscClose = (evt) => {
    if ( evt.key === "Escape") {
       this.close()     
    }
  }

  _handleCloseButton = () => {
    this.close()
  }

  _handleClickByOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
        this.close()
      }
  }

  setEventListeners() {
    this._popupCloseButton.addEventListener('click', this._handleCloseButton);
    this._popup.addEventListener('click', this._handleClickByOverlay)
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);      
  }
}