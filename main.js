(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var i=0;i<n.length;i++){var o=n[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,n){if("object"!==e(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(r)?r:String(r)),o)}var r}var n=function(){function e(t,n,i,o,r,s){var c=t.name,l=t.link,a=t.colour,u=t.size,m=t.image,_=t.stock,d=t.provider,h=t.oldPrice,y=t.newPrice,p=t.currency,b=t.remainder;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=c,this.link=l,this.colour=a,this.size=u,this.image=m,this.stock=_,this.provider=d.name,this.providerOgrn=d.ogrn,this.providerAdress=d.adress,this.oldPrice=h,this.newPrice=y,this.currency=p,this.remainder=b,this.templateSelector=n,this.changePrice=i,this.changeAmountGoods=o,this.splitNumber=r,this.changeAmountFavorites=s,this._mobileScreenWidth=800}var n,i;return n=e,(i=[{key:"_getTemplate",value:function(){return document.querySelector(this.templateSelector).content.querySelector(".basket__element").cloneNode(!0)}},{key:"_selectCard",value:function(e){(e=this._element.querySelector(".basket__input")).checked=!e.checked,e.checked||(document.querySelector(".checkbox_choose-all").querySelector(".basket__input").checked=!1),this.changePrice()}},{key:"_addToFavourites",value:function(){this._buttonLike.classList.toggle("basket__element-like-button-active"),this._buttonLike.classList.contains("basket__element-like-button-active")?this.changeAmountFavorites("add"):this.changeAmountFavorites("remove")}},{key:"_deleteCard",value:function(e){this._element.remove(),this.changePrice(),this.changeAmountGoods()}},{key:"_hoverCard",value:function(e){e=this._element,this._addDeleteContainer=e.querySelector(".basket__element-add-delete-container"),this._addDeleteContainer.classList.toggle("basket__element-add-delete-container-show")}},{key:"_decreaseCounter",value:function(e){(e=this._element.querySelector(".basket__element-quantity")).value=Number(e.value)-1,this._newPrice.textContent=this.splitNumber(Number(this.newPrice)*Number(e.value)),this._oldPrice.textContent="".concat(this.splitNumber(Number(this.oldPrice)*Number(e.value))," сом"),e.value<=1&&(this._decreaseButton.setAttribute("disabled","true"),this._decreaseButton.classList.add("basket__element-decrease-button_disabled")),this._increaseButton.removeAttribute("disabled"),this._increaseButton.classList.remove("basket__element-increase-button_disabled"),this.changePrice()}},{key:"_increaseCounter",value:function(e){(e=this._element.querySelector(".basket__element-quantity")).value=Number(e.value)+1,this._newPrice.textContent=this.splitNumber(Number(this.newPrice)*Number(e.value)),this._oldPrice.textContent="".concat(this.splitNumber(Number(this.oldPrice)*Number(e.value))," сом"),void 0!==this.remainder&&e.value>=this.remainder&&(this._increaseButton.setAttribute("disabled","true"),this._increaseButton.classList.add("basket__element-increase-button_disabled")),this._decreaseButton.removeAttribute("disabled"),this._decreaseButton.classList.remove("basket__element-decrease-button_disabled"),this.changePrice()}},{key:"_discountPercentCalculator",value:function(e,t,n,i){var o;return(o=Math.round((t-n)/(t/100))-e)<1?i.style="display: none":o}},{key:"_discountSumCalculator",value:function(e,t,n){return Math.round(t-n-t/100*e)}},{key:"_setEventListener",value:function(){var e=this;this._buttonLike.addEventListener("click",(function(){e._addToFavourites()})),this._buttonDelete.addEventListener("click",(function(){e._deleteCard()})),this._decreaseButton.addEventListener("click",(function(){e._decreaseCounter()})),this._increaseButton.addEventListener("click",(function(){e._increaseCounter()})),this._checkbox.addEventListener("click",(function(){e._selectCard()})),this._element.addEventListener("mouseover",(function(){window.innerWidth>e._mobileScreenWidth&&e._hoverCard()})),this._element.addEventListener("mouseout",(function(){window.innerWidth>e._mobileScreenWidth&&e._hoverCard()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._name=this._element.querySelector(".basket__element-name"),this._image=this._element.querySelector(".basket__element-img"),this._infoBlock=this._element.querySelector(".basket__element-info-block"),this._colour=this._element.querySelector(".basket__element-info-colour"),this._size=this._element.querySelector(".basket__element-info-size"),this._mobileSize=this._element.querySelector(".basket__element-info-size-mobile"),this._stock=this._element.querySelector(".basket__element-stock"),this._provider=this._element.querySelector(".basket__element-provider"),this._providerTitle=this._element.querySelector(".basket__element-provider-info-title"),this._providerOgrn=this._element.querySelector(".basket__element-provider-info-ogrn"),this._providerAdress=this._element.querySelector(".basket__element-provider-info-adress"),this._newPrice=this._element.querySelector(".basket__element-new-price-value"),this._oldPrice=this._element.querySelector(".basket__element-old-price"),this._currency=this._element.querySelector(".basket__element-new-price-currency"),this._magazineDiscount=this._element.querySelector(".basket__element-magazine-discount"),this._magazineDiscountContainer=this._element.querySelector(".basket__element-type-discount-container"),this._magazineDiscountSum=this._element.querySelector(".basket__element-magazine-discount-sum"),this._buyerDiscount=this._element.querySelector(".basket__element-buyer-discount"),this._buyerDiscountSum=this._element.querySelector(".basket__element-buyer-discount-sum"),this._remainder=this._element.querySelector(".basket__element-remainder"),this._buttonLike=this._element.querySelector(".basket__element-like-button"),this._buttonDelete=this._element.querySelector(".basket__element-delete-button"),this._decreaseButton=this._element.querySelector(".basket__element-decrease-button"),this._increaseButton=this._element.querySelector(".basket__element-increase-button"),this._counter=this._element.querySelector(".basket__element-quantity"),this._addDeleteContainer=this._element.querySelector(".basket__element-add-delete-container"),this._checkbox=this._element.querySelector(".checkbox-label"),this._image.alt=this._name,this._name.textContent=this.name,this._name.href=this.link,this._image.src=this.image,void 0===this.colour&&(this._colour.style="display: none"),this._colour.textContent="Цвет: ".concat(this.colour),void 0===this.size&&(this._size.style="display: none",this._mobileSize.style="display: none"),void 0===this.colour&&void 0===this.size&&(this._infoBlock.style="display: none"),this._size.textContent="Размер: ".concat(this.size),this._mobileSize.textContent=this.size,this._stock.textContent=this.stock,this._provider.textContent=this.provider,this._providerTitle.textContent=this.provider,this._providerOgrn.textContent="ОГРН: ".concat(this.providerOgrn),this._providerAdress.textContent=this.providerAdress,this._newPrice.textContent=this.splitNumber(this.newPrice),this.newPrice>9999&&this._newPrice.classList.add("small-font"),this._currency.textContent=this.currency,this._oldPrice.textContent="".concat(this.splitNumber(this.oldPrice)," ").concat(this.currency),void 0===this.remainder&&(this._remainder.style="display: none"),this._buyerDiscount.textContent="Скидка покупателя 10%",this._buyerDiscountSum.textContent="−".concat(Math.round(this.oldPrice/100*10)," сом"),this._magazineDiscount.textContent="Скидка ".concat(this._discountPercentCalculator(10,this.oldPrice,this.newPrice,this._magazineDiscountContainer),"%"),this._magazineDiscountSum.textContent="−".concat(this._discountSumCalculator(10,this.oldPrice,this.newPrice)," сом"),this._remainder.textContent="Осталось ".concat(this.remainder," шт."),this._setEventListener(),this._element}}])&&t(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===i(r)?r:String(r)),o)}var r}var r=function(){function e(t,n,i,o){var r=t.name,s=t.link,c=t.colour,l=t.size,a=t.image;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=r,this.link=s,this.colour=c,this.size=l,this.image=a,this.templateSelector=n,this.changeAmountMissingGoods=i,this.changeAmountFavorites=o,this._mobileScreenWidth=800}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this.templateSelector).content.querySelector(".missing-items__element").cloneNode(!0)}},{key:"_deleteCard",value:function(e){this._element.remove(),this.changeAmountMissingGoods()}},{key:"_addToFavourites",value:function(){this._buttonLike.classList.toggle("missing-items__element-like-button-active"),this._buttonLike.classList.contains("missing-items__element-like-button-active")?this.changeAmountFavorites("add"):this.changeAmountFavorites("remove")}},{key:"_hoverCard",value:function(e){e=this._element,this._addDeleteContainer=e.querySelector(".missing-items__element-add-delete-container"),this._addDeleteContainer.classList.toggle("missing-items__element-add-delete-container-show")}},{key:"_setEventListener",value:function(){var e=this;this._buttonDelete.addEventListener("click",(function(){e._deleteCard()})),this._buttonLike.addEventListener("click",(function(){e._addToFavourites()})),this._element.addEventListener("mouseover",(function(){window.innerWidth>e._mobileScreenWidth&&e._hoverCard()})),this._element.addEventListener("mouseout",(function(){window.innerWidth>e._mobileScreenWidth&&e._hoverCard()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._name=this._element.querySelector(".missing-items__element-name"),this._image=this._element.querySelector(".missing-items__element-img"),this._colour=this._element.querySelector(".missing-items__element-info-colour"),this._size=this._element.querySelector(".missing-items__element-info-size"),this._mobileSize=this._element.querySelector(".missing-items__element-info-size-mobile"),this._buttonDelete=this._element.querySelector(".missing-items__element-delete-button"),this._buttonLike=this._element.querySelector(".missing-items__element-like-button"),this._image.alt=this._name,this._name.textContent=this.name,this._name.href=this.link,this._image.src=this.image,void 0===this.colour&&(this._colour.style="display: none"),this._colour.textContent="Цвет: ".concat(this.colour),void 0===this.size&&(this._size.style="display: none",this._mobileSize.style="display: none"),this._size.textContent="Размер: ".concat(this.size),this._mobileSize.textContent=this.size,this._setEventListener(),this._element}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!==s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===s(o)?o:String(o)),i)}var o}var l=function(){function e(t,n,i){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._goodsContainer=document.querySelector(n),this._missingGoodsContainer=document.querySelector(i)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;Array.from(e).forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e,t){1==t?this._goodsContainer.append(e):0==t&&this._missingGoodsContainer.append(e)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===a(o)?o:String(o)),i)}var o}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=t,this._button=document.querySelector(".total__button"),this._inputList=Array.from(this._form.querySelectorAll(".recipient__input"))}var t,n;return t=e,(n=[{key:"disableSubmitButton",value:function(){this._button.setAttribute("disabled",!0)}},{key:"enableSubmitButton",value:function(){this._button.removeAttribute("disabled")}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this.enableSubmitButton()}},{key:"_showInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add("recipient__input_error"),"input-name"==e.id&&e.validity&&(t.textContent="Введите имя"),"input-surname"==e.id&&(t.textContent="Введите фамилию"),"input-email"==e.id&&(e.validity.valueMissing?t.textContent="Введите адрес электорнной почты":t.textContent="Формат mail@mail"),"input-telephone"==e.id&&(e.validity.valueMissing?t.textContent="Введите номер телефона":t.textContent="Формат +7 123 456-78-90"),"input-inn"==e.id&&(this._form.querySelector(".".concat(e.id,"-span")).classList.add("input-inn-span-hide"),t.textContent="Введите 14 цифр номера ИНН")}},{key:"_hideInputError",value:function(e){"input-inn"==e.id&&this._form.querySelector(".".concat(e.id,"-span")).classList.remove("input-inn-span-hide");var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove("recipient__input_error"),t.textContent=""}},{key:"resetValidation",value:function(){this._inputErrorList=Array.from(this._form.querySelectorAll(".recipient__input-error")),this._inputErrorList.forEach((function(e){e.textContent=""})),this._inputList.forEach((function(e){e.classList.remove("recipient__input_error")}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._button.disabled&&(this._showInputError(e),this._form.scrollIntoView({behavior:"smooth"}))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._checkInputValidity(t),t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!==_(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===_(o)?o:String(o)),i)}var o}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.remove("popup_hide"),document.addEventListener("keydown",this._handleEscClose),document.body.style.overflow="hidden"}},{key:"close",value:function(){this._popup.classList.add("popup_hide"),document.removeEventListener("keydown",this._handleEscClose),document.body.style.overflow="auto"}},{key:"thisPopup",value:function(){return this._popup}},{key:"submitButton",value:function(){return this._popup.querySelector(".popup__submit-button")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__button-close"))&&e.close()}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),y=document.querySelector(".checkbox-label"),p=Array.from(document.querySelectorAll(".recipient__input-block")),b=document.querySelector(".recipient__form"),v=document.querySelector(".total__button"),f=document.querySelector(".popup__pickup-button"),k=document.querySelector(".popup__courier-button"),S=document.querySelector(".close-delivery"),g=document.querySelector(".close-payment"),C=document.querySelector(".delivery__change-button"),q=document.querySelector(".total__delivery-change"),w=document.querySelector(".payment__change-button"),x=document.querySelector(".total__payment-change"),L=Array.from(document.querySelectorAll(".popup__delete-adress-button")),E=document.querySelector(".popup__pickup-adress-container"),P=document.querySelector(".popup__courier-adress-container"),z=document.querySelector(".basket__minimize-button"),A=document.querySelector(".missing-items__minimize-button"),B=document.querySelector(".total__payment-label"),N=new m(b),j=new h(".popup__delivery-method"),I=new h(".popup__payment-method");function D(e){for(var t=e.toString(),n=[],i="",o=0,r=t.length-1;r>=0;r--)i=t[r]+i,3==++o&&0!==r&&(n.unshift(i),i="",o=0);return n.unshift(i),n.join(" ")}j.submitButton().addEventListener("click",(function(){var e=document.querySelector(".delivery__method"),t=document.querySelector(".total__delivery-title"),n=document.querySelector(".delivery__adress-name"),i=document.querySelector(".total__delivery-adress"),o=document.querySelector(".delivery__time-container");f.classList.contains("popup__button_active")?(e.textContent="Пункт выдачи",t.textContent="Доставка в пункт выдачи",o.removeAttribute("style"),Array.from(E.querySelectorAll(".popup__input")).forEach((function(e){if(e.checked){var t=e.nextElementSibling;n.textContent=t.textContent,i.textContent=t.textContent}}))):(e.textContent="Доставит курьер",t.textContent="Доставит курьер",o.setAttribute("style","display:none"),Array.from(P.querySelectorAll(".popup__input")).forEach((function(e){if(e.checked){var t=e.nextElementSibling;n.textContent=t.textContent,i.textContent=t.textContent}}))),j.close()})),I.submitButton().addEventListener("click",(function(){var e=I.thisPopup().querySelectorAll(".popup__input"),t=document.querySelector(".payment__card-number"),n=document.getElementById("card-icon"),i=document.getElementById("card-icon-total");e.forEach((function(e){if(e.checked){var o=e.nextElementSibling;t.textContent=o.textContent,n.className=o.children[0].className,i.className=o.children[0].className}})),I.close()})),p.forEach((function(e){var t=e.querySelector(".recipient__input"),n=e.querySelector(".recipient__input-label");t.addEventListener("focus",(function(){n.style.transform="translateY(-180%)",n.style.fontSize="0.8em"})),t.addEventListener("blur",(function(){t.value||(n.style.transform="translateY(-50%)",n.style.fontSize="1em")})),t.value&&(n.style.transform="translateY(-180%)",n.style.fontSize="0.8em")}));var O=function(e){var t,n;return e+" "+(t=e,n=["товар","товара","товаров"],(t=Math.abs(t))%10==1&&t%100!=11?n[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?n[1]:n[2])},T=function(){var e=document.querySelector(".basket__elements"),t=Array.from(e.querySelectorAll(".basket__element")),n=document.querySelector(".total__total-price"),i=document.querySelector(".total__count-line-price"),o=document.querySelector(".total__count-line-goods"),r=document.querySelector(".total__discount-line-sum");n.textContent="0 сом",o.textContent="0 товаров",i.textContent="0 сом",r.textContent="0 сом",t.forEach((function(e){var t=e.querySelector(".basket__element-new-price-value"),s=e.querySelector(".basket__element-old-price"),c=e.querySelector(".basket__element-quantity");e.querySelector(".basket__input").checked&&(n.textContent=D(Number(n.textContent.split(" ").join("").slice(0,-3))+Number(t.textContent.split(" ").join("")))+" сом",o.textContent=O(Number(o.textContent.split(" ")[0])+Number(c.value)),i.textContent=D(Number(i.textContent.split(" ").join("").slice(0,-3))+Number(s.textContent.split(" ").join("").slice(0,-3)))+" сом",r.textContent="−"+D(Number(i.textContent.split(" ").join("").slice(0,-3))-Number(n.textContent.split(" ").join("").slice(0,-3)))+" сом")})),document.getElementById("checkbox6").checked&&(v.textContent="Оплатить ".concat(n.textContent))},W=function(){var e=document.querySelector(".basket__elements"),t=Array.from(e.querySelectorAll(".basket__element")),n=document.querySelector(".header__basket-count"),i=document.querySelector(".mobile-menu__basket-counter");t.length>0?(n.classList.remove("header__basket-count_hide"),i.classList.remove("mobile-menu__basket-counter_hide"),n.textContent=t.length,i.textContent=t.length):(n.classList.add("header__basket-count_hide"),i.classList.add("mobile-menu__basket-counter_hide"))},F=function(e){var t=document.querySelector(".mobile-menu__favorite-counter");"add"===e?t.textContent=Number(t.textContent)+1:"remove"===e&&(t.textContent=Number(t.textContent)-1),"0"===t.textContent?t.classList.add("mobile-menu__favorite-counter_hide"):t.classList.remove("mobile-menu__favorite-counter_hide")},M=function(){var e=document.querySelector(".missing-items__elements"),t=Array.from(e.querySelectorAll(".missing-items__element"));document.querySelector(".missing-items__title").textContent="Отсутствуют · ".concat(O(t.length))},V=new l({renderer:function(e){var t,i=new n({name:(t=e).name,link:t.link,colour:t.colour,size:t.size,image:t.image,stock:t.stock,provider:t.provider,oldPrice:t.oldPrice,newPrice:t.newPrice,currency:t.currency,remainder:t.remainder},"#element",T,W,D,F).generateCard(),o=function(e){return new r({name:e.name,link:e.link,colour:e.colour,size:e.size,image:e.image},"#element",M,F).generateCard()}(e);1==e.inStock?V.addItem(i,!0):0==e.inStock&&V.addItem(o,!1)}},".basket__elements",".missing-items__elements");V.renderItems([{name:"Футболка UZcotton мужская",link:"https://www.wildberries.ru/catalog/54192797/detail.aspx",colour:"белый",size:"56",image:"./images/t-shirt.png",stock:"Коледино WB",provider:{name:"ООО Вайлдберриз",ogrn:"1067746062449",adress:"142181, Московская область, д Коледино, тер. Индустриальный Парк Коледино, д. 6 стр. 1"},oldPrice:1051,newPrice:522,currency:"сом",remainder:"2",inStock:!0},{name:"Силиконовый чехол кардхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",link:"https://www.wildberries.ru/catalog/137598338/detail.aspx",colour:"прозрачный",image:"./images/iphone-case.png",stock:"Коледино WB",provider:{name:"OOO Мегапрофстиль",ogrn:"5167746237148",adress:"129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"},oldPrice:11500,newPrice:10350,currency:"сом",inStock:!0},{name:"Карандаши цветные Faber-Castell 'Замок', набор 24 цвета, заточенные, шестигранные, Faber-Castell",link:"https://www.wildberries.ru/catalog/3544425/detail.aspx",image:"./images/colour-pencils.png",stock:"Коледино WB",provider:{name:"ООО Вайлдберриз",ogrn:"1067746062449",adress:"142181, Московская область, д Коледино, тер. Индустриальный Парк Коледино, д. 6 стр. 1"},oldPrice:475,newPrice:247,currency:"сом",remainder:"2",inStock:!0},{name:"Футболка UZcotton мужская",link:"https://www.wildberries.ru/catalog/54192797/detail.aspx",colour:"белый",size:"56",image:"./images/t-shirt.png",stock:"Коледино WB",provider:{name:"ООО Вайлдберриз",ogrn:"1067746062449",adress:"142181, Московская область, д Коледино, тер. Индустриальный Парк Коледино, д. 6 стр. 1"},oldPrice:1051,newPrice:522,currency:"сом",remainder:"2",inStock:!1},{name:"Силиконовый чехол кардхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",link:"https://www.wildberries.ru/catalog/137598338/detail.aspx",colour:"прозрачный",image:"./images/iphone-case.png",stock:"Коледино WB",provider:{name:"OOO Мегапрофстиль",ogrn:"5167746237148",adress:"129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"},oldPrice:11500,newPrice:10350,currency:"сом",inStock:!1},{name:"Карандаши цветные Faber-Castell 'Замок', набор 24 цвета, заточенные, шестигранные, Faber-Castell",link:"https://www.wildberries.ru/catalog/3544425/detail.aspx",image:"./images/colour-pencils.png",stock:"Коледино WB",provider:{name:"ООО Вайлдберриз",ogrn:"1067746062449",adress:"142181, Московская область, д Коледино, тер. Индустриальный Парк Коледино, д. 6 стр. 1"},oldPrice:950,newPrice:494,currency:"сом",remainder:"2",inStock:!1}]),W(),T(),M(),F(),y.addEventListener("click",(function(){var e=document.querySelector(".basket__elements"),t=Array.from(e.querySelectorAll(".basket__element"));document.getElementById("checkbox1").checked?t.forEach((function(e){e.querySelector(".basket__input").checked=!1})):t.forEach((function(e){e.querySelector(".basket__input").checked=!0})),T()})),b.addEventListener("submit",(function(e){e.preventDefault(),N.enableValidation()})),v.addEventListener("click",(function(){N.enableValidation(),v.disabled||alert("форма отправлена")})),B.addEventListener("click",(function(){var e=document.getElementById("checkbox6"),t=document.querySelector(".total__total-price");e.checked?v.textContent="Заказать":v.textContent="Оплатить ".concat(t.textContent)})),z.addEventListener("click",(function(){var e=document.querySelector(".basket__elements"),t=document.querySelector(".basket__total-goods"),n=document.querySelector(".basket__elements"),i=Array.from(n.querySelectorAll(".basket__element")),o=0,r=0;t.textContent="",i.forEach((function(e){var n=e.querySelector(".basket__element-quantity"),i=e.querySelector(".basket__element-new-price-value");o+=Number(n.value),r+=Number(i.textContent.split(" ").join("")),t.textContent=O(o)+" · "+D(r)+" сом"})),t.classList.toggle("basket__total-goods_hide"),y.classList.toggle("checkbox_hide"),e.classList.toggle("basket__elements_collapsed"),z.classList.toggle("basket__minimize-button_rotated")})),A.addEventListener("click",(function(){document.querySelector(".missing-items__elements").classList.toggle("missing-items__elements_collapsed"),A.classList.toggle("missing-items__minimize-button_rotated")})),f.addEventListener("click",(function(){E.classList.remove("popup__pickup-adress-container_hide"),P.classList.add("popup__courier-adress-container_hide"),f.classList.add("popup__button_active"),k.classList.remove("popup__button_active")})),k.addEventListener("click",(function(){P.classList.remove("popup__courier-adress-container_hide"),E.classList.add("popup__pickup-adress-container_hide"),k.classList.add("popup__button_active"),f.classList.remove("popup__button_active")})),S.addEventListener("click",(function(){j.close()})),g.addEventListener("click",(function(){I.close()})),C.addEventListener("click",(function(){j.open()})),q.addEventListener("click",(function(){j.open()})),w.addEventListener("click",(function(){I.open()})),x.addEventListener("click",(function(){I.open()})),L.forEach((function(e){e.addEventListener("click",(function(){var t=e.parentElement;t.querySelector(".popup__input").checked?alert("Вы не можете удалить выбранный адрес"):t.remove()}))}))})();