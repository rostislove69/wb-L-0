const chooseAllCards = document.querySelector(".checkbox-label");
const inputFormBlocks = Array.from(document.querySelectorAll(".recipient__input-block"));
const recipientForm = document.querySelector(".recipient__form");
const totalSubmitButton = document.querySelector(".total__button");
const buttonPickup = document.querySelector(".popup__pickup-button");
const buttonCourier = document.querySelector(".popup__courier-button");
const closePopupDeliveryButton = document.querySelector(".close-delivery");
const closePopupPaymentButton = document.querySelector(".close-payment");
const deliveryChangeButton = document.querySelector(".delivery__change-button");
const deliveryChangeButtonTotal = document.querySelector(".total__delivery-change");
const paymentChangeButton = document.querySelector(".payment__change-button");
const paymentChangeButtonTotal = document.querySelector(".total__payment-change");
const deleteButtons = Array.from(document.querySelectorAll(".popup__delete-adress-button"));
const pickupAdress = document.querySelector(".popup__pickup-adress-container");
const courierAdress = document.querySelector(".popup__courier-adress-container");
const basketMinimizeButton = document.querySelector(".basket__minimize-button");
const missingGoodsMinimizeButton = document.querySelector(".missing-items__minimize-button");
const paymentLabel = document.querySelector(".total__payment-label");

export {
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
}