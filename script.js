let editProfileButton = document.querySelector('.profile__button-edit');
let editPopup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__button-close');
let savePopupButton = document.querySelector('.popup__button-save');
if (!closePopupButton) {
    throw new Error ('No closePopupButton');
}

if (!editProfileButton) {
    throw new Error ('No editProfileButton');
}
editProfileButton.addEventListener('click', openEditPopup);

function openEditPopup () {
  editPopup.classList.add('popup_opened');
};

closePopupButton.addEventListener('click', closePopup);

function closePopup () {
  editPopup.classList.remove('popup_opened');
};

let profileUserName = 'Жак-Ив Кусто';
let profileUserJob = 'Исследователь океана';

let profileUserNameElement = document.querySelector('.profile__title');
profileUserNameElement.textContent = profileUserName;

let profileJobElement = document.querySelector('.profile__text');
profileJobElement.textContent = profileUserJob;

let popupInputName = document.querySelector('.popup__item_input_name');
popupInputName.value = profileUserName;

let popupInputJob = document.querySelector('.popup__item_input_job');
popupInputJob.value = profileUserJob;

let formElement = document.querySelector('.profile__container');

function editUserInfo(evt) {
  evt.preventDefault();
  let popupInputName = document.querySelector('.popup__item_input_name').value;
  profileUserNameElement.innerHTML = popupInputName;
  let popupInputJob = document.querySelector('.popup__item_input_job').value;
  profileJobElement.innerHTML = popupInputJob;

  closePopup();
};

savePopupButton.addEventListener('click',editUserInfo);
formElement.addEventListener('submit', editUserInfo);

  


