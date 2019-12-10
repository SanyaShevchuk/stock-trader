import { ActionTree } from "vuex";
import _pick from "lodash/pick";
import _find from "lodash/find";
import _some from "lodash/some";

import { IStocksState } from "../state";
import { IRootState } from "@/store";
import { IAsset } from "@/interfaces/stocks";

export const actions: ActionTree<IStocksState, IRootState> = {
  buyAssets({ state, commit }, asset: IAsset) {
    const boughtAsset = _pick(asset, ["id", "quantity"]);
    const spendMoney = asset.quantity! * asset.price;

    if (spendMoney > state.cash) {
      return;
    }

    _some(state.boughtAssets, ["id", asset.id])
      ? commit("updateBoughtAsset", boughtAsset)
      : commit("addBoughtAsset", boughtAsset);

    commit("discardCash", spendMoney);
  },
  sellAssets({ state, commit }, asset: IAsset) {
    const boughtAsset = _find(state.boughtAssets, ["id", asset.id]);
    const restAmount = boughtAsset!.quantity - asset.sell!;

    const assetInfo = {
      id: asset.id,
      quantity: asset.sell
    };
    if (restAmount > 0) {
      commit("sellBoughtAsset", assetInfo);
      commit("addCash", asset.price * asset.sell!);
    } else {
      commit("removeBoughtAsset", asset.id);
      commit("addCash", boughtAsset!.quantity * asset.price);
    }
  }
};
