import { MutationTree } from "vuex";
import { IStocksState } from "../state/index";
import _findIndex from "lodash/findIndex";

export const mutations: MutationTree<IStocksState> = {
  addBoughtAsset(state, boughtAsset) {
    state.boughtAssets.push(boughtAsset);
  },
  updateBoughtAsset(state, boughtAsset) {
    const index = _findIndex(state.boughtAssets, { id: boughtAsset.id });
    state.boughtAssets[index].quantity = boughtAsset.quantity;
  }
};
