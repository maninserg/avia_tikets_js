import '../css/style.css';
import './plugins';
import locations from "./store/locations";
import formUI from './views/form';
import currencyUI from './views/currency';


document.addEventListener('DOMContentLoaded', () => {

    initApp();
    const form = formUI.form;

    // Events
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        onFormSubmit();
    })
    
    // Handlers, start's funcns
    async function initApp() {
        await locations.init();
        formUI.setAutocompleteData(locations.shortCitiesList);
    }

    async function onFormSubmit() {
        // get data from form's inputs
        const origin = locations.getCityCodeByKey(formUI.originValue);
        const destination = locations.getCityCodeByKey(formUI.destinationValue);
        const depart_date = formUI.departDateValue;
        const return_date = formUI.returnDateValue;
        const currency = currencyUI.currencyValue;
        
        // return CODE, CODE, 2019-09, 2019-10
        console.log(origin, destination, depart_date, return_date, currency);

        await locations.fetchTickets({
            origin,
            destination,
            depart_date,
            return_date,
            currency,
        })
    }
})