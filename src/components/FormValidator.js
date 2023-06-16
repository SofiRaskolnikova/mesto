export default class FormValidator {
  constructor(config, form) {
    this._form = form;
    this._inputSelector = config.inputSelector;
    this._errorClassTemplate = config.errorClassTemplate;
    this._activeErrorClass = config.activeErrorClass;
    this._submitButtonSelector = config.submitButtonSelector;
    this._invalidSubmitButtonClass = config.invalidSubmitButtonClass;
    this._errorClass = config.errorClass; 
    this._inputList = Array.from(this._form.querySelectorAll(config.inputSelector));
    this._submitButton = this._form.querySelector(config.submitButtonSelector);
  }

  _showInputError(errorTextElement, input) {
    input.classList.add(this._activeErrorClass)
    errorTextElement.textContent = input.validationMessage;
  };

  _hideInputError(errorTextElement, input) {
    input.classList.remove(this._activeErrorClass)
    errorTextElement.textContent = '';
  };
  
  disableButton() {
    this._submitButton.classList.add(this._invalidSubmitButtonClass);
    this._submitButton.disabled = true;
  };
  
  _enableButton() {
    this._submitButton.classList.remove(this._invalidSubmitButtonClass);
    this._submitButton.disabled = false;
  };
  
  // Проверка на валидность
  _checkInputValidity(input) {
    const errorTextElement = document.querySelector(`${this._errorClassTemplate}${input.name}`);
   //input по name
    if(!input.validity.valid) {
      this._showInputError(errorTextElement, input);
    } else {
      this._hideInputError(errorTextElement, input);
    }
  };
  
  _toggleButtonState() {
    if(!this._hasInvalidInput()) {
      this._enableButton();
    } else {
      this.disableButton();
    }
  };
  
  _hasInvalidInput() {
    return this._inputList.some((input) => !input.validity.valid);
  };
  
  _setEventListeners() {
    //отмена отправки формы 
    this._toggleButtonState();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  
    //Проходим по всем инпутам в форме и навешиваем слушатель для отслеживания события 'input' и вывод на экран
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
      this._checkInputValidity(input);
      this._toggleButtonState();
      })
    })
  };
  
  enableValidation() {
    this._setEventListeners(this._form);
  }      
}
