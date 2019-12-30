import { ActionTree } from "vuex";
import _pick from "lodash/pick";
import _find from "lodash/find";
import _some from "lodash/some";
import _forEach from "lodash/forEach";
import _map from "lodash/map";

import { IStocksState } from "../state";
import { IRootState } from "@/store";
import { IAsset, IStockHistory, stockAction } from "@/interfaces/stocks";

export const actions: ActionTree<IStocksState, IRootState> = {
  buyAssets({ state, commit }, asset: IAsset) {
    const boughtAsset = _pick(asset, ["id", "quantity"]);
    const spendMoney = asset.quantity! * asset.price;

    if (spendMoney > state.cash) {
      return;
    }

    const action: IStockHistory = {
      assetId: asset.id,
      assetName: asset.name,
      price: asset.price,
      quantity: asset.quantity!,
      summary: asset.price * asset.quantity!,
      action: stockAction.BUY,
      date: new Date().toLocaleDateString()
    };

    _some(state.boughtAssets, ["id", asset.id])
      ? commit("updateBoughtAsset", boughtAsset)
      : commit("addBoughtAsset", boughtAsset);

    commit("discardCash", spendMoney);
    commit("saveStockAction", action);
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
    const action: IStockHistory = {
      assetId: asset.id,
      assetName: asset.name,
      price: asset.price,
      quantity: asset.sell!,
      summary: asset.price * asset.sell!,
      action: stockAction.SELL,
      date: new Date().toLocaleDateString()
    };
    commit("saveStockAction", action);
  },
  updateStocks({ state, commit }) {
    const priceUpdater = (asset: IAsset): IAsset => {
      let updatedPrice = 0;
      switch (asset.price % 7) {
        case 0:
          updatedPrice = asset.price - 2;
          break;
        case 1:
          updatedPrice = asset.price + 1;
          break;
        case 2:
          updatedPrice = asset.price + 3;
          break;
        case 3:
          updatedPrice = asset.price + 1;
          break;
        case 4:
          updatedPrice = asset.price - 3;
          break;
        case 5:
          updatedPrice = asset.price - 1;
          break;
        case 6:
          updatedPrice = asset.price - 0;
          break;
        default:
          updatedPrice = asset.price - 3;
      }
      return {
        ...asset,
        price: updatedPrice
      };
    };
    const assets = _map(state.assets, priceUpdater);
    commit("initStocks", assets);
  }
};
