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

const buttonEditProfile = document.querySelector('.profile__button-edit');
const popupEditProfile = document.querySelector('.popup-edit');
const buttonClosePopupEdit = document.querySelector('.popup-edit__button-close');
const buttonClosePopupAdd= document.querySelector('.popup-add__button-close');
const profileUserNameElement = document.querySelector('.profile__title');
const profileJobElement = document.querySelector('.profile__text');
const popupInputName = document.querySelector('.popup__item_input_name');
const popupInputJob = document.querySelector('.popup__item_input_job');
const formProfileElement = document.querySelector('#form-edit');
const buttonAddPrifile= document.querySelector('.profile__botton-add');
const popupAdd = document.querySelector('.popup-add');
const elements = document.querySelector('.elements');
const popupModalImage = document.querySelector('.popup-image');
const modalImg = popupModalImage.querySelector('.popup-image__img');
const modalImgText = popupModalImage.querySelector('.popup-image__text');
const buttonClosePopupModalImg = popupModalImage.querySelector('.popup-image__button-close');
const formAddElement = document.querySelector('#form-add');

// Функция для открытия модального окна редактирования профиля
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
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
function editUserInfo() {
  evt.preventDefault();
  profileUserNameElement.textContent = popupInputName.value;
  profileJobElement.textContent = popupInputJob.value;
  
  closePopup(popupEditProfile);
  
};

formProfileElement.addEventListener('submit', editUserInfo);

function createCard(item) {
  const newItem = document.querySelector('#card').content.cloneNode(true);
  const itemTitle = newItem.querySelector('.element__title');
  const itemImage = newItem.querySelector('.element__image');
  const likeButton = newItem.querySelector('.element__button');
  const resetButton = newItem.querySelector('.element__button-reset');

  itemTitle.textContent = item.name;
  itemImage.setAttribute('src', item.link);
  itemImage.setAttribute('alt', item.alt);

  // Лайк
  likeButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__button_active')
  });

  resetButton.addEventListener('click', handleResetButtonClick); // Удаление карточки
  
  itemImage.addEventListener('click', openModalImgPopup);

  function showModalImgPopup(evt){
    openModalImgPopup ()

    modalImg.src = evt.target.getAttribute('src');
    modalImgText.innerText = itemTitle.innerText;
    modalImg.setAttribute('alt', item.alt)
  };
  
  itemImage.addEventListener('click', showModalImgPopup); 

  return newItem
}

function renderCard(item) {
  const newItem = createCard(item)
  elements.prepend(newItem);
}

initialCards.forEach(renderCard);

buttonClosePopupModalImg.addEventListener('click', closeModalImgPopup);

function openModalImgPopup () {
  openPopup(popupModalImage)
};

function closeModalImgPopup () {
  closePopup(popupModalImage)
};

// Функция для удаления карточки
function handleResetButtonClick(event) {
  const button = event.target;
  const item = button.closest('.element');
  item.remove()
}

// Функция для открытия модального окна добавления карточки
function openAddPopup () {
  openPopup(popupAdd) 
};

buttonAddPrifile.addEventListener('click', openAddPopup);

// Функция для закрытия модального окна добавления карточки
function closeAddPopup () {
  closePopup(popupAdd)
};

buttonClosePopupAdd.addEventListener('click', closeAddPopup);

// Создание новой карточки и добавление новых объектов в массив
function handleFormAddSubmit(evt) {
  evt.preventDefault();
 const formAddElement = evt.target
 const name = formAddElement.querySelector('.popup__item_plase_name').value;
 const link = formAddElement.querySelector('.popup__item_place_url').value;
 const alt = name; // Присваивание значения alt
 const item = {
  name,
  link,
  alt
 }

 renderCard(item);
 closeAddPopup()
 formAddElement.reset()
 
};

formAddElement.addEventListener('submit', handleFormAddSubmit);
