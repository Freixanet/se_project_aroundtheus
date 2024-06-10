export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector); // Guardamos el selector del popup
  }

  open() {
    this._popup.classList.add("popup_opened"); // Añadimos una clase CSS para abrir el popup
  }

  close() {
    this._popup.classList.remove("popup_opened"); // Eliminamos la clase CSS para cerrar el popup
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close(); // Llamamos al método close para cerrar el popup si se presiona la tecla Esc
    }
  }

  setEventListeners() {
    this._popup.addEventListener("click", (event) => {
      if (
        event.target.classList.contains("popup__close") ||
        event.target.classList.contains("popup")
      ) {
        this.close(); // Cerrar el popup si se hace clic en el icono de cerrar o en el área sombreada
      }
    });
  }
}

class popupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popup.querySelector(".popup__image");
    this._captionElement = this._popup.querySelector(".popup__caption");
  }
}
