class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._data = data;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners(cardElement) {
    const likeButton = cardElement.querySelector(".card__like-button");
    const deleteButton = cardElement.querySelector(".card__delete-button");

    likeButton.addEventListener("click", () => {
      this._handleLikeClick();
    });

    deleteButton.addEventListener("click", () => {
      this._handleDeleteClick(cardElement);
    });

    const cardImageElement = cardElement.querySelector(".card__image");
    cardImageElement.addEventListener("click", () => {
      this._handleImageClick(this._data);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners(this._element);

    this._element.querySelector(".card__title").textContent = this._data.name;
    this._element.querySelector(".card__image").src = this._data.link;
    this._element.querySelector(".card__image").alt = this._data.name;

    return this._element;
  }

  _handleLikeClick() {
    // Handle the like button click event
  }

  _handleDeleteClick(cardElement) {
    // Handle the delete button click event
  }
}

export default Card;
