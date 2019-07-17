import * as api from '../api';

export const login = ({commit}, payload) => {
    api.login(payload => {
        commit('login', payload.data)
    })
}

export const register = ({commit}, payload) => {
    api.register(payload => {
        commit('register', payload.data)
    })
}