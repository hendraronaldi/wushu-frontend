import Vue from 'vue';

export default {
    login(state, user) {
        login(state, user);
    },

    register(state, user) {
        register(state, user);
    },

    logout(state, user) {
        logout(state, user);
    }
}

function login(state, user) {
    Vue.set(state, 'userLogged', true);
    Vue.set(state, 'userProfile', user);
}

function register(state, user) {
    Vue.set(state, 'userLogged', true);
    Vue.set(state, 'userProfile', user);
}

function logout(state) {
    Vue.set(state, 'userLogged', false);
    Vue.set(state, 'userProfile', null);
}