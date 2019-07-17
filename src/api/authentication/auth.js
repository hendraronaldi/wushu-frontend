import axios from 'axios';
import {BASE_URL} from '../config/config.js';

export function login(user) {
    const url = BASE_URL + "/login";
    const data;
    axios.post(url, user)
        .then(response => 
            data = response.response)
        .catch(e => console.log(e))
        .finally(() =>{
            return data;
        });
}

export function register(user) {
    const url = BASE_URL + "/login";
    const data;
    axios.post(url, user)
        .then(response => 
            data = response.response)
        .catch(e => console.log(e))
        .finally(() =>{
            return data;
        });
}