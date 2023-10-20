import Card from "./components/Card.js";
import Section from "./components/Section.js";
const chooseAllCards = document.querySelector(".checkbox-label");
const ul = document.querySelector(".basket__elements");
const totalPrice = document.querySelector(".total__total-price");
const cards = [{
  name: "Футболка UZcotton мужская",
  link: "https://www.wildberries.ru/catalog/54192797/detail.aspx",
  colour: "белый",
  size: "56",
  image: "/images/t-shirt.jpg",
  stock: "Коледино WB",
  provider: "ООО Вайлдберриз",
  oldPrice: 1051,
  newPrice: 522,
  remainder: "2"
},{
  name: "Силиконовый чехол кардхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
  link: "https://www.wildberries.ru/catalog/137598338/detail.aspx",
  colour: "прозрачный",
  image: "/images/iphone-case.jpg",
  stock: "Коледино WB",
  provider: "ООО Мегапрофстиль",
  oldPrice: 11500,
  newPrice: 10500
},{
  name: "Карандаши цветные Faber-Castell 'Замок', набор 24 цвета, заточенные, шестигранные, Faber-Castell",
  link: "https://www.wildberries.ru/catalog/3544425/detail.aspx",
  image: "/images/colour-pencils.jpg",
  stock: "Коледино WB",
  provider: "ООО Вайлдберриз",
  oldPrice: 950,
  newPrice: 494,
  remainder: "2"
}]

function declinationGoods(amount) {
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

const changePrice = () => {
  const totalPrice = document.querySelector(".total__total-price");
  const totalOldPrice = document.querySelector(".total__count-line-price");
  const totalGoods = document.querySelector(".total__count-line-goods");
  const totalDiscount = document.querySelector(".total__discount-line-sum");
  const cardList = document.querySelector(".basket__elements");
  const cardsArr = Array.from(cardList.querySelectorAll(".basket__element"));
  totalPrice.textContent = "0 сом";
  totalGoods.textContent = "0 товаров";
  totalOldPrice.textContent = "0 сом";
  totalDiscount.textContent = "0 сом";
  cardsArr.forEach(item => {
   const newPrice = item.querySelector(".basket__element-new-price");
   const oldPrice = item.querySelector(".basket__element-old-price");
   const counter = item.querySelector(".basket__element-quantity");
   const checkbox = item.querySelector(".basket__input");
   if(checkbox.checked){
    totalPrice.textContent = Number(totalPrice.textContent.slice(0, -4)) + Number(newPrice.textContent.slice(0, -3)) + " сом";
    totalGoods.textContent = declinationGoods(Number(totalGoods.textContent.split(" ")[0]) + Number(counter.value));
    totalOldPrice.textContent = Number(totalOldPrice.textContent.slice(0, -4)) + Number(oldPrice.textContent.slice(0, -3)) + " сом";
    totalDiscount.textContent = "-" + (Number(totalDiscount.textContent.slice(1, -4)) + (Number(oldPrice.textContent.slice(0, -3)) - Number(newPrice.textContent.slice(0, -3))) + " сом");
   }
  });
 }

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
    remainder: data.remainder
  }, "#element", changePrice );
  return card.generateCard();
}

const cardList = new Section ({renderer: (item) => {
  const cardElement = createNewCard(item);
  cardList.addItem(cardElement);
}}, ".basket__elements");

cardList.renderItems(cards);

const cardsArr = Array.from(ul.querySelectorAll(".basket__element"));

chooseAllCards.addEventListener("click", () => {
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