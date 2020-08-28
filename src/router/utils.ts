import Router from "vue-router";
import store from "@/store";
import routerLinks from "@/constants/routes";

export const configure = (router: Router) => {
  router.beforeEach((to, from, next) => {
    const { requiresAuth } = to.meta;
    const isAuthorized = store.state.user.verified;
    if (requiresAuth) {
      return isAuthorized ? next() : next(routerLinks.logIn);
    } else {
      return isAuthorized ? next(routerLinks.home) : next();
    }
  });
};
