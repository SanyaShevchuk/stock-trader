import { IRoute } from "@/interfaces/router";

import MainPage from "@/pages/MainPage/MainPage.vue";
import LoginPage from "@/pages/LoginPage/LoginPage.vue";
import SignUpPage from "@/pages/SignUpPage/SignUpPage.vue";

import routesLinks from "@/constants/routes";

const PortfolioPage = () => import("@/pages/PortfolioPage/PortfolioPage.vue");
const StocksPage = () => import("@/pages/StocksPage/StocksPage.vue");
const StatisticsPage = () =>
  import("@/pages/StatisticsPage/StatisticsPage.vue");
const AccountPage = () => import("@/pages/AccountPage/AccountPage.vue");

export const HomeRoute: IRoute = {
  path: routesLinks.home,
  name: "main",
  component: MainPage,
  meta: {
    requiresAuth: true
  }
};
export const PortfolioRoute: IRoute = {
  path: routesLinks.portfolio,
  name: "portfolio",
  component: PortfolioPage,
  meta: {
    requiresAuth: true
  }
};
export const StocksRoute: IRoute = {
  path: routesLinks.stocks,
  name: "stocks",
  component: StocksPage,
  meta: {
    requiresAuth: true
  }
};
export const StatisticsRoute: IRoute = {
  path: routesLinks.statistics,
  name: "statistics",
  component: StatisticsPage,
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
  component: AccountPage,
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
