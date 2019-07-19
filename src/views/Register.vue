<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1"
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
                <div class="col-lg-8">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Sign Up</small>
                            </div>
                            <form role="form" @submit="register">
                                <div class="form-group mb-3 input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="ni ni-circle-08"></i>
                                        </span>
                                    </div>
                                    <input v-model="user.name" aria-describedby="addon-right addon-left" placeholder="Name" class="form-control" required>
                                </div>
                                <div class="form-group mb-3 input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="ni ni-single-02"></i>
                                        </span>
                                    </div>
                                    <input v-model="user.username" aria-describedby="addon-right addon-left" placeholder="Username" class="form-control" required>
                                </div>
                                <div class="form-group mb-3 input-group input-group-alternative">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="ni ni-email-83"></i>
                                    </span>
                                </div>
                                <input v-model="user.email" aria-describedby="addon-right addon-left" placeholder="Email" class="form-control" required>
                                </div>
                                <div class="form-group input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="ni ni-lock-circle-open"></i>
                                        </span>
                                    </div>
                                    <input v-model="user.password" aria-describedby="addon-right addon-left" type="password" placeholder="Password" class="form-control" required>
                                </div>
                                <label>Birthdate</label>
                                <base-input alternative addon-left-icon="ni ni-calendar-grid-58">
                                    <flat-picker slot-scope="{focus, blur}"
                                                @on-open="focus"
                                                @on-close="blur"
                                                :config="{allowInput: true}"
                                                class="form-control datepicker"
                                                v-model="user.birthdate">
                                    </flat-picker>
                                </base-input>
                                <div class="form-group mb-3 input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="ni ni-pin-3"></i>
                                        </span>
                                    </div>
                                    <input v-model="user.birthplace" aria-describedby="addon-right addon-left" placeholder="Birthplace" class="form-control" required>
                                </div>
                                <div class="form-group mb-3 input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="ni ni-mobile-button"></i>
                                        </span>
                                    </div>
                                    <input v-model="user.phone" aria-describedby="addon-right addon-left" placeholder="Phone" class="form-control" required>
                                </div>
                                <div class="form-group mb-3 input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="ni ni-map-big"></i>
                                        </span>
                                    </div>
                                    <input v-model="user.address" aria-describedby="addon-right addon-left" placeholder="Address" class="form-control" required>
                                </div>
                                <div class="form-group mb-3 input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="ni ni-hat-3"></i>
                                        </span>
                                    </div>
                                    <input v-model="user.education" aria-describedby="addon-right addon-left" placeholder="Education" class="form-control" required>
                                </div>
                                <div class="form-group mb-3 input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="ni ni-trophy"></i>
                                        </span>
                                    </div>
                                    <input v-model="user.expprev" aria-describedby="addon-right addon-left" placeholder="Experience" class="form-control">
                                </div>
                                <div class="form-group mb-3 input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="ni ni-favourite-28"></i>
                                        </span>
                                    </div>
                                    <input v-model="user.motivation" aria-describedby="addon-right addon-left" placeholder="Motivation" class="form-control">
                                </div>
                                <div class="form-group mb-3 input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="ni ni-circle-08"></i>
                                        </span>
                                    </div>
                                    <input v-model="user.nameparent" aria-describedby="addon-right addon-left" placeholder="Parent's Name" class="form-control" required>
                                </div>
                                <div class="form-group mb-3 input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="ni ni-mobile-button"></i>
                                        </span>
                                    </div>
                                    <input v-model="user.phoneparent" aria-describedby="addon-right addon-left" placeholder="Parent's Phone" class="form-control" required>
                                </div>
                                <div class="form-group mb-3 input-group input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="ni ni-map-big"></i>
                                        </span>
                                    </div>
                                    <input v-model="user.addressparent" aria-describedby="addon-right addon-left" placeholder="Parent's Address" class="form-control" required>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn my-4 btn-primary"
                                        style="background:grey; border-color:grey;"
                                    >Create account request</button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import {mapActions} from 'vuex';
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { constants } from 'crypto';

export default {
    components: {flatPicker},
    data() {
        return {
            user: {
                name: "",
                username: "",
                email: "",
                password: "",
                birthdate: "2019-07-17",
                birthplace: "",
                phone: "",
                education: "",
                expprev: "",
                motivation: "",
                nameparent: "",
                phoneparent: "",
                addressparent: "",
                status: 0
            }
        };
    },
    methods: mapActions({
        register(dispatch, e){
            e.preventDefault();
            const {user} = this;
            dispatch('register', {
                user
            })
        }
    })
};
</script>
<style>
</style>
