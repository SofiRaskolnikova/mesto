import FormValidator from './components/FormValidator.js';
import Card from './components/Card.js';
import PopupWithImage from './components/PopupWithImage.js';
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';
import PopupWithForm from './components/PopupWithForm.js';
import {
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
} from './utils/constants.js';
import './pages/index.css';

const profileFormValidator = new FormValidator(config, formProfileElement);

const newCardFormValidator = new FormValidator(config, formAddElement);

const userInfo = new UserInfo(configUserInfo);

const popupImage = new PopupWithImage(popupImageSelector);

const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#card', popupImage.open);
    return card.generateCard()
  }
}, elementSelector)

section.addCardFromArray()

const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupProfile.getInputValues())
  popupProfile.close()
})

const popupCard = new PopupWithForm (popupCardSelector, (evt) => {
  evt.preventDefault();
  section.addItem(section.renderer(popupCard.getInputValues()))
  popupCard.close()
})

buttonEditProfile.addEventListener('click', () => {
  popupProfile.setInputValues(userInfo.getUserInfo())
  popupProfile.open()
})

buttonAddPrifile.addEventListener('click', () => {
  popupCard.open()
  newCardFormValidator.disableButton()
})

popupImage.setEventListeners();
popupProfile.setEventListeners();
popupCard.setEventListeners();

profileFormValidator.enableValidation();
newCardFormValidator.enableValidation();
