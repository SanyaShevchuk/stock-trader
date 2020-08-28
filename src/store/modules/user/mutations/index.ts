import { MutationTree } from "vuex";
import Vue from "vue";
import { IUserState, getDefaultUserState } from "../state/index";
import _findIndex from "lodash/findIndex";
import _reject from "lodash/reject";
import _remove from "lodash/remove";
import _slice from "lodash/slice";
import _cloneDeep from "lodash/cloneDeep";
import _indexOf from "lodash/indexOf";
import _assign from "lodash/assign";
import { IStockHistory } from "@/interfaces/stocks";
import { IUserCredentials } from "@/interfaces/user";

export const mutations: MutationTree<IUserState> = {
  addBoughtAsset(state, asset) {
    state.assets.push(asset);
  },
  updateBoughtAsset(state, asset) {
    const index = _findIndex(state.assets, ["id", asset.id]);
    state.assets[index].quantity += asset.quantity;
  },
  sellBoughtAsset(state, asset) {
    const index = _findIndex(state.assets, ["id", asset.id]);
    state.assets[index].quantity -= asset.quantity;
  },
  removeBoughtAsset(state, id) {
    const index = _findIndex(state.assets, ["id", id]);
    state.assets.splice(index, 1);
  },
  discardCash(state, moneyAmount: number) {
    state.cash = state.cash! - moneyAmount > 0 ? state.cash! - moneyAmount : 0;
  },
  addCash(state, moneyAmount: number) {
    state.cash! += moneyAmount;
  },
  resetFunds(state) {
    state.cash = 10000;
  },
  saveStockAction(state, stockAction: IStockHistory) {
    state.history.push(stockAction);
  },
  setUserCredentials(state, userCredentials: IUserCredentials) {
    state.userCredentials = userCredentials;
  },
  verifiedUser(state, verified: boolean) {
    state.verified = verified;
  },
  resetState(state) {
    _assign(state, getDefaultUserState());
    // Vue.delete(state, 'userCredentials');
    // state.verified = false;
  }
};
