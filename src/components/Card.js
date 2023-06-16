export default class Card {
  constructor(cardData, templateSelector, openImagePopup) {
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._openImagePopup = openImagePopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
        
      return cardElement;
  }
    
  generateCard(){
    this._element = this._getTemplate();
    this._itemTitle = this._element.querySelector('.element__title');
    this._itemImage = this._element.querySelector('.element__image');
    this._likeButton = this._element.querySelector('.element__button');
    this._resetButton = this._element.querySelector('.element__button-reset');
    
   
    this._setEventListeners();
    this._itemTitle.textContent = this._name;
    this._itemImage.src = this._link;
    this._itemImage.alt = `Изображение ${this._name}`;


    return this._element;
  }

  
  _clickLikeButton() {
    this._likeButton.classList.toggle('element__button_active'); 
  }

  _handleResetButtonClick() {
    this._element.remove();
  }

  _showModalImgPopup = () => {
    this._openImagePopup(this._cardData)
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._clickLikeButton();
    });

    this._resetButton.addEventListener('click', () => {
      this._handleResetButtonClick();
    });

    this._itemImage.addEventListener('click',() => {
      this._showModalImgPopup();
    }); 
  }
}

    

