import {getAutocompleteInstanse, getDatePickerInstance} from '../plugins/materialaze';

class FormUI {
    constructor(autoCompleteInstance, datePickerInstance) {
        this._form = document.forms['locationControls'];
        this.origin = document.getElementById('autocomplete-origin');
        this.destination = document.getElementById('autocomplete-destination');
        this.depart = document.getElementById('datepicker-depart');
        this.return = document.getElementById('datepicker-return');
        this.originAutocomplete = autoCompleteInstance(this.origin);
        this.destinationAutocomplete = autoCompleteInstance(this.destination);
        this.departDatePicker = datePickerInstance(this.depart);
        this.returnDatePicker = datePickerInstance(this.return);

    }

    get form() {
        return this.$form;
    }

    setAutocompleteData(data) {
        this.originAutocomplete.updateData(data);
        this.destinationAutocomplete.updateData(data);
    }
}

const formUI = new FormUI(getAutocompleteInstanse, getDatePickerInstance);

export default formUI;