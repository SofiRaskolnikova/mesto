let editProfileButton = document.querySelector('.profile__button-edit');
let editPopup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__button-close');
let profileUserNameElement = document.querySelector('.profile__title');
let profileJobElement = document.querySelector('.profile__text');
let popupInputName = document.querySelector('.popup__item_input_name');
let popupInputJob = document.querySelector('.popup__item_input_job');
let formElement = document.querySelector('.profile__container');

function openEditPopup () {
  popupInputName.value = profileUserNameElement.textContent;
  popupInputJob.value = profileJobElement.textContent;
  editPopup.classList.add('popup_opened');
};

editProfileButton.addEventListener('click', openEditPopup);

function closePopup () {
  editPopup.classList.remove('popup_opened');
};

closePopupButton.addEventListener('click', closePopup);

function editUserInfo(evt) {
  evt.preventDefault();
  popupInputName.value;
  popupInputJob.value;
  profileUserNameElement.textContent = popupInputName.value;
  profileJobElement.textContent = popupInputJob.value;
  
  closePopup();
};

formElement.addEventListener('submit', editUserInfo);
