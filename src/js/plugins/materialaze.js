import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


// Init selects
const select = document.querySelectorAll('select');
M.FormSelect.init(select);

export function getSelectInstance(elem) {
    return M.FormSelect.getInstance(elem);
}


// Init autocomplites
const autocompletes = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocompletes, {
    data: {
        'Apple': null,
        'Microsoft': null,
        'Google': 'https://placehold.it/250x250',
    },
});

export function getAutocompleteInstanse(elem) {
    return M.Autocomplete.getInstance(elem);
}


// Init datepickers
const datepickers = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepickers, {
    showClearBtn: true,
    format: 'yyyy-mm',
});

export function getDatePickerInstance(elem) {
    return M.Datepicker.getInstance(elem);
}