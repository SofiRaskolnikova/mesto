const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
      alt: 'Архыз'
    },
      {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
        alt:  'Челябинская область'
      },
      {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
        alt:  'Иваново'
      },
      {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
        alt:   'Камчатка'
      },
      {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
        alt:  'Холмогорский район'
      },
      {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
        alt:  'Байкал'
    
      }
  ];
  
const buttonEditProfile = document.querySelector('.profile__button-edit');
const buttonAddPrifile = document.querySelector('.profile__botton-add');
const formProfileElement = document.querySelector('#form-edit');
const formAddElement = document.querySelector('#form-add');
const popupProfileSelector = '.popup-edit';
const popupCardSelector = '.popup-add';
const popupImageSelector = '.popup-image';
const elementSelector = '.elements';

const configUserInfo = {
  userNameSelector: '.profile__title',
  userJobSelector: '.profile__text',
}

const config = {
  formSelector : '.form',
  inputSelector: '.popup__item',
  errorClassTemplate: '.popup__item-error_type_',
  activeErrorClass: 'popup__item-error',
  submitButtonSelector: '.popup__button-save',
  invalidSubmitButtonClass: 'popup__button_disable',
  errorClass: 'popup__error_visible',
};

export {
  initialCards,
  buttonEditProfile,
  buttonAddPrifile,
  formProfileElement,
  formAddElement,
  popupProfileSelector,
  popupCardSelector,
  popupImageSelector,
  elementSelector,
  config,
  configUserInfo,
}