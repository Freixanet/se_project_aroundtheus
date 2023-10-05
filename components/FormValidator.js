class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._settings.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._settings.errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _toggleButtonState() {
    const isValid = this._inputList.every(
      (inputElement) => inputElement.validity.valid
    );
    if (isValid) {
      this._buttonElement.removeAttribute("disabled");
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
    } else {
      this._buttonElement.setAttribute("disabled", true);
      this._buttonElement.classList.add(this._settings.inactiveButtonClass);
    }
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

  resetValidation() {
    this._inputList.forEach(inputElement => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }
}
}

const Settings = {
  formSelector: '.popup__form', // Selector for the form element
  inputSelector: '.popup__input', // Selector for the input fields within the form
  submitButtonSelector: '.popup__button', // Selector for the submit button within the form
  inactiveButtonClass: 'popup__button_disabled', // Class to apply to the submit button when it's inactive
  inputErrorClass: 'popup__input_type_error', // Class to apply to input fields with errors
  errorClass: 'popup__error_visible', // Class to apply to error messages for input fields
};


// Create an instance of the FormValidator class for the Profile Edit Popup Form
const profileEditFormElement = document.querySelector('#profile-edit-popup'); // Select the form element
const profileEditFormValidator = new FormValidator(formValidatorSettings, profileEditFormElement);

// Enable validation for the Profile Edit Popup Form
profileEditFormValidator.enableValidation();

// Create an instance of the FormValidator class for the Add Card Popup Form
const addCardFormElement = document.querySelector('#add-card-popup'); // Select the form element
const addCardFormValidator = new FormValidator(formValidatorSettings, addCardFormElement);

// Enable validation for the Add Card Popup Form
addCardFormValidator.enableValidation();

export { FormValidator, formValidatorSettings };