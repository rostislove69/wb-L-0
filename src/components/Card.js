export default class Card {
  constructor({name, link, colour, size, image, stock, provider, oldPrice, newPrice, currency, remainder}, templateSelector, changePrice, changeAmountGoods, splitNumber, changeAmountFavorites){
      this.name = name,
      this.link = link,
      this.colour = colour,
      this.size = size,
      this.image = image,
      this.stock = stock,
      this.provider = provider.name,
      this.providerOgrn = provider.ogrn,
      this.providerAdress = provider.adress,
      this.oldPrice = oldPrice,
      this.newPrice = newPrice,
      this.currency = currency,
      this.remainder = remainder,
      this.templateSelector = templateSelector,
      this.changePrice = changePrice,
      this.changeAmountGoods = changeAmountGoods,
      this.splitNumber = splitNumber,
      this.changeAmountFavorites = changeAmountFavorites,
      this._mobileScreenWidth = 800;
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
      if(!checkbox.checked){
        const buttonChooseAllContainer = document.querySelector(".checkbox_choose-all");
        const buttonChooseAll = buttonChooseAllContainer.querySelector(".basket__input");
        buttonChooseAll.checked = false;
      }
      this.changePrice();
    }

    _addToFavourites(){
      this._buttonLike.classList.toggle("basket__element-like-button-active");
      if(this._buttonLike.classList.contains("basket__element-like-button-active")){
        this.changeAmountFavorites("add");
      } else {
        this.changeAmountFavorites("remove");
      }
    }

    _deleteCard(card){
      card = this._element;
      card.remove();
      card = null;
      this.changePrice();
      this.changeAmountGoods();
    }

    _hoverCard(card){
      card = this._element;
      this._addDeleteContainer = card.querySelector(".basket__element-add-delete-container");
      this._addDeleteContainer.classList.toggle("basket__element-add-delete-container-show");
    }

    _decreaseCounter(counter){
      counter = this._element.querySelector(".basket__element-quantity");
      counter.value = Number(counter.value) - 1;
      this._newPrice.textContent = this.splitNumber(Number(this.newPrice) * Number(counter.value));
      this._oldPrice.textContent = `${this.splitNumber(Number(this.oldPrice) * Number(counter.value))} сом`;
      if(counter.value <= 1){
        this._decreaseButton.setAttribute("disabled", "true");
        this._decreaseButton.classList.add("basket__element-decrease-button_disabled");
      }
      this._increaseButton.removeAttribute("disabled");
      this._increaseButton.classList.remove("basket__element-increase-button_disabled");
      this.changePrice();
    }

    _increaseCounter(counter){
      counter = this._element.querySelector(".basket__element-quantity");
      counter.value =  Number(counter.value) + 1;
      this._newPrice.textContent = this.splitNumber(Number(this.newPrice) * Number(counter.value));
      this._oldPrice.textContent = `${this.splitNumber(Number(this.oldPrice) * Number(counter.value))} сом`;
      if(this.remainder !== undefined && counter.value >= this.remainder){
        this._increaseButton.setAttribute("disabled", "true");
        this._increaseButton.classList.add("basket__element-increase-button_disabled");
      }
      this._decreaseButton.removeAttribute("disabled");
      this._decreaseButton.classList.remove("basket__element-decrease-button_disabled");
      this.changePrice();
    }

    _discountPercentCalculator(buyerDiscount, oldPrice, newPrice, element){
      let percent;
      percent = Math.round((oldPrice - newPrice) / (oldPrice / 100)) - buyerDiscount;
      if(percent < 1){
        return element.style = "display: none";
      } else {
        return percent;
      }
    }

    _discountSumCalculator(buyerDiscount, oldPrice, newPrice){
      return Math.round((oldPrice - newPrice) - (oldPrice / 100 * buyerDiscount));
    }

    _setEventListener(){
      this._buttonLike.addEventListener("click", () => {
        this._addToFavourites();
      })

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

      this._element.addEventListener("mouseover", () => {
        if(window.innerWidth > this._mobileScreenWidth){
          this._hoverCard();
        }
      })

      this._element.addEventListener("mouseout", () => {
        if(window.innerWidth > this._mobileScreenWidth){
          this._hoverCard();
        }
      })
    }

    generateCard(){
      this._element = this._getTemplate();
      this._name = this._element.querySelector(".basket__element-name");
      this._image = this._element.querySelector(".basket__element-img");
      this._infoBlock = this._element.querySelector(".basket__element-info-block");
      this._colour = this._element.querySelector(".basket__element-info-colour");
      this._size = this._element.querySelector(".basket__element-info-size");
      this._mobileSize = this._element.querySelector(".basket__element-info-size-mobile");
      this._stock = this._element.querySelector(".basket__element-stock");
      this._provider = this._element.querySelector(".basket__element-provider");
      this._providerTitle = this._element.querySelector(".basket__element-provider-info-title");
      this._providerOgrn = this._element.querySelector(".basket__element-provider-info-ogrn");
      this._providerAdress = this._element.querySelector(".basket__element-provider-info-adress");
      this._newPrice = this._element.querySelector(".basket__element-new-price-value");
      this._oldPrice = this._element.querySelector(".basket__element-old-price");
      this._currency = this._element.querySelector(".basket__element-new-price-currency");
      this._magazineDiscount = this._element.querySelector(".basket__element-magazine-discount");
      this._magazineDiscountContainer = this._element.querySelector(".basket__element-type-discount-container")
      this._magazineDiscountSum = this._element.querySelector(".basket__element-magazine-discount-sum");
      this._buyerDiscount = this._element.querySelector(".basket__element-buyer-discount");
      this._buyerDiscountSum = this._element.querySelector(".basket__element-buyer-discount-sum");
      this._remainder = this._element.querySelector(".basket__element-remainder");
      this._buttonLike = this._element.querySelector(".basket__element-like-button");
      this._buttonDelete = this._element.querySelector(".basket__element-delete-button");
      this._decreaseButton = this._element.querySelector(".basket__element-decrease-button");
      this._increaseButton = this._element.querySelector(".basket__element-increase-button");
      this._counter = this._element.querySelector(".basket__element-quantity");
      this._addDeleteContainer = this._element.querySelector(".basket__element-add-delete-container");
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
      if(this.colour === undefined && this.size === undefined){
        this._infoBlock.style = "display: none";
      }
      this._size.textContent = `Размер: ${this.size}`;
      this._mobileSize.textContent = this.size;
      this._stock.textContent = this.stock;
      this._provider.textContent = this.provider;
      this._providerTitle.textContent = this.provider;
      this._providerOgrn.textContent = `ОГРН: ${this.providerOgrn}`;
      this._providerAdress.textContent = this.providerAdress;
      this._newPrice.textContent = this.splitNumber(this.newPrice);
      if(this.newPrice > 9999){
        this._newPrice.classList.add("small-font");
      }
      this._currency.textContent = this.currency;
      this._oldPrice.textContent = `${this.splitNumber(this.oldPrice)} ${this.currency}`;
      if(this.remainder === undefined){
        this._remainder.style = "display: none";
      }
      this._buyerDiscount.textContent = "Скидка покупателя 10%";
      this._buyerDiscountSum.textContent = `−${Math.round(this.oldPrice / 100 * 10)} сом`;
      this._magazineDiscount.textContent = `Скидка ${this._discountPercentCalculator(10, this.oldPrice, this.newPrice, this._magazineDiscountContainer)}%`;
      this._magazineDiscountSum.textContent = `−${this._discountSumCalculator(10, this.oldPrice, this.newPrice)} сом`;
      this._remainder.textContent = `Осталось ${this.remainder} шт.`;
      this._setEventListener();
      return this._element;
    }
}