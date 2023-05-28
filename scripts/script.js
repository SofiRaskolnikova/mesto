import {FormValidator} from './FormValidator.js';
import {Card, initialCards} from './Card.js';


const config = {
  formSelector : '.form',
  inputSelector: '.popup__item',
  errorClassTemplate: '.popup__item-error_type_',
  activeErrorClass: 'popup__item-error',
  submitButtonSelector: '.popup__button-save',
  invalidSubmitButtonClass: 'popup__button_disable',
  errorClass: 'popup__error_visible',
};

const buttonEditProfile = document.querySelector('.profile__button-edit');
const popupEditProfile = document.querySelector('.popup-edit');
const buttonClosePopupEdit = document.querySelector('.popup-edit__button-close');
const buttonClosePopupAdd= document.querySelector('.popup-add__button-close');
const profileUserNameElement = document.querySelector('.profile__title');
const profileJobElement = document.querySelector('.profile__text');
const popupInputName = document.querySelector('.popup__item_input-name');
const popupInputJob = document.querySelector('.popup__item_input-job');
const formProfileElement = document.querySelector('#form-edit');
const buttonAddPrifile = document.querySelector('.profile__botton-add');
const popupAdd = document.querySelector('.popup-add');
const popupModalImage = document.querySelector('.popup-image');
const formAddElement = document.querySelector('#form-add');
const popupList = Array.from(document.querySelectorAll('.popup'));
const buttonClosePopupModalImg = popupModalImage.querySelector('.popup-image__button-close');
const namePopupInput = formAddElement.querySelector('.popup__item_plaсe-name');
const linkPopupInput = formAddElement.querySelector('.popup__item_place-url');
const cardElements = document.querySelector('.elements');
const profileFormValidator = new FormValidator(config, formProfileElement)
const newCardFormValidator = new FormValidator(config, formAddElement)

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
 
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', closePopupByEsc);
 
}

function openEditPopup() {
  popupInputName.value = profileUserNameElement.textContent;
  popupInputJob.value = profileJobElement.textContent;
  openPopup(popupEditProfile)
};

buttonEditProfile.addEventListener('click', openEditPopup);

// Функция для закрытия модального окна редактирования профиля
function closeEditPopup () {
  closePopup(popupEditProfile)
};

buttonClosePopupEdit.addEventListener('click', closeEditPopup);

// Отправка информации из формы
function editUserInfo(evt) {
  evt.preventDefault();
  profileUserNameElement.textContent = popupInputName.value;
  profileJobElement.textContent = popupInputJob.value;
  
  closePopup(popupEditProfile);  
};

formProfileElement.addEventListener('submit', editUserInfo);

//Закрытие попапа на Escape
function closePopupByEsc(evt) {
    if ( evt.key === "Escape") {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
};

//Закрытие модального окна при нажатии вне области формы
function closePopupByOverlay (evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
      document.body.style.overflow = '';
    }     
};

popupAdd.addEventListener('click', closePopupByOverlay);
popupEditProfile.addEventListener('click', closePopupByOverlay);
popupModalImage.addEventListener('click', closePopupByOverlay);

function openAddPopup () {
  openPopup(popupAdd);
};

buttonAddPrifile.addEventListener('click', openAddPopup);

// Функция для закрытия модального окна добавления карточки
function closeAddPopup () {
  closePopup(popupAdd)
};

buttonClosePopupAdd.addEventListener('click', closeAddPopup);
buttonClosePopupModalImg.addEventListener('click', () => {
  closePopup(popupModalImage)
})

function createCard(item) { 
  const card = new Card(item, '#card');
  const cardElement = card.generateCard();
  return cardElement;
} 

function renderCard(item) { 
  const newItem = createCard(item);
  cardElements.prepend(newItem); 
}

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const nameValue = namePopupInput.value;
  const linkValue = linkPopupInput.value
  const newCard = {
    name: nameValue,
    link: linkValue,
    alt: nameValue
  }
   
  renderCard(newCard);
  closePopup(popupAdd);
  formAddElement.reset();
  newCardFormValidator.enableValidation();
};
   
formAddElement.addEventListener('submit', handleFormAddSubmit);

initialCards.forEach((item) => {
  const cardElement = createCard(item);
  cardElements.prepend(cardElement) 
})

profileFormValidator.enableValidation();
newCardFormValidator.enableValidation();

export {openPopup}