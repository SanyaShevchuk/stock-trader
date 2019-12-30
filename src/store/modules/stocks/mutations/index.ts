import { MutationTree } from "vuex";
import { IStocksState } from "../state/index";
import _findIndex from "lodash/findIndex";
import _reject from "lodash/reject";
import _remove from "lodash/remove";
import _slice from "lodash/slice";
import _indexOf from "lodash/indexOf";
import { IAsset, IStockHistory } from "@/interfaces/stocks";
import { defaultFunds } from "../state/index";

export const mutations: MutationTree<IStocksState> = {
  addBoughtAsset(state, boughtAsset) {
    state.boughtAssets.push(boughtAsset);
  },
  updateBoughtAsset(state, boughtAsset) {
    const index = _findIndex(state.boughtAssets, ["id", boughtAsset.id]);
    state.boughtAssets[index].quantity += boughtAsset.quantity;
  },
  sellBoughtAsset(state, boughtAsset) {
    const index = _findIndex(state.boughtAssets, ["id", boughtAsset.id]);
    state.boughtAssets[index].quantity -= boughtAsset.quantity;
  },
  removeBoughtAsset(state, id) {
    const index = _findIndex(state.boughtAssets, ["id", id]);
    state.boughtAssets.splice(index, 1);
  },
  discardCash(state, moneyAmount: number) {
    state.cash = state.cash - moneyAmount > 0 ? state.cash - moneyAmount : 0;
  },
  addCash(state, moneyAmount: number) {
    state.cash += moneyAmount;
  },
  initStocks(state, assets: IAsset[]) {
    state.assets = assets;
  },
  resetFunds(state) {
    state.cash = defaultFunds;
  },
  saveStockAction(state, stockAction: IStockHistory) {
    state.history.push(stockAction);
  }
};
