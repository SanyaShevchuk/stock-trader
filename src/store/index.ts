import Vue from "vue";
import Vuex from "vuex";

import { stocksModule } from "./modules/stocks/index";
import { userModule } from "./modules/user/index";
import { IStocksState } from "./modules/stocks/state/index";
import { IUserState } from "./modules/user/state/index";
import { vuexPersistStore } from "./persist-store";

Vue.use(Vuex);

export interface IRootState {
  stocks: IStocksState;
  user: IUserState;
}

export default new Vuex.Store<IRootState>({
  modules: {
    stocks: stocksModule,
    user: userModule
  },
  plugins: [vuexPersistStore.plugin]
});
