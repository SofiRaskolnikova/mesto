
const buttonEditProfile = document.querySelector('.profile__button-edit');
const buttonAddPrifile = document.querySelector('.profile__botton-add');
const formProfileElement = document.querySelector('#form-edit');
const formAddElement = document.querySelector('#form-add');
const popupProfileSelector = '.popup-edit';
const popupCardSelector = '.popup-add';
const popupImageSelector = '.popup-image';
const elementSelector = '.elements';
const popupEditAvatar = '.popup-avatar';
const buttonEditAvatarProfile = document.querySelector('.button-overlay');
const popupDeleteSelector = '.popup-delete';
const formAvatarElement = document.querySelector('#form-avatar')

const configUserInfo = {
  userNameSelector: '.profile__title',
  userJobSelector: '.profile__text',
  userAvatarSelector: '.profile__image'
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
  buttonEditProfile,
  configUserInfo,
  buttonAddPrifile,
  formProfileElement,
  formAddElement,
  popupProfileSelector,
  popupCardSelector,
  popupImageSelector,
  elementSelector,
  config,
  popupEditAvatar,
  buttonEditAvatarProfile,
  popupDeleteSelector,
  formAvatarElement,
}