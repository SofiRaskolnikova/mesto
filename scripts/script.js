let editProfileButton = document.querySelector('.profile__button-edit');
let editPopup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__button-close');
const closePopupAddButton = document.querySelector('.popup-add__button-close');
let profileUserNameElement = document.querySelector('.profile__title');
let profileJobElement = document.querySelector('.profile__text');
let popupInputName = document.querySelector('.popup__item_input_name');
let popupInputJob = document.querySelector('.popup__item_input_job');
let formElement = document.querySelector('#form-edit');
const addProfileButton = document.querySelector('.profile__botton-add');
const addPopup = document.querySelector('.popup-add');




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
  profileUserNameElement.textContent = popupInputName.value;
  profileJobElement.textContent = popupInputJob.value;
  
  closePopup();
  
};

formElement.addEventListener('submit', editUserInfo);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elements = document.querySelector('.elements');

function createCard(item) {
  const newItem = document.querySelector('#card').content.cloneNode(true);
  const itemTitle = newItem.querySelector('.element__title');
  const itemImage = newItem.querySelector('.element__image');
  const likeButton = newItem.querySelector('.element__button');
  const resetButton = newItem.querySelector('.element__button-reset');

  itemTitle.textContent = item.name;
  itemImage.setAttribute('src', item.link);

  likeButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__button_active')
  });

  resetButton.addEventListener('click', handleResetButtonClick)


  elements.prepend(newItem);
}

initialCards.forEach(createCard);

function handleResetButtonClick(event) {
  const button = event.target;
  const item = button.closest('.element')
  item.remove()
}

function openAddPopup () {
  addPopup.classList.add('popup_opened');
};

addProfileButton.addEventListener('click', openAddPopup);

function closeAddPopup () {
  addPopup.classList.remove('popup_opened');
};

closePopupAddButton.addEventListener('click', closeAddPopup);

const formAddElement = document.querySelector('#form-add');


function handleFormAddSubmit(evt) {
  evt.preventDefault();
 const formAddElement = evt.target
 const name = formAddElement.querySelector('.popup__item_plase_name').value;
 const link = formAddElement.querySelector('.popup__item_place_url').value;
 const item = {
  name, link
 }

 createCard(item);
 closeAddPopup()
 
};

formAddElement.addEventListener('submit', handleFormAddSubmit);
