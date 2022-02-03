import axios from 'axios';
import config from '../config/apiConfig';

/**
 * Endpoints of our server:
 * '/countries' - get array of availible countries
 * '/cities' - get array of availible cities
 * 'prices/cheap' - get array availible flights'
 */

class Api {
    constructor(config) {
        this.url = config.url;
    }

    // method get all countries from server
    async countries() {
        try {
            const response = await axios.get(`${this.url}/countries`);
            return response.data;
        } catch (err) {
            console.log(err);
            return Promise.reject(err);
        }
    }

    // method get all cities from server
    async cities() {
        try {
            const response = await axios.get(`${this.url}/cities`);
            return response.data;
        } catch (err) {
            console.log(err);
            return Promise.reject(err);
        }
    }

    //method get all flights from server
    async prices(params) {
        try {
            const response = await axios.get(`${this.url}/prices/cheap`, {
                params,
            });
            return response.data;
        } catch (err) {
            console.log(err);
            return Promise.reject(err);
        }
    }
    
    //method get list of all airlines 
    async airlines(params) {
        try {
            const response = await axios.get(`${this.url}/airlines`, {
                params,
            });
            return response.data;
        } catch (err) {
            console.log(err);
            return Promise.reject(err);
        }
    }
}

// Create instance of Api
const api = new Api(config);

export default api;