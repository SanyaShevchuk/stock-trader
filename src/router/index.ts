import Vue from "vue";
import VueRouter from "vue-router";
import STMainPage from "@/components/STMainPage/STMainPage.vue";
import STPortfolio from "@/components/STPortfolio/STPortfolio.vue";
import STStocks from "@/components/STStocks/STStocks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: STMainPage
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: STPortfolio
  },
  {
    path: "/stocks",
    name: "stocks",
    component: STStocks
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
