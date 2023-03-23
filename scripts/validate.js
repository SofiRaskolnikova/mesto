function showInputError(errorTextElement, validationMessage, activeErrorClass, input, errorClass) {
  input.classList.add(errorClass)
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(activeErrorClass); 
};

function hideInputError(errorTextElement, activeErrorClass, input, errorClass) {
  input.classList.remove(errorClass)
  errorTextElement.classList.remove(activeErrorClass);
  errorTextElement.textContent = '';
};

export function disableButton(submitButton, invalidSubmitButtonClass) {
  submitButton.classList.add(invalidSubmitButtonClass);
  submitButton.disabled = true;
};

function enableButton(submitButton, invalidSubmitButtonClass) {
  submitButton.classList.remove(invalidSubmitButtonClass);
  submitButton.disabled = false;
};

// Проверка на валидность
function checkInputValidity(input, errorClassTemplate, activeErrorClass, errorClass) {
  const errorTextElement = document.querySelector(`${errorClassTemplate}${input.name}`); //input по name
  if(!input.validity.valid) {
    showInputError(errorTextElement, input.validationMessage, activeErrorClass, input, errorClass);
  } else {
    hideInputError(errorTextElement, activeErrorClass, input, errorClass);
  }
};

 function toggleButtonState(submitButton, invalidSubmitButtonClass, inputList) {
  if(!hasInvalidInput(inputList)) {
    enableButton(submitButton, invalidSubmitButtonClass);
  } else {
    disableButton(submitButton, invalidSubmitButtonClass);
  }
};

function hasInvalidInput(inputList) {
  return Array.from(inputList).some((input) => !input.validity.valid);
};

function setEventListeners(formElement, inputList, errorClassTemplate, activeErrorClass, invalidSubmitButtonClass, submitButton, errorClass) {
  //отмена отправки формы 
  toggleButtonState(submitButton, invalidSubmitButtonClass, inputList);
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  //Проходим по всем инпутам в форме и навешиваем слушатель для отслеживания события 'input' и вывод на экран
  inputList.forEach((input) => {
    input.addEventListener('input', (evt) => {
    checkInputValidity(input, errorClassTemplate, activeErrorClass, errorClass);
    toggleButtonState(submitButton, invalidSubmitButtonClass, inputList);
    })
  })
};

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));//селектор для инпутов
    const submitButton = formElement.querySelector(config.submitButtonSelector);
    setEventListeners(formElement, inputList, config.errorClassTemplate, config.activeErrorClass, config.invalidSubmitButtonClass, submitButton, config.errorClass);
  })
};

export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.popup__item',
  errorClassTemplate: '.popup__item-error_type_',
  activeErrorClass: 'popup__item-error',
  submitButtonSelector: '.popup__button-save',
  invalidSubmitButtonClass: 'popup__button_disable',
  errorClass: 'popup__error_visible'
};

enableValidation(validationConfig)
