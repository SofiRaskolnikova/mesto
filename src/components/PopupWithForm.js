import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._form = this._popup.querySelector('.form');
    this._inputList = this._form.querySelectorAll('.popup__item');   
  }

  _getInputValues() {
    const values = {};
    this._inputList.forEach(input => {
      values[input.name] = input.value
    })
    return values
  }

  setInputValues(userData) {
    this._inputList.forEach(input => {
        input.value = userData[input.name]
    }) 
  }

  setEventListeners() {
    super.setEventListeners(Popup)
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._submitFunction(this._getInputValues());
      this.close();
    })
  }

  close() {
    super.close()
    this._form.reset()
  }
}