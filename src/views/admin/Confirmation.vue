<template>
    <div class="profile-page">
        <section class="section section-shaped section-lg my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4"
                style="background:black;"
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="container pt-lg-md">
                <div class="row justify-content-center">
                    <div class="col-xl-12 order-xl-1">
                        <div class="card shadow bg-secondary">
                            <div class="card-header">
                                <div class="border-0">
                                    <div class="row align-items-center">
                                        <div class="col-8">
                                            <h3 class="mb-0">Admin</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="nav-wrapper">
                                    <ul class="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-icons-text" role="tablist">
                                        <li class="nav-item">
                                            <button @click="toggleCategory(0)" class="btn btn-warning my-1">{{category[0]}}</button>
                                        </li>
                                        <li class="nav-item">
                                            <button @click="toggleCategory(1)" class="btn btn-success my-1">{{category[1]}}</button>
                                        </li>
                                        <li class="nav-item">
                                            <button @click="toggleCategory(2)" class="btn btn-danger my-1">{{category[2]}}</button>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card shadow">
                                    <div class="card-body">
                                        <div class="table-responsive">

                                            <!-- Modal User Details -->
                                            <div tabindex="-1" role="dialog" v-bind:class="showUserDetails" style="">
                                                <div class="modal-dialog modal-dialog-centered">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h6 id="modal-title-default" class="modal-title">{{activeUser.Name}}</h6>
                                                            <button @click="toggleUserDetails(activeUser)" type="button" data-dismiss="modal" aria-label="Close" class="close"><span>×</span></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <table class="table tablesorter table align-items-center table-flush">
                                                                <thead class="thead-light">
                                                                    <tr>
                                                                        <th>Field</th>
                                                                        <th>Value</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="list">
                                                                    <tr v-bind:key="index" v-if="field != 'Status' && field != 'Password' && field != 'Username'" v-for="(value, field, index) in activeUser">
                                                                        <th scope="row">
                                                                            <div class="media align-items-center">
                                                                                <div class="media-body"><span class="name mb-0 text-sm">{{field}}</span></div>
                                                                            </div>
                                                                        </th>
                                                                        <td>
                                                                            <div class="media align-items-center">
                                                                                <div class="media-body"><span class="name mb-0 text-sm">{{value}}</span></div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button @click="toggleUserDetails(activeUser)" type="button" class="btn btn-neutral">
                                                                Close
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Table Users -->
                                            <table class="table tablesorter table align-items-center table-flush">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th>Users</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="list">
                                                    <tr v-bind:key="user.Username" v-for="user in users" v-if="user.Status == activeCategory">
                                                        <th scope="row">
                                                            <div class="media align-items-center">
                                                                <div class="media-body"><span class="name mb-0 text-sm">{{user.Name}}</span></div>
                                                            </div>
                                                        </th>
                                                        <td v-if="user.Status == 0">
                                                            <button @click="toggleUserDetails(user)" class="btn btn-info my-1">Details</button>
                                                            <button @click="rejectUser(user)" class="btn btn-danger my-1">Reject</button>
                                                            <button @click="validateUser(user)" class="btn btn-success my-1">Verify</button>
                                                        </td>
                                                        <td v-else-if="user.Status == 1">
                                                            <span class="badge badge-dot mr-4 badge-success"><i class="bg-success"></i><span class="status">Verified</span></span>
                                                        </td>
                                                        <td v-else-if="user.Status == 2">
                                                            <span class="badge badge-dot mr-4 badge-danger"><i class="bg-danger"></i><span class="status">Rejected</span></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import {mapActions, mapGetters, mapState} from 'vuex';

export default {
    created() {
        this.$store.dispatch('getAllUsers')
        .then((response) => {
            this.users = response;
        })
        .catch(error => {
            this.users = [];
        })
        .finally(() => {
            this.isFetchingUsers = false;
        })
    },

    data(){
        return {
            isFetchingUsers: false,
            isFetchingValidation: false,
            category: ['Pending', 'Verified', 'Rejected'],
            activeCategory: 0,
            activeUser: {},
            users: [],
            targetedUser: {},
            showUserDetails: "modal fade show d-none"
        }
    },

    methods: mapActions({
        toggleCategory(dispatch, index) {
            this.activeCategory = index;
        },

        toggleUserDetails(dispatch, user) {
            this.showUserDetails = this.showUserDetails == "modal fade show d-none" ? "modal fade show d-block" : "modal fade show d-none";
            this.activeUser = user;
        },

        setTargetUser(dispatch, user) {
            for(var key in user){
                this.targetedUser[key.toLowerCase()] = user[key];
            }
        },

        validateUser(dispatch, user){
            this.setTargetUser(user);
            this.isFetchingValidation = true;
            const {targetedUser} = this;
            dispatch('validateUser', {targetedUser})
            .then((response) => {
                alert("User is validated")
                this.users = this.users.filter(user => user.Username != response.Username);
                this.users.push(response);
            })
            .catch(error => {
                alert("Oops, something wrong! Please try again")
            })
            .finally(() => {
                this.isFetchingValidation = false;
            })
        },

        rejectUser(dispatch, user){
            this.setTargetUser(user);
            this.isFetchingValidation = true;
            const {targetedUser} = this;
            dispatch('rejectUser', {targetedUser})
            .then((response) => {
                alert("User is rejected")
                this.users = this.users.filter(user => user.Username != response.Username);
                this.users.push(response);
            })
            .catch(error => {
                alert("Oops, something wrong! Please try again")
            })
            .finally(() => {
                this.isFetchingValidation = false;
            })
        },
    }),

    computed: {
        ...mapGetters([
            'currentAdmin'
        ]),
        ...mapState([
            'admin'
        ])
    },
};
</script>
<style>
</style>
