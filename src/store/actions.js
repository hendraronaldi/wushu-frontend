import axios from 'axios';
import {BASE_URL} from '../api/config/config.js';

export const login = async ({commit}, payload) => {
    try {
        const response = await axios.post(BASE_URL + "/login", payload.user)
        commit('login', response.data)
        return Promise.resolve(response.data)
    } catch (e) {
        return Promise.reject(e)
    }
}

export const register = async ({commit}, payload) => {
    try {
        const response = await axios.post(BASE_URL + "/register", payload.user)
        commit('register', response.data)
        return Promise.resolve(response.data)
    } catch (e) {
        return Promise.reject(e)
    }
}

export const logout = ({commit}, payload) => {
    // try {
    //     const response = await axios.post(BASE_URL + "/logout", payload.user)
    //     commit('register', response.data.response)
    //     return Promise.resolve(response.data.response)
    // } catch (e) {
    //     return Promise.reject(e)
    // }
    commit('logout')
    return true
}