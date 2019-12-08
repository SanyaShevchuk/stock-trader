import { GetterTree } from "vuex";
import _find from "lodash/find";

import { IStocksState } from "../state";
import { IRootState } from "@/store";

export const getters: GetterTree<IStocksState, IRootState> = {
  isAssetBought(state, boughtAsset) {
    return _find(state.boughtAssets, { id: boughtAsset.id });
  }
};
