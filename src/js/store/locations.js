import api from '../services/apiService';

class Locations {
    constructor(api) {
        this.api = api;
        this.countries = null;
        this.cities = null;
    }
    async init() {
        const response = await Promise.all([
            this.api.countries(),
            this.api.cities()
        ]);
        const [counrties, cities] = response;
        this.countries = this.serialazeCountries(counrties);
        this.cities = cities;
        return response;
    }
    
    serialazeCountries(countries) {
        // {'Country code': {...}}
        return countries.reduce((acc, country) => {
            acc[country.code] = country;
            return acc;
        }, {});
    }

    getCitiesByCountryCode(code) {
        return this.cities.filter(city => city.country_code === code);
    }
}

const locations = new Locations(api);

export default locations;

