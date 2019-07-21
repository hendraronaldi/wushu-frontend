<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/logoTP.jpg" alt="logo"
                    style="height:60px;"
                >
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <img src="img/brand/logoTP.jpg">
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/wushuterataiputih/"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li class="nav-item d-lg-block ml-lg-4">
                    <button @click="logout()" href="" rel="noopener"
                        class="btn btn-primary btn-icon"
                        style="background:grey; border-color:grey"
                        >
                        <span class="nav-link-inner--text">Logout</span>
                    </button>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import {mapActions, mapGetters, mapState} from 'vuex';
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
    data() {
        return {
            isFetching: false,
            fail: false
        };
    },
    methods: mapActions({
        logout(dispatch){
            const {userProfile} = this.$store.state;
            this.isFetching = true;
            dispatch('logout', {userProfile})
            .then((response) => {
                this.$router.push("/")
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
    }),
    computed: {
        ...mapGetters([
            'currentUser'
        ]),
        ...mapState([
            'userLogged',
            'userProfile'
        ])
    },
    components: {
        BaseNav,
        CloseButton,
        BaseDropdown
    }
};
</script>
<style>
</style>
