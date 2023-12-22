import Card from "../components/Card.js";
import MissingGood from "../components/MissingGood.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import {cards} from "../utils/initialCards.js"
import {
  chooseAllCards,
  inputFormBlocks,
  recipientForm,
  totalSubmitButton,
  buttonPickup,
  buttonCourier,
  closePopupDeliveryButton,
  closePopupPaymentButton,
  deliveryChangeButton,
  deliveryChangeButtonTotal,
  paymentChangeButton,
  paymentChangeButtonTotal,
  deleteButtons,
  pickupAdress,
  courierAdress,
  basketMinimizeButton,
  missingGoodsMinimizeButton,
  paymentLabel
} from "../utils/constants.js"

const validation = new FormValidator(recipientForm);

const deliveryPopup = new Popup(".popup__delivery-method");
const paymentPopup = new Popup(".popup__payment-method");

// Слушатель кнопки "Выбрать" в попапе выбора способа доставки
deliveryPopup.submitButton().addEventListener("click", () => {
  const deliveryMethod = document.querySelector(".delivery__method");
  const deliveryMethodTotal = document.querySelector(".total__delivery-title");
  const deliveryAdress = document.querySelector(".delivery__adress-name");
  const totalDeliveryAdress = document.querySelector(".total__delivery-adress");
  const deliveryTimeContainer = document.querySelector(".delivery__time-container");
  if(buttonPickup.classList.contains("popup__button_active")){
    deliveryMethod.textContent = "Пункт выдачи";
    deliveryMethodTotal.textContent = "Доставка в пункт выдачи";
    deliveryTimeContainer.removeAttribute("style");
    const inputs = Array.from(pickupAdress.querySelectorAll(".popup__input"));
    inputs.forEach(input => {
      if(input.checked){
        const label = input.nextElementSibling;
        deliveryAdress.textContent = label.textContent;
        totalDeliveryAdress.textContent = label.textContent;
      }
    })
  } else {
    deliveryMethod.textContent = "Доставит курьер";
    deliveryMethodTotal.textContent = "Доставит курьер";
    deliveryTimeContainer.setAttribute("style","display:none");
    const inputs = Array.from(courierAdress.querySelectorAll(".popup__input"));
    inputs.forEach(input => {
      if(input.checked){
        const label = input.nextElementSibling;
        deliveryAdress.textContent = label.textContent;
        totalDeliveryAdress.textContent = label.textContent;
      }
    })
  }
  deliveryPopup.close();
})

// Слушатель кнопки "Выбрать" в попапе выбора карты
paymentPopup.submitButton().addEventListener("click", () => {
  const inputs = paymentPopup.thisPopup().querySelectorAll(".popup__input");
  const cardNumber = document.querySelector(".payment__card-number");
  const cardType = document.getElementById("card-icon");
  const totalCardType = document.getElementById("card-icon-total");
  inputs.forEach(input => {
    if(input.checked){
      const label = input.nextElementSibling;
      cardNumber.textContent = label.textContent;
      cardType.className = label.children[0].className;
      totalCardType.className = label.children[0].className;
    }
  })
  paymentPopup.close();
})

// Функция разбития чисел на части потри цифры
function splitNumber(number) {
  const numberString = number.toString();
  const splitted = [];
  let group = '';
  let counter = 0;
  
  for (let i = numberString.length - 1; i >= 0; i--) {
    group = numberString[i] + group;
    counter++;
    
    if (counter === 3 && i !== 0) {
      splitted.unshift(group);
      group = '';
      counter = 0;
    }
  }
  
  splitted.unshift(group);
  
  const result = splitted.join(' ');
  
  return result;
}

// Анимация плейсхолдеров в форме с данными покупателя
inputFormBlocks.forEach(item => {
  const input = item.querySelector(".recipient__input");
  const inputLabel = item.querySelector(".recipient__input-label");

  input.addEventListener("focus", function() {
    inputLabel.style.transform = "translateY(-180%)";
    inputLabel.style.fontSize = "0.8em";
  });
  
  input.addEventListener("blur", function() {
    if (!input.value) {
      inputLabel.style.transform = "translateY(-50%)";
      inputLabel.style.fontSize = "1em";
    }
  });
  
  if (input.value) {
    inputLabel.style.transform = "translateY(-180%)";
    inputLabel.style.fontSize = "0.8em";
  }
})

// Функция изменения склония слова "Товар" в зависимости от количества
const declinationGoods = (amount) => {
  const declinationOptions = ["товар", "товара", "товаров"];

  function declination(num, options) {
      num = Math.abs(num);
      if (num % 10 === 1 && num % 100 !== 11) {
          return options[0];
      } else if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
          return options[1];
      } else {
          return options[2];
      }
  }

  return amount + " " + declination(amount, declinationOptions);
}


// Функция изменение данных цены в элементе "Итого"
const changePrice = () => {
  const cardList = document.querySelector(".basket__elements");
  const cardsArr = Array.from(cardList.querySelectorAll(".basket__element"));
  const totalPrice = document.querySelector(".total__total-price");
  const totalOldPrice = document.querySelector(".total__count-line-price");
  const totalGoods = document.querySelector(".total__count-line-goods");
  const totalDiscount = document.querySelector(".total__discount-line-sum");
  totalPrice.textContent = "0 сом";
  totalGoods.textContent = "0 товаров";
  totalOldPrice.textContent = "0 сом";
  totalDiscount.textContent = "0 сом";
  cardsArr.forEach(item => {
   const newPrice = item.querySelector(".basket__element-new-price-value");
   const oldPrice = item.querySelector(".basket__element-old-price");
   const counter = item.querySelector(".basket__element-quantity");
   const checkbox = item.querySelector(".basket__input");
   if(checkbox.checked){
    totalPrice.textContent = splitNumber(Number(totalPrice.textContent.split(" ").join("").slice(0, -3)) + Number(newPrice.textContent.split(" ").join(""))) + " сом";
    totalGoods.textContent = declinationGoods(Number(totalGoods.textContent.split(" ")[0]) + Number(counter.value));
    totalOldPrice.textContent = splitNumber(Number(totalOldPrice.textContent.split(" ").join("").slice(0, -3)) + Number(oldPrice.textContent.split(" ").join("").slice(0, -3))) + " сом";
    totalDiscount.textContent = "−" + splitNumber((Number(totalOldPrice.textContent.split(" ").join("").slice(0, -3)) - Number(totalPrice.textContent.split(" ").join("").slice(0, -3)))) + " сом";
   }
  });
  const input = document.getElementById("checkbox6");
  if(input.checked){
    totalSubmitButton.textContent = `Оплатить ${totalPrice.textContent}`;
  }
 }

// Функция изменения количества товара в корзине на иконках корзины
 const changeAmountGoods = () => {
  const cardList = document.querySelector(".basket__elements");
  const cardsArr = Array.from(cardList.querySelectorAll(".basket__element"));
  const headerBasketCounter = document.querySelector(".header__basket-count");
  const mobileBasketCounter = document.querySelector(".mobile-menu__basket-counter");
  if(cardsArr.length > 0) {
    headerBasketCounter.classList.remove("header__basket-count_hide");
    mobileBasketCounter.classList.remove("mobile-menu__basket-counter_hide");
    headerBasketCounter.textContent = cardsArr.length;
    mobileBasketCounter.textContent = cardsArr.length;
  } else {
    headerBasketCounter.classList.add("header__basket-count_hide");
    mobileBasketCounter.classList.add("mobile-menu__basket-counter_hide");
  }
 }

 const changeAmountFavorites = (action) => {
  const mobileFavoriteCounter = document.querySelector(".mobile-menu__favorite-counter");
  if(action === "add"){
    mobileFavoriteCounter.textContent = Number(mobileFavoriteCounter.textContent) + 1;
  } else if(action === "remove") {
    mobileFavoriteCounter.textContent = Number(mobileFavoriteCounter.textContent) - 1;
  }
  if(mobileFavoriteCounter.textContent === "0") {
    mobileFavoriteCounter.classList.add("mobile-menu__favorite-counter_hide");
  } else {
    mobileFavoriteCounter.classList.remove("mobile-menu__favorite-counter_hide");
  }
 }

// Функция изменения количества отсутствующих товаров
 const changeAmountMissingGoods = () => {
  const cardList = document.querySelector(".missing-items__elements");
  const missingGoodsArr = Array.from(cardList.querySelectorAll(".missing-items__element"));
  const missingGoodsCounter = document.querySelector(".missing-items__title");
  missingGoodsCounter.textContent = `Отсутствуют · ${declinationGoods(missingGoodsArr.length)}`
 }

//  Функция создания карточки товара
const createNewCard = (data) => {
  const card = new Card({
    name: data.name,
    link: data.link,
    colour: data.colour,
    size: data.size,
    image: data.image, 
    stock: data.stock, 
    provider: data.provider, 
    oldPrice: data.oldPrice, 
    newPrice: data.newPrice, 
    currency: data.currency,
    remainder: data.remainder
  }, "#element", changePrice, changeAmountGoods, splitNumber, changeAmountFavorites);
  return card.generateCard();
}

// Функция создания карточки отсутсвующего товара
const createNewMissingGood = (data) => {
  const missingGood = new MissingGood({
    name: data.name,
    link: data.link,
    colour: data.colour,
    size: data.size,
    image: data.image, 
  }, "#element", changeAmountMissingGoods, changeAmountFavorites);
  return missingGood.generateCard();
}

// Функция добавления карточек в соответсвующие блоки
const cardList = new Section ({renderer: (item) => {
  const cardElement = createNewCard(item);
  const missingGoodElement = createNewMissingGood(item);
  if(item.inStock == true){
    cardList.addItem(cardElement, true);
  } else if (item.inStock == false){
    cardList.addItem(missingGoodElement, false);
  }
}}, ".basket__elements", ".missing-items__elements");

// Рендер карточек
cardList.renderItems(cards);
changeAmountGoods();
changePrice();
changeAmountMissingGoods();
changeAmountFavorites();

// Слушатель кнопки "Выбрать все"
chooseAllCards.addEventListener("click", () => {
  const cardList = document.querySelector(".basket__elements");
  const cardsArr = Array.from(cardList.querySelectorAll(".basket__element"));
  const input = document.getElementById("checkbox1");
  if(!input.checked){
    cardsArr.forEach(item => {
      let checkbox = item.querySelector(".basket__input");
      checkbox.checked = true;
    })
  } else {
    cardsArr.forEach(item => {
      let checkbox = item.querySelector(".basket__input");
      checkbox.checked = false;
    })
  }
  changePrice();
})

// Слушатель сабмита формы с данными покупателя
recipientForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  validation.enableValidation();
})

// Слушатель клика по кнопке Оформления заказа
totalSubmitButton.addEventListener("click", () => {
  validation.enableValidation();
  if(!totalSubmitButton.disabled){
    alert("форма отправлена");
  }
})

// Слушатель кнопки "Списать оплату сразу"
paymentLabel.addEventListener("click", () => {
  const input = document.getElementById("checkbox6");
  const price = document.querySelector(".total__total-price");
  if(!input.checked){
    totalSubmitButton.textContent = `Оплатить ${price.textContent}`;
  } else {
    totalSubmitButton.textContent = "Заказать"
  }
})

// Слушатель свертывания блока с товарами
basketMinimizeButton.addEventListener("click", () => {
  const goodsList = document.querySelector(".basket__elements");
  const basketTotalMinimize = document.querySelector(".basket__total-goods");
  const cardList = document.querySelector(".basket__elements");
  const cardsArr = Array.from(cardList.querySelectorAll(".basket__element"));
  let counter = 0;
  let price = 0;
  basketTotalMinimize.textContent = "";
  cardsArr.forEach(card => {
    const goodCounter = card.querySelector(".basket__element-quantity");
    const goodPrice = card.querySelector(".basket__element-new-price-value");
    counter += Number(goodCounter.value);
    price += Number(goodPrice.textContent.split(" ").join(""));
    basketTotalMinimize.textContent = declinationGoods(counter) + " · " + splitNumber(price) + " сом";
  })
  basketTotalMinimize.classList.toggle("basket__total-goods_hide");
  chooseAllCards.classList.toggle("checkbox_hide");
  goodsList.classList.toggle("basket__elements_collapsed");
  basketMinimizeButton.classList.toggle("basket__minimize-button_rotated");
})

// Слушатель свертывания блока с отсутсвующими товарами
missingGoodsMinimizeButton.addEventListener("click", () => {
  const missingGoodsList = document.querySelector(".missing-items__elements");
  missingGoodsList.classList.toggle("missing-items__elements_collapsed");
  missingGoodsMinimizeButton.classList.toggle("missing-items__minimize-button_rotated");
})

// Слушатель кнопки "Пункт выдачи" в попапе доставки
buttonPickup.addEventListener("click", () => {
  pickupAdress.classList.remove("popup__pickup-adress-container_hide");
  courierAdress.classList.add("popup__courier-adress-container_hide");
  buttonPickup.classList.add("popup__button_active");
  buttonCourier.classList.remove("popup__button_active");
})

// Слушатель кнопки "Курьером" в попапе доставки
buttonCourier.addEventListener("click", () => {
  courierAdress.classList.remove("popup__courier-adress-container_hide");
  pickupAdress.classList.add("popup__pickup-adress-container_hide");
  buttonCourier.classList.add("popup__button_active");
  buttonPickup.classList.remove("popup__button_active");
})

// Слушатель кнопки закрытия попапа доставки
closePopupDeliveryButton.addEventListener("click", () => {
  deliveryPopup.close();
})

// Слушатель кнопки закрытия попапа оплаты
closePopupPaymentButton.addEventListener("click", () => {
  paymentPopup.close();
})

// Слушатель кнопки открытия попапа доставки
deliveryChangeButton.addEventListener("click", () => {
  deliveryPopup.open();
})

// Слушатель кнопки открытия попапа доставки
deliveryChangeButtonTotal.addEventListener("click", () => {
  deliveryPopup.open();
})

// Слушатель кнопки открытия попапа оплаты
paymentChangeButton.addEventListener("click", () => {
  paymentPopup.open();
})

// Слушатель кнопки открытия попапа оплаты
paymentChangeButtonTotal.addEventListener("click", () => {
  paymentPopup.open();
})

// Слушатель кнопки удаления адреса в попапе доставки
deleteButtons.forEach(button => {
  button.addEventListener("click", () => {
    const parentBlock = button.parentElement;
    const input = parentBlock.querySelector(".popup__input");
    if(!input.checked){
      parentBlock.remove();
    } else {
      alert("Вы не можете удалить выбранный адрес")
    }
  })
})