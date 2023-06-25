import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {
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
  popupEditAvatar,
  buttonEditAvatarProfile,
  popupDeleteSelector,
} from '../utils/constants.js';
import './index.css';
import Api from '../components/Api.js';
import PopupWithDeleteForm from '../components/PopupWithDeleteForm.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: 'f57cff3f-49b2-4341-8424-837c8e6008af',
    'Content-Type': 'application/json'
  }
}); 

const profileFormValidator = new FormValidator(config, formProfileElement);

const newCardFormValidator = new FormValidator(config, formAddElement);

const userInfo = new UserInfo(configUserInfo);

const popupImage = new PopupWithImage(popupImageSelector);

const popupDelete = new PopupWithDeleteForm(popupDeleteSelector, ({card, cardId}) => {
  api.deleteCard(cardId)
    .then(() => {
      card.delete()
      popupDelete.close()
    })
    .catch((error) => 
      console.error(`Возникла ошибка при удалении карточки ${error}`)
    )
})

function createCard(item) {
  const card = new Card(item, '#card', popupImage.open, popupDelete.open, (likeButton, cardId) => {
    if (likeButton.classList.contains('element__button_active')) {
      api.deleteLike(cardId)
        .then(res => {
          card.isLiked(res.likes)
        })
        .catch((error) => 
          console.error(`Возникла ошибка при удалении лайка ${error}`)
        )
    } else {
      api.addLike(cardId)
        .then( res => {
          card.isLiked(res.likes)
        })
        .catch((error) => 
          console.error(`Возникла ошибка при добавлении лайка ${error}`)
        )
      }
  });
  return card.generateCard()
}

const section = new Section((item) => {
  section.addItem(createCard(item))
}  
, elementSelector)

const popupProfile = new PopupWithForm(popupProfileSelector, inputValues => {
  api.setUserInfo(inputValues)
    .then(res => {
      userInfo.setUserInfo({
        username: res.name, 
        userjob: res.about, 
        useravatar: res.avatar
      })
      popupProfile.close()
    })
    .catch((error) => 
      console.error(`Возникла ошибка при редактировании профиля ${error}`)
    )
    .finally(() => popupProfile.loading())
})

const popupAvatarEdit = new PopupWithForm(popupEditAvatar, inputValues => {
  api.setAvatar(inputValues)
    .then(res => {
      userInfo.setUserInfo({
        username: res.name, 
        userjob: res.about,
        useravatar: res.avatar,
      });
      popupAvatarEdit.close()
    })
    .catch((error) => 
    console.error(`Возникла ошибка при редактировании аватара ${error}`)
  )
  .finally(() => popupAvatarEdit.loading())
});


const popupCard = new PopupWithForm (popupCardSelector, (inputValues) => {
  Promise.all([api.addCard(inputValues), api.getInfo()])
    .then(([cardData, userData]) => {
      cardData.myId = userData._id;
      section.addItem(createCard(cardData))
      popupCard.close()
    })
    .catch((error) => 
    console.error(`Возникла ошибка при создании карточки ${error}`)
    )
    .finally(() => popupCard.loading())
})

buttonEditProfile.addEventListener('click', () => {
  popupProfile.setInputValues(userInfo.getUserInfo())
  popupProfile.open()
})

buttonEditAvatarProfile.addEventListener('click', () => {
  popupAvatarEdit.open()
})

buttonAddPrifile.addEventListener('click', () => {
  popupCard.open()
  newCardFormValidator.disableButton()
})

popupImage.setEventListeners();
popupProfile.setEventListeners();
popupCard.setEventListeners();
popupAvatarEdit.setEventListeners()
popupDelete.setEventListeners()

profileFormValidator.enableValidation();
newCardFormValidator.enableValidation();

Promise.all([api.getInitialCard(), api.getInfo()])
  .then(([cardData, userData]) => {
    cardData.forEach(item => 
      item.myId = userData._id
    );

    userInfo.setUserInfo({
      username: userData.name, 
      userjob: userData.about,
      useravatar: userData.avatar,
    });
    section.addCardFromArray(cardData);
  })
  .catch((error) => 
    console.error(`Возникла ошибка при загрузке ${error}`)
  )