import {openPopup, closePopup, popupAdd}  from "./script.js";

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

const popupModalImage = document.querySelector('.popup-image');
const formAddElement = document.querySelector('#form-add');
const namePopupInput = formAddElement.querySelector('.popup__item_plaсe-name');
const linkPopupInput = formAddElement.querySelector('.popup__item_place-url');
const modalImg = document.querySelector('.popup-image__img');
const modalImgText = popupModalImage.querySelector('.popup-image__text');
const buttonClosePopupModalImg = popupModalImage.querySelector('.popup-image__button-close');

class Card{
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
        
      return cardElement;
  }
    
  _generateCard(){
    this._element = this._getTemplate();
    this._itemTitle = this._element.querySelector('.element__title');
    this._itemImage = this._element.querySelector('.element__image');
    this._likeButton = this._element.querySelector('.element__button');
    this._resetButton = this._element.querySelector('.element__button-reset');
   
    this._setEventListeners();
    this._itemTitle.textContent = this._name;
    this._itemImage.src = this._link;


    return this._element;
  }

  _clickLikeButton() {
    this._likeButton.classList.toggle('element__button_active'); 
  }

  _handleResetButtonClick() {
    this._resetButton.closest('.element').remove();
  }

  _showModalImgPopup(link, name) {
    modalImg.src = link;
    modalImgText.textContent = name;
    openPopup(popupModalImage);
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._clickLikeButton();
    });

    this._resetButton.addEventListener('click', () => {
      this._handleResetButtonClick();
    });

    this._itemImage.addEventListener('click',() => {
      this._showModalImgPopup(this._link, this._name);
    });

    buttonClosePopupModalImg.addEventListener('click', () => {
      closePopup(popupModalImage)
    })
  }
}

initialCards.forEach((item) => {
  const card = new Card(item, '#card');
  const cardElement = card._generateCard();
  document.querySelector('.elements').prepend(cardElement)
})

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const nameValue = namePopupInput.value;
  const linkValue = linkPopupInput.value
  const newCard = {
    name: nameValue,
    link: linkValue,
    alt: nameValue
  }
   
  const card = new Card(newCard, '#card');
  const cardElement = card._generateCard();
  document.querySelector('.elements').prepend(cardElement)
    closePopup(popupAdd)
    formAddElement.reset()
};
   
formAddElement.addEventListener('submit', handleFormAddSubmit);

    

