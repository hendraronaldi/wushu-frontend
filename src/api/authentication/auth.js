import axios from 'axios';
import {BASE_URL} from '../config/config.js';

export function login(payload) {
    const {user} = payload;
    const url = BASE_URL + "/login";
    let data;
    axios.post(url, user)
        .then((response) => {
            data = response.response;
        })
        .catch(e => console.log(e))
        .finally(() =>{
            return data;
        });
}

export function register(payload) {
    const {user} = payload;
    const url = BASE_URL + "/register";
    let data;
    axios.post(url, user)
        .then((response) => {
            data = response.response;
        })
        .catch(e => console.log(e))
        .finally(() =>{
            return data;
        });
}