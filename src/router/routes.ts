import { IRoute } from "@/interfaces/router";

import STMainPage from "@/components/STMainPage/STMainPage.vue";
import LoginPage from "@/pages/LoginPage/LoginPage.vue";
import SignUpPage from "@/pages/SignUpPage/SignUpPage.vue";

import routesLinks from "@/constants/routes";

const STPortfolio = () => import("@/components/STPortfolio/STPortfolio.vue");
const STStocks = () => import("@/components/STStocks/STStocks.vue");
const STStatistics = () => import("@/components/STStatistics/STStatistics.vue");
const STAccount = () => import("@/components/STAccount/STAccount.vue");

export const HomeRoute: IRoute = {
  path: routesLinks.home,
  name: "main",
  component: STMainPage,
  meta: {
    requiresAuth: true
  }
};
export const PortfolioRoute: IRoute = {
  path: routesLinks.portfolio,
  name: "portfolio",
  component: STPortfolio,
  meta: {
    requiresAuth: true
  }
};
export const StocksRoute: IRoute = {
  path: routesLinks.stocks,
  name: "stocks",
  component: STStocks,
  meta: {
    requiresAuth: true
  }
};
export const StatisticsRoute: IRoute = {
  path: routesLinks.statistics,
  name: "statistics",
  component: STStatistics,
  meta: {
    requiresAuth: true
  }
};
export const LoginRoute: IRoute = {
  path: routesLinks.logIn,
  name: "logIn",
  component: LoginPage,
  meta: {
    requiresAuth: false
  }
};
export const SignupRoute: IRoute = {
  path: routesLinks.signUp,
  name: "signUp",
  component: SignUpPage,
  meta: {
    requiresAuth: false
  }
};
export const AccountRoute: IRoute = {
  path: routesLinks.account,
  name: "account",
  component: STAccount,
  meta: {
    requiresAuth: true
  }
};

export default [
  HomeRoute,
  PortfolioRoute,
  StocksRoute,
  StatisticsRoute,
  LoginRoute,
  SignupRoute,
  AccountRoute
];
