import '../css/style.css';
import './plugins';
import locations from "./store/locations";
import formUI from './views/form';


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
        const origin = formUI.originValue;
        const destination = formUI.destinationValue;
        const depart_date = formUI.departDateValue;
        const return_date = formUI.returnDateValue;

        console.log(origin, destination, depart_date, return_date);
    }
})