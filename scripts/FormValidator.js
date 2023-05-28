class FormValidator {
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

  _showInputError(input) {
    input.classList.add(this._errorClass)
    this._errorTextElement.textContent = input.validationMessage;
    this._errorTextElement.classList.add(this._activeErrorClass); 
  };

 
  _hideInputError(input) {
    input.classList.remove(this._errorClass)
    this._errorTextElement.classList.remove(this._activeErrorClass);
    this._errorTextElement.textContent = '';
  };
  
  _disableButton() {
    this._submitButton.classList.add(this._invalidSubmitButtonClass);
    this._submitButton.disabled = true;
  };
  
  _enableButton() {
    this._submitButton.classList.remove(this._invalidSubmitButtonClass);
    this._submitButton.disabled = false;
  };
  
  // Проверка на валидность
  _checkInputValidity(input) {
    this._errorTextElement = document.querySelector(`${this._errorClassTemplate}${input.name}`);
   //input по name
    if(!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  };
  
  _toggleButtonState() {
    if(!this._hasInvalidInput()) {
      this._enableButton();
    } else {
      this._disableButton();
    }
  };
  
  _hasInvalidInput() {
    return Array.from(this._inputList).some((input) => !input.validity.valid);
  };
  
  _setEventListeners(form) {
    //отмена отправки формы 
    this._toggleButtonState();
    form.addEventListener('submit', (evt) => {
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
    this._submitButton;
    this._setEventListeners(this._form);
  }      
}

export {FormValidator}