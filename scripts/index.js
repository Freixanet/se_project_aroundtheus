let initialCards = [
  {
    name: "Yosemite Valley",
    link: "../images/yosemite.valley.jpg",
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

let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".modal__close-button");
let modal = document.querySelector(".modal");

function openModal() {
  modal.classList.add("modal_opened");
}

function closeModal() {
  modal.classList.remove("modal_opened");
}

editButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
