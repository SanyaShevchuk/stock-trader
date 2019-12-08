import Vue from "vue";
import Vuex from "vuex";

import { stocksModule } from "./modules/stocks/index";
import { IStocksState } from "./modules/stocks/state/index";

Vue.use(Vuex);

export interface IRootState {
  stocks: IStocksState;
}

export default new Vuex.Store<IRootState>({
  modules: {
    stocks: stocksModule
  }
});
