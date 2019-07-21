<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
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
        </section>
        <section class="section section-skew">
            <div class="container-fluid mt--7">
                <div class="row">
                    <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                        <div class="card card-profile shadow">
                            <div class="row justify-content-center">
                                <div class="col-lg-3 order-lg-2">
                                    <div class="card-profile-image">
                                        <a href="#">
                                            <img src="img/theme/team-4-800x800.jpg" class="rounded-circle">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                <div class="d-flex justify-content-between">
                                    <h6 class="mb-0">Profile</h6>
                                    <span v-if="userProfile.Status == 1" class="badge badge-success float-right">Verified</span>
                                    <span v-else-if="userProfile.Status == 2" class="badge badge-danger float-right">Rejected</span>
                                    <span v-else class="badge badge-warning float-right">Pending</span>
                                </div>
                            </div>
                            <div class="card-body pt-0 pt-md-4">
                                <div class="row">
                                    <div class="col">
                                        <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                                            <div>
                                                <span class="heading">4</span>
                                                <span class="description">Gold</span>
                                            </div>
                                            <div>
                                                <span class="heading">5</span>
                                                <span class="description">Silver</span>
                                            </div>
                                            <div>
                                                <span class="heading">3</span>
                                                <span class="description">Bronze</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <h3>
                                        {{userProfile.Name}}
                                    </h3>
                                    <div class="h5 font-weight-300">
                                        <i class="ni location_pin mr-2"></i>Teratai Putih
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 order-xl-1">
                        <div class="card shadow bg-secondary">
                            <div class="card-header">
                                <div class="border-0">
                                    <div class="row align-items-center">
                                        <div class="col-8">
                                            <h3 class="mb-0">My account ({{userProfile.Username}})</h3>
                                        </div>
                                        <div v-if="!isEditProfile" class="col-4 text-right">
                                            <button @click="toggleEditProfile()" class="btn btn-sm btn-info">Edit Profile</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <form role="form" @submit="editUser">
                                    <h6 class="heading-small text-muted mb-4">User information</h6>
                                    <div class="pl-lg-4">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-group has-label">
                                                    <label class="form-control-label">
                                                        Full name
                                                    </label>
                                                    <input v-model="user.name" v-if="isEditProfile" aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.Name" class="form-control form-control-alternative">
                                                    <input v-else aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.Name" class="form-control form-control-alternative" disabled>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group has-label">
                                                    <label class="form-control-label">
                                                        Parent's name
                                                    </label>
                                                    <input v-model="user.nameparent" v-if="isEditProfile" aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.NameParent" class="form-control form-control-alternative">
                                                    <input v-else aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.NameParent" class="form-control form-control-alternative" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-group has-label">
                                                    <label class="form-control-label">
                                                        Email
                                                    </label>
                                                    <input v-model="user.email" v-if="isEditProfile" aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.Email" class="form-control form-control-alternative">
                                                    <input v-else aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.Email" class="form-control form-control-alternative" disabled>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group has-label">
                                                    <label class="form-control-label">
                                                        Current password
                                                    </label>
                                                    <input v-model="user.password" v-if="isEditProfile" type="password" aria-describedby="addon-right addon-left" alternative="" placeholder="Current password" class="form-control form-control-alternative">
                                                    <input v-else type="password" aria-describedby="addon-right addon-left" alternative="" placeholder="Current password" class="form-control form-control-alternative" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-group has-label">
                                                    <label class="form-control-label">
                                                        New password
                                                    </label>
                                                    <input v-model="newpassword" v-if="isEditProfile" type="password" aria-describedby="addon-right addon-left" alternative="" placeholder="New password" class="form-control form-control-alternative">
                                                    <input v-else type="password" aria-describedby="addon-right addon-left" alternative="" placeholder="New password" class="form-control form-control-alternative" disabled>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group has-label">
                                                    <label class="form-control-label">
                                                        Confirm new password
                                                    </label>
                                                    <input v-model="confirmpassword" v-if="isEditProfile" type="password" aria-describedby="addon-right addon-left" alternative="" placeholder="Confirm new password" class="form-control form-control-alternative">
                                                    <input v-else type="password" aria-describedby="addon-right addon-left" alternative="" placeholder="Confirm new password" class="form-control form-control-alternative" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-group has-label">
                                                    <label class="form-control-label">
                                                        Birthdate
                                                    </label>
                                                    <base-input v-if="isEditProfile" alternative>
                                                        <flat-picker slot-scope="{focus, blur}"
                                                                    @on-open="focus"
                                                                    @on-close="blur"
                                                                    :config="{allowInput: true}"
                                                                    class="form-control datepicker"
                                                                    v-model="user.birthdate">
                                                        </flat-picker>
                                                    </base-input>
                                                    <input v-else aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.Birthdate" class="form-control form-control-alternative" disabled>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group has-label">
                                                    <label class="form-control-label">
                                                        Birthplace
                                                    </label>
                                                    <input v-model="user.birthplace" v-if="isEditProfile" aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.Birthplace" class="form-control form-control-alternative">
                                                    <input v-else aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.Birthplace" class="form-control form-control-alternative" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-group has-label">
                                                    <label class="form-control-label">
                                                        Education
                                                    </label>
                                                    <input v-model="user.education" v-if="isEditProfile" aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.Education" class="form-control form-control-alternative">
                                                    <input v-else aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.Education" class="form-control form-control-alternative" disabled>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group has-label">
                                                    <label class="form-control-label">
                                                        Experience
                                                    </label>
                                                    <input v-model="user.expprev" v-if="isEditProfile" aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.Experience" class="form-control form-control-alternative">
                                                    <input v-else aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.ExpPrev" class="form-control form-control-alternative" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group has-label">
                                                    <label class="form-control-label">
                                                        Motivation
                                                    </label>
                                                    <input v-model="user.motivation" v-if="isEditProfile" aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.Motivation" class="form-control form-control-alternative">
                                                    <input v-else aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.Motivation" class="form-control form-control-alternative" disabled>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="my-4">
                                    <h6 class="heading-small text-muted mb-4">Contact information</h6>
                                    <div class="pl-lg-4">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group has-label">
                                                    <label class="form-control-label">
                                                        Address
                                                    </label>
                                                    <input v-model="user.address" v-if="isEditProfile" aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.Address" class="form-control form-control-alternative">
                                                    <input v-else aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.Address" class="form-control form-control-alternative" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-group has-label">
                                                    <label class="form-control-label">
                                                        Phone
                                                    </label>
                                                    <input v-model="user.phone" v-if="isEditProfile" aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.Phone" class="form-control form-control-alternative">
                                                    <input v-else aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.Phone" class="form-control form-control-alternative" disabled>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group has-label">
                                                    <label class="form-control-label">
                                                        Parent's phone
                                                    </label>
                                                    <input v-model="user.phoneparent" v-if="isEditProfile" aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.PhoneParent" class="form-control form-control-alternative">
                                                    <input v-else aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.PhoneParent" class="form-control form-control-alternative" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group has-label">
                                                    <label class="form-control-label">
                                                        Parent's Address
                                                    </label>
                                                    <input v-model="user.addressparent" v-if="isEditProfile" aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.AddressParent" class="form-control form-control-alternative">
                                                    <input v-else aria-describedby="addon-right addon-left" alternative="" v-bind:placeholder="userProfile.AddressParent" class="form-control form-control-alternative" disabled>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr v-if="isEditProfile" class="my-4">
                                    <div v-if="isEditProfile" class="text-center">
                                        <button v-if="!isSavingProfile" type="submit" class="btn my-4 btn-primary">Save</button>
                                        <button v-else type="button" class="btn my-4 btn-primary" disabled>Saving Profile...</button>
                                        <button type="button" @click="cancelEditProfile()" class="btn my-4 btn-secondary">Cancel</button>
                                    </div>
                                </form>
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
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { constants } from 'crypto';

export default {
    components: {flatPicker},
    data(){
        return {
            success: false,
            fail: false,
            isEditProfile: false,
            isSavingProfile: false,
            newpassword: this.$store.state.userProfile.Password,
            confirmpassword: this.$store.state.userProfile.Password,
            user: {
                name: this.$store.state.userProfile.Name,
                address: this.$store.state.userProfile.Address,
                username: this.$store.state.userProfile.Username,
                email: this.$store.state.userProfile.Email,
                password: this.$store.state.userProfile.Password,
                birthplace: this.$store.state.userProfile.Birthplace,
                phone: this.$store.state.userProfile.Phone,
                education: this.$store.state.userProfile.Education,
                expprev: this.$store.state.userProfile.ExpPrev,
                motivation: this.$store.state.userProfile.Motivation,
                nameparent: this.$store.state.userProfile.NameParent,
                phoneparent: this.$store.state.userProfile.PhoneParent,
                addressparent: this.$store.state.userProfile.AddressParent,
                birthdate: this.$store.state.userProfile.Birthdate
            }
        }
    },
    computed: {
        ...mapGetters([
            'currentUser'
        ]),
        ...mapState([
            'userProfile'
        ])
    },
    methods: mapActions({
        toggleEditProfile(){
            this.isEditProfile = !this.isEditProfile;
        },

        cancelEditProfile(){
            this.toggleEditProfile();
            for(var key in this.$store.state.userProfile){
                this.user[key.toLowerCase()] = this.$store.state.userProfile[key];
            }
            this.newpassword = this.$store.state.userProfile.Password;
            this.confirmpassword = this.$store.state.userProfile.Password;
        },

        editUser(dispatch, e){
            e.preventDefault();
            this.isSavingProfile = true;
            if(this.newpassword == this.confirmpassword && this.newpassword != ""){
                for(var key in this.$store.state.userProfile){
                    if(this.user[key.toLowerCase() == '']){
                        this.user[key.toLowerCase()] = this.$store.state.userProfile[key];
                    }
                }
                const {user} = this;
                dispatch('editUser', {user})
                .then((response) => {
                    console.log(this.$store.state.userProfile)
                    for(var key in response){
                        this.user[key.toLowerCase()] = response[key];
                    }
                    this.newpassword = response.password;
                    this.confirmpassword = response.password;
                    this.success = true;
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
                    if(this.success) {
                        setTimeout(function(){
                            this.success = false;
                        }, 3000);
                    }
                    this.isSavingProfile = false;
                    this.toggleEditProfile();
                })
            } else {
                this.isSavingProfile = false;
            }
        }
    })
};
</script>
<style>
</style>
