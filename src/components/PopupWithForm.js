import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._form = this._popup.querySelector('.form');
    this._inputList = this._form.querySelectorAll('.popup__item');
    this._submitButton = this._form.querySelector('.popup__button-text');
    this._textDefault = this._submitButton.textContent
  }

  _getInputValues() {
    this._values = {};
    this._inputList.forEach(input => {
      this._values[input.name] = input.value
    })
    return this._values
  }

  setInputValues(userData) {
    this._inputList.forEach(input => {
      input.value = userData[input.name]
    }) 
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._submitButton.textContent = `Сохранение...`
      this._submitFunction(this._getInputValues());
    })
  }

  loading() {
    this._submitButton.textContent = this._textDefault
  }

  close() {
    super.close()
    this._form.reset()
  }
}