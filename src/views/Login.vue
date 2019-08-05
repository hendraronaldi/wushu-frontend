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

        <template>
            <div v-show="fail" class="alert alert-danger fade show" role="alert">
                Wrong email or password, please try again
            </div>
        </template>

        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Sign in</small>
                            </div>
                            <form role="form" @submit="login">
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
                                <div class="text-center">
                                    <button v-if="!isFetching" type="submit" class="btn my-4 btn-primary"
                                        style="background:grey; border-color:grey;"
                                    >Login</button>
                                    <button v-else type="button" class="btn my-4 btn-primary"
                                        style="background:grey; border-color:grey;"
                                        disabled
                                    >Logging in...</button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <!-- <div class="col-6">
                            <a href="#" class="text-light">
                                <small>Forgot password?</small>
                            </a>
                        </div> -->
                        <div class="col-12 text-right">
                            <a href="/#/register" class="text-light">
                                <small>Create new account</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import {mapActions} from 'vuex';

export default {
    data() {
        return {
            user: {
                email: "",
                password: ""
            },
            isFetching: false,
            fail: false
        };
    },
    methods: mapActions({
        login(dispatch, e){
            e.preventDefault();
            const {user} = this;
            this.isFetching = true;
            dispatch('login', {user})
            .then((response) => {
                this.$router.push("/profile")
            })
            .catch(error => {
                this.fail = true;
            })
            .finally(() => {
                if(this.fail) {
                    setTimeout(function(){
                        this.fail = false;
                    }, 3000);
                }

                this.isFetching = false;
            })
        }
    })

};
</script>
<style>
</style>
