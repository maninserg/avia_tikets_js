
class CurrencyUI {
    constructor() {
        this.currency = document.getElementById('currency');
        console.log(this.currency.value);
    }

    get currencyValue() {
        return this.currency.value;
    }
}

const currencyUI = new CurrencyUI();

export default currencyUI;