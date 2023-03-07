const editProfileButton = document.querySelector('.profile__button-edit');
const editPopup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__button-close');
const closePopupAddButton = document.querySelector('.popup-add__button-close');
const profileUserNameElement = document.querySelector('.profile__title');
const profileJobElement = document.querySelector('.profile__text');
const popupInputName = document.querySelector('.popup__item_input_name');
const popupInputJob = document.querySelector('.popup__item_input_job');
const formElement = document.querySelector('#form-edit');
const addProfileButton = document.querySelector('.profile__botton-add');
const addPopup = document.querySelector('.popup-add');
const elements = document.querySelector('.elements');
const modalImagePopop = document.querySelector('.popup-image');
const modalImg = modalImagePopop.querySelector('.popup-image__img');
const ModalImgText = modalImagePopop.querySelector('.popup-image__text');
const closeModalImgPopupButton = modalImagePopop.querySelector('.popup-image__button-close');

// Функция для открытия модального окна редактирования профиля
function openEditPopup () {
  popupInputName.value = profileUserNameElement.textContent;
  popupInputJob.value = profileJobElement.textContent;
  editPopup.classList.add('popup_opened');
};

editProfileButton.addEventListener('click', openEditPopup);

// Функция для закрытия модального окна редактирования профиля
function closePopup () {
  editPopup.classList.remove('popup_opened');
};

closePopupButton.addEventListener('click', closePopup);

// Отправка информации из формы
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
  
  elements.prepend(newItem); // Добвление в начало массива

  itemImage.addEventListener('click', openModalImgPopup);

  function showModalImgPopup(evt){
    openModalImgPopup ()

    modalImg.src = evt.target.getAttribute('src');
    ModalImgText.innerText = itemTitle.innerText;
    modalImg.setAttribute('alt', item.alt)
  };
  
  itemImage.addEventListener('click', showModalImgPopup);

  closeModalImgPopupButton.addEventListener('click', closeModalImgPopup);
}

function openModalImgPopup () {
  modalImagePopop.classList.add('popup_opened');
};

function closeModalImgPopup () {
  modalImagePopop.classList.remove('popup_opened');
};

initialCards.forEach(createCard);

// Функция для удаления карточки
function handleResetButtonClick(event) {
  const button = event.target;
  const item = button.closest('.element');
  item.remove()
}

// Функция для открытия модального окна добавления карточки
function openAddPopup () {
  addPopup.classList.add('popup_opened');
};

addProfileButton.addEventListener('click', openAddPopup);

// Функция для закрытия модального окна добавления карточки
function closeAddPopup () {
  addPopup.classList.remove('popup_opened');
};

closePopupAddButton.addEventListener('click', closeAddPopup);

const formAddElement = document.querySelector('#form-add');


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

 createCard(item);
 closeAddPopup()
 
};

formAddElement.addEventListener('submit', handleFormAddSubmit);
