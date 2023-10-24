export default class FormValidator {
  constructor(form) {
    this._form = form;
    this._button = document.querySelector(".total__button");
    this._inputList = Array.from(
      this._form.querySelectorAll(".recipient__input")
    );
  }

  disableSubmitButton() {
    this._button.setAttribute("disabled", true);
  }

  enableSubmitButton() {
    this._button.removeAttribute("disabled");
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this.enableSubmitButton();
    }
  }

  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("recipient__input_error");
    errorElement.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("recipient__input_error");
    errorElement.textContent = "";
  }

  resetValidation() {
    this._inputErrorList = Array.from(
      this._form.querySelectorAll(".recipient__input-error")
    );
    this._inputErrorList.forEach((inputErrorEl) => {
      inputErrorEl.textContent = "";
    });
    this._inputList.forEach((inputEl) => {
      inputEl.classList.remove("recipient__input_error");
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      if (this._button.disabled) {
        this._showInputError(inputElement);
        this._form.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._checkInputValidity(inputElement);
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation(){
    this._setEventListeners();
  }
}
