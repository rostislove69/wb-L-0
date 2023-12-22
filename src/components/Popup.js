export default class Popup {
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  open(){
    this._popup.classList.remove("popup_hide");
    document.addEventListener("keydown", this._handleEscClose);
    document.body.style.overflow = "hidden";
  }

  close(){
    this._popup.classList.add("popup_hide");
    document.removeEventListener("keydown", this._handleEscClose);
    document.body.style.overflow = "auto";
  }

  thisPopup(){
    return this._popup;
  }

  submitButton(){
    return this._popup.querySelector(".popup__submit-button");
  }

  _handleEscClose(evt){
    if(evt.key === "Escape"){
      this.close();
    }
  }

  setEventListeners(){
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button-close')) {
        this.close();
      }
    });
  }
}