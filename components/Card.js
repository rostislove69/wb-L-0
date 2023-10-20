export default class Card {
  constructor({name, link, colour, size, image, stock, provider, oldPrice, newPrice, remainder, index}, templateSelector, changePrice){
      this.name = name,
      this.link = link,
      this.colour = colour,
      this.size = size,
      this.image = image,
      this.stock = stock,
      this.provider = provider,
      this.oldPrice = oldPrice,
      this.newPrice = newPrice,
      this.remainder = remainder,
      this.index = index,
      this.templateSelector = templateSelector,
      this.changePrice = changePrice
    }

    _getTemplate(){
      const cardElement = document
      .querySelector(this.templateSelector)
      .content
      .querySelector(".basket__element")
      .cloneNode(true);
      return cardElement;
    }

    _selectCard(checkbox){
      checkbox = this._element.querySelector(".basket__input");
      checkbox.checked = !checkbox.checked;
      this.changePrice();
    }

    _deleteCard(card){
      card = this._element;
      card.remove();
      card = null;
      this.changePrice();
    }

    _decreaseCounter(counter){
      counter = this._element.querySelector(".basket__element-quantity");
      counter.value = Number(counter.value) - 1;
      this._newPrice.textContent = `${Number(this.newPrice) * Number(counter.value)}сом`;
      this._oldPrice.textContent = `${Number(this.oldPrice) * Number(counter.value)}сом`;
      if(counter.value <= 1){
        this._decreaseButton.setAttribute("disabled", "true");
      }
      this._increaseButton.removeAttribute("disabled");
      this.changePrice();
    }

    _increaseCounter(counter){
      counter = this._element.querySelector(".basket__element-quantity");
      counter.value =  Number(counter.value) + 1;
      this._newPrice.textContent = `${Number(this.newPrice) * Number(counter.value)}сом`;
      this._oldPrice.textContent = `${Number(this.oldPrice) * Number(counter.value)}сом`;
      if(this.remainder !== undefined && counter.value >= this.remainder){
        this._increaseButton.setAttribute("disabled", "true");
      }
      this._decreaseButton.removeAttribute("disabled");
      this.changePrice();
    }

    _setEventListener(){
      this._buttonDelete.addEventListener("click", () => {
        this._deleteCard();
      })

      this._decreaseButton.addEventListener("click", () => {
        this._decreaseCounter();
      })

      this._increaseButton.addEventListener("click", () => {
        this._increaseCounter();
      })

      this._checkbox.addEventListener("click", () => {
        this._selectCard();
      })
    }

    generateCard(){
      this._element = this._getTemplate();
      this._name = this._element.querySelector(".basket__element-name");
      this._image = this._element.querySelector(".basket__element-img");
      this._colour = this._element.querySelector(".basket__element-info-colour");
      this._size = this._element.querySelector(".basket__element-info-size");
      this._mobileSize = this._element.querySelector(".basket__element-info-size-mobile");
      this._stock = this._element.querySelector(".basket__element-stock");
      this._provider = this._element.querySelector(".basket__element-provider");
      this._newPrice = this._element.querySelector(".basket__element-new-price");
      this._oldPrice = this._element.querySelector(".basket__element-old-price");
      this._remainder = this._element.querySelector(".basket__element-remainder");
      this._buttonDelete = this._element.querySelector(".basket__element-delete-button");
      this._decreaseButton = this._element.querySelector(".basket__element-decrease-button");
      this._increaseButton = this._element.querySelector(".basket__element-increase-button");
      this._counter = this._element.querySelector(".basket__element-quantity");
      this._checkbox = this._element.querySelector(".checkbox-label");
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
      this._stock.textContent = this.stock;
      this._provider.textContent = this.provider;
      this._newPrice.textContent = `${this.newPrice}сом`;
      this._oldPrice.textContent = `${this.oldPrice}сом`;
      if(this.remainder === undefined){
        this._remainder.style = "display: none";
      }
      this._remainder.textContent = `Осталось ${this.remainder} шт.`;
      this._setEventListener();
      return this._element;
    }
}