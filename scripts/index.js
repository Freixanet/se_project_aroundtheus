// DECLARATIONS

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "../images/yosemite-valley.jpg",
  },
  {
    name: "Lake Louise",
    link: "../images/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "../images/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "../images/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "../images/vanoise-national-park.jpg",
  },
  {
    name: "Lago di Braies",
    link: "../images/lago-di-braies.jpg",
  },
];

// Modals
const modal = document.querySelector(".modal");
const profileFormElement = document.querySelector(".modal__form");
const nameInput = document.querySelector(".modal__input-name");
const jobInput = document.querySelector(".modal__input-description");

// Buttons and other DOM elements
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".modal__close-button");
const submitButton = document.querySelector(".modal__save-button");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__text");

// Wrappers
const placesList = document.querySelector(".places");

// Functions
function openModal() {
  modal.classList.add("modal_opened");
}

function closeModal() {
  modal.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeModal();
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function openEditProfileModal() {
  fillProfileForm();
  openModal();
}

function createCardElement(card) {
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card");
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardImage.style.backgroundImage = `url(${card.link})`;
  cardTitle.textContent = card.name;
  return cardElement;
}

function renderCard(card, wrapper) {
  wrapper.append(createCardElement(card));
}

// Event handlers
editButton.addEventListener("click", openEditProfileModal);
closeButton.addEventListener("click", closeModal);
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

initialCards.forEach((card) => renderCard(card, placesList));
