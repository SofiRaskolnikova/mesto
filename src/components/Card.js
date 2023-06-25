export default class Card {
  constructor(cardData, templateSelector, openImagePopup, openDeletePopup, changeLike) {
    console.log(cardData);
    this._cardData = cardData;
    this._myId = cardData.myId;
    this._ownerId = cardData.owner._id;
    this._likes = cardData.likes;
    this._LenLikes = cardData.likes.length;
    this._cardId = cardData._id;
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._openImagePopup = openImagePopup;
    this._openDeletePopup = openDeletePopup;
    this._changeLike = changeLike;
    console.log(this._myId);
    console.log(this._ownerId);
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
    this._likeCount = this._element.querySelector('.element__counter')
    
    this._setEventListeners();
    this._itemTitle.textContent = this._name;
    this._itemImage.src = this._link;
    this._itemImage.alt = `Изображение ${this._name}`;
    this._viewLike();
    this._displayCorrectResetButton();
    

    return this._element;
  }

  _clickLikeButton() {
    this._changeLike(this._likeButton, this._cardId)
  }

  isLiked(likes) {
    this._likeButton.classList.toggle('element__button_active');
    this._likeCount.textContent = likes.length
  }

  _handleResetButtonClick() {
    this._openDeletePopup({
      card: this,
      cardId: this._cardId
    });
  }

  delete() {
    this._element.remove();
    this._element = null;
  }

  _displayCorrectResetButton() {
    if(this._myId === this._ownerId) {
      this._resetButton.style.display = 'block'
    } else {
      this._resetButton.style.display = 'none'
    }
  }

  _viewLike() {
    this._likes.forEach(element =>  {
      if( element._id === this._myId) {
        this._likeButton.classList.add('element__button_active'); 
        return
      }
    })
    this._likeCount.textContent = this._LenLikes
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

    

