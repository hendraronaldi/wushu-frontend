import Vue from "vue";
import Router from "vue-router";
import PrivateHeader from "./layout/PrivateHeader";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import AdminLogin from "./views/admin/Login.vue";
import AdminConfirmation from "./views/admin/Confirmation.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/components",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: PrivateHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/admin-login",
      name: "admin-login",
      components: {
        header: AppHeader,
        default: AdminLogin,
        footer: AppFooter
      }
    },
    {
      path: "/admin-confirmation",
      name: "admin-confirmation",
      components: {
        header: PrivateHeader,
        default: AdminConfirmation,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
