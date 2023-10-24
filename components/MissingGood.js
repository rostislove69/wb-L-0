export default class MissingGood {
  constructor({name, link, colour, size, image}, templateSelector, changeAmountMissingGoods){
    this.name = name,
    this.link = link,
    this.colour = colour,
    this.size = size,
    this.image = image,
    this.templateSelector = templateSelector
    this.changeAmountMissingGoods = changeAmountMissingGoods;
  }

  _getTemplate(){
    const cardElement = document
    .querySelector(this.templateSelector)
    .content
    .querySelector(".missing-items__element")
    .cloneNode(true);
    return cardElement;
  }

  _deleteCard(card){
    card = this._element;
    card.remove();
    card = null;
    this.changeAmountMissingGoods();
  }

  _setEventListener(){
    this._buttonDelete.addEventListener("click", () => {
      this._deleteCard();
    })
  }

  generateCard(){
    this._element = this._getTemplate();
    this._name = this._element.querySelector(".missing-items__element-name");
    this._image = this._element.querySelector(".missing-items__element-img");
    this._colour = this._element.querySelector(".missing-items__element-info-colour");
    this._size = this._element.querySelector(".missing-items__element-info-size");
    this._mobileSize = this._element.querySelector(".missing-items__element-info-size-mobile");
    this._buttonDelete = this._element.querySelector(".missing-items__element-delete-button");
    this._image.alt = this._name;
    this._name.textContent = this.name;
    this._name.href = this.link;
    this._image.src = this.image;
    if(this.colour === undefined){
      this._colour.style = "display: none";
    }
    this._colour.textContent = `Цвет: ${this.colour}`;
    if(this.size === undefined){
      this._size.style = "display: none";
      this._mobileSize.style = "display: none";
    }
    this._size.textContent = `Размер: ${this.size}`;
    this._mobileSize.textContent = this.size;
    this._setEventListener();
    return this._element;
  }
}