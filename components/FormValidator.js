class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  }

  // Private methods
  _checkFieldValidity(inputElement) {
    // Implement field validity check here
  }

  _changeSubmitButtonState() {
    // Implement submit button state change here
  }

  _addHandlers() {
    // Implement adding handlers here
  }

  // Public methods
  enableValidation() {
    this._addHandlers();
  }

  disableOrResetFormValidation() {
    // Implement disabling or resetting form validation here
  }
}

// Create an instance of FormValidator for each form that should be validated
const forms = document.querySelectorAll(".form");
forms.forEach((form) => {
  const validator = new FormValidator(
    { submitButtonSelector: ".submit-button" },
    form
  );
  validator.enableValidation();
});
