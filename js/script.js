{
    const calculateResult = () => {
        const amountElement = document.querySelector(".js-form__amount")
        const cashElement = document.querySelector(".js-form__cash")
        const currencyElement = document.querySelector(".js-form__currency")
        const amount = amountElement.value;
        const currency = currencyElement.value;
        const cash = amount / currency
        cashElement.innerText = cash.toFixed(2)
    }

    const formElement = document.querySelector(".js-form")

const init = () => {
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        calculateResult();
    })
}
init();
}