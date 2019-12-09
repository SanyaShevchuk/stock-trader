import { GetterTree } from "vuex";
import _find from "lodash/find";
import _map from "lodash/map";

import { IStocksState } from "../state";
import { IRootState } from "@/store";
import { IBoughtAsset } from "@/interfaces/stocks";

export const getters: GetterTree<IStocksState, IRootState> = {
  getBoughtAssets(state) {
    return _map(state.boughtAssets, (asset: IBoughtAsset) => {
      const assetInfo = _find(state.assets, ["id", asset.id]);
      return { ...asset, ...assetInfo };
    });
  }
};
