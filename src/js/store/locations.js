import api from '../services/apiService';

class Locations {
    constructor(api) {
        this.api = api;
        this.countries = null;
        this.cities = null;
        this.shortCitiesList = null;
        this.airlines = null;

    }
    async init() {
        const response = await Promise.all([
            this.api.countries(),
            this.api.cities(),
            this.api.airlines(),
        ]);

        const [counrties, cities, airlines] = response;
        this.countries = this.serializeCountries(counrties);
        this.cities = this.serializeCities(cities);
        this.shortCitiesList = this.createShortCitiesList(this.cities);
        this.airlines = this.serializeAirlines(airlines);
        console.log(this.cities);
        return response;

    }

    getCityCodeByKey(key) {
       const city = Object.values(this.cities).find((item) => item.full_name === key); 
       return city.code;
    }

    getCityNameByCode(code) {
        return this.cities[code].name;
    }

    getAirlineNameByCode(code) {
        return this.airlines[code].name ? this.airlines[code].name : '';
    }

    //  getAirlinesLogobyCode(code) {
    //    return this.airlines[code] ? this.airlines[code].logo : '';
    // }

    createShortCitiesList(cities) {
        // {'City, Country' : null }
        // Object.entries => [key, value]
        return Object.entries(cities).reduce((acc, [, city]) => {
            acc[city.full_name] = null;
            return acc;
        }, {})
    }

    serializeCountries(countries) {
        // {'Country code': {...}}
        return countries.reduce((acc, country) => {
            acc[country.code] = country;
            return acc;
        }, {});
    }

    serializeCities(cities) {
        // {'City name, Country name' : {...}}
        return cities.reduce((acc, city) => {
            const country_name = this.getCountryNameByCode(city.country_code);
            city.name = city.name || city.name_translations.en;
            const city_name = city.name || city.name_translations.en;
            const full_name = `${city_name},${country_name}`;
            acc[city.code] = {
                ...city,
                country_name,
                full_name,
            };
            return acc;
        }, {})
    }

    serializeAirlines(airlines) {
        return airlines.reduce((acc, item) => {
            // item.logo = `http://pics.avs.io/200/200/${item.code}.png`;
            item.name = item.name || item.name_translations.en;
            acc[item.code] = item;
            return acc;
        }, {});
    }

    getCountryNameByCode(code) {
        return this.countries[code].name;
    }

    async fetchTickets(params) {
        const response = await this.api.prices(params);
        console.log(response);
    }
}

const locations = new Locations(api);

export default locations;

