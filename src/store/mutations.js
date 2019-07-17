import Vue from 'vue';

export default {
    login(state, user) {
        login(state, user);
    },

    register(state, user) {
        register(state, user);
    }
}

function login(state, user) {
    Vue.set(state, 'userLogged', true);
    Vue.set(state, 'userProfile', user);
}

function register(state, user) {
    Vue.set(state, 'userLogged', true);
    Vue.set(state, 'userProfile', user);
    Vue.set(state, 'newUser', user);
}