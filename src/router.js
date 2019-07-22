import Vue from "vue";
import Router from "vue-router";
import PrivateHeader from "./layout/PrivateHeader";
import PrivateAdminHeader from "./layout/PrivateAdminHeader";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import AdminLogin from "./views/admin/Login.vue";
import AdminConfirmation from "./views/admin/Confirmation.vue";

import store from './store';

Vue.use(Router);

const router = new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: store.state.userProfile != null ? PrivateHeader : AppHeader,
        default: Landing,
        footer: AppFooter
      },
      meta: {
        public: true
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: store.state.userProfile != null ? PrivateHeader : AppHeader,
        default: Login,
        footer: AppFooter
      },
      meta: {
        public: true,
        onlyUserLoggedOut: true
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: store.state.userProfile != null ? PrivateHeader : AppHeader,
        default: Register,
        footer: AppFooter
      },
      meta: {
        public: true,
        onlyUserLoggedOut: true
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: PrivateHeader,
        default: Profile,
        footer: AppFooter
      },
      meta: {
        onlyUser: true
      }
    },
    {
      path: "/admin-login",
      name: "admin-login",
      components: {
        header: store.state.admin != null ? PrivateAdminHeader : AppHeader,
        default: AdminLogin,
        footer: AppFooter
      },
      meta: {
        public: true,
        onlyAdminLoggedOut: true
      }
    },
    {
      path: "/admin-confirmation",
      name: "admin-confirmation",
      components: {
        header: PrivateAdminHeader,
        default: AdminConfirmation,
        footer: AppFooter
      },
      meta: {
        onlyAdmin: true
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

router.beforeEach((to, from, next) => {
  const userAuthed = store.state.userProfile ? true : false;
  const adminAuthed = store.state.admin ? true : false;
  const onlyUser = to.matched.some(record => record.meta.onlyUser);
  const onlyAdmin = to.matched.some(record => record.meta.onlyAdmin);
  const onlyUserLoggedOut = to.matched.some(record => record.meta.onlyUserLoggedOut);
  const onlyAdminLoggedOut = to.matched.some(record => record.meta.onlyAdminLoggedOut);
  const isPublic = to.matched.some(record => record.meta.public);

  if(onlyUser && !userAuthed) {
    return next({
      path: '/login'
    })
  }

  if(onlyAdmin && !adminAuthed) {
    return next({
      path: '/admin-login'
    })
  }

  next()
})

export default router;