import { ActionTree } from "vuex";
import _pick from "lodash/pick";
import _find from "lodash/find";
import _some from "lodash/some";
import _forEach from "lodash/forEach";
import _map from "lodash/map";
import _isEmpty from "lodash/isEmpty";

import { IUserState } from "../state";
import store, { IRootState } from "@/store";
import { IStockHistory, stockAction, IUserAsset } from "@/interfaces/stocks";

export const actions: ActionTree<IUserState, IRootState> = {
  signUp({ commit, state }, userData: any) {
    commit("setUserCredentials", userData);
    commit("verifiedUser", true);
    commit("resetFunds");
    console.log(state);
  },
  logOut({ commit, state }) {
    commit("resetStore");
  },
  buyAssets({ state, commit }, userAsset: IUserAsset) {
    const assets = store.state.stocks.assets;
    const asset = _find(assets, ["id", userAsset.id])!;
    const spendMoney = userAsset.quantity * asset.quote["USD"].price;

    if (spendMoney > state.cash!) {
      return;
    }

    const action: IStockHistory = {
      assetId: userAsset.id,
      assetName: userAsset.name,
      quote: asset.quote,
      quantity: userAsset.quantity,
      summary: asset.quote["USD"].price * userAsset.quantity!,
      action: stockAction.BUY,
      date: new Date().toLocaleDateString()
    };

    _some(state.assets, ["id", userAsset.id])
      ? commit("updateBoughtAsset", userAsset)
      : commit("addBoughtAsset", userAsset);

    commit("discardCash", spendMoney);
    commit("saveStockAction", action);
  },
  sellAssets({ state, commit }, userAsset: IUserAsset) {
    const boughtAsset = _find(state.assets, ["id", userAsset.id])!;
    if (_isEmpty(boughtAsset)) {
      return;
    }
    const restAmount = boughtAsset.quantity - userAsset.quantity;
    const assetInfo = _find(store.state.stocks.assets, ["id", userAsset.id])!;
    let actualSoldQuantity = 0;

    if (restAmount > 0) {
      actualSoldQuantity = userAsset.quantity;
      commit("sellBoughtAsset", userAsset);
      commit("addCash", assetInfo.quote["USD"].price * userAsset.quantity);
    } else {
      actualSoldQuantity = boughtAsset.quantity;
      commit("removeBoughtAsset", userAsset.id);
      commit("addCash", boughtAsset.quantity * assetInfo.quote["USD"].price);
    }
    const action: IStockHistory = {
      assetId: userAsset.id,
      assetName: assetInfo.name,
      quote: assetInfo.quote,
      quantity: actualSoldQuantity,
      summary: assetInfo.quote["USD"].price * actualSoldQuantity,
      action: stockAction.SELL,
      date: new Date().toLocaleDateString()
    };
    commit("saveStockAction", action);
  }
};
