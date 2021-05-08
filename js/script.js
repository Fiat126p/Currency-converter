let amountElement = document.querySelector(".js-form__amount")
let currencyElement = document.querySelector(".js-form__currency")
let formElement = document.querySelector(".js-form")
let cashElement = document.querySelector(".js-form__cash")


formElement.addEventListener("submit", (event) => {
event.preventDefault();

let amount = amountElement.value;
let currency = currencyElement.value;

let cash = amount / currency

cashElement.innerText = cash.toFixed(2)

})