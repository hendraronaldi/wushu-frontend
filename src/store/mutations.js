import Vue from 'vue';

export default {
    editUser(state, user) {
        editUser(state, user);
    },

    login(state, user) {
        login(state, user);
    },

    register(state, user) {
        register(state, user);
    },

    logout(state, user) {
        logout(state, user);
    },

    adminLogin(state, user) {
        adminLogin(state, user);
    },

    adminLogout(state, user) {
        adminLogout(state, user);
    }
}

function editUser(state, user) {
    Vue.set(state, 'userProfile', user);
    localStorage.setItem('userProfile', JSON.stringify(user));
}

function login(state, user) {
    Vue.set(state, 'userProfile', user);
    localStorage.setItem('userProfile', JSON.stringify(user));
}

function register(state, user) {
    Vue.set(state, 'userProfile', user);
    localStorage.setItem('userProfile', JSON.stringify(user));
}

function logout(state) {
    Vue.set(state, 'userProfile', null);
    localStorage.setItem('userProfile', null);
}

function adminLogin(state, user) {
    Vue.set(state, 'admin', user);
    localStorage.setItem('admin', JSON.stringify(user));
} 

function adminLogout(state) {
    Vue.set(state, 'admin', null);
    localStorage.setItem('admin', null);
}