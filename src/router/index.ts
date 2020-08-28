import Vue from "vue";
import VueRouter from "vue-router";

import { configure } from "./utils";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

configure(router);

export default router;
