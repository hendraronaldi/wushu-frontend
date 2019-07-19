import * as api from '../api/authentication/auth.js';

export const login = ({commit}, payload) => {
    commit('login', api.login(payload))
}

export const register = ({commit}, payload) => {
    commit('register', api.register(payload))
}