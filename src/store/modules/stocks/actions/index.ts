import { ActionTree } from "vuex";
import _map from "lodash/map";
import _pick from "lodash/pick";

import { getCryptoCurrencyInfo } from "@/services/api/coinmarket";
import { IStocksState } from "../state";
import { IRootState } from "@/store";
import { cryptocurrencyData } from "@/utils/mocks";

export const actions: ActionTree<IStocksState, IRootState> = {
  async getAssets({ state, commit }) {
    try {
      // const {data} = await getCryptoCurrencyInfo();
      const { data } = cryptocurrencyData;
      const assets = _map(data, asset =>
        _pick(asset, [
          "id",
          "name",
          "symbol",
          "date_added",
          "cmc_rank",
          "quote",
          "last_updated"
        ])
      );
      commit("setAssets", assets);
    } catch (error) {
      console.log(error);
    }
  },
  updateStocks({ state, commit }) {
    // const priceUpdater = (asset: IAsset): IAsset => {
    //   let updatedPrice = 0;
    //   switch (asset.price % 7) {
    //     case 0:
    //       updatedPrice = asset.price - 2;
    //       break;
    //     case 1:
    //       updatedPrice = asset.price + 1;
    //       break;
    //     case 2:
    //       updatedPrice = asset.price + 3;
    //       break;
    //     case 3:
    //       updatedPrice = asset.price + 1;
    //       break;
    //     case 4:
    //       updatedPrice = asset.price - 3;
    //       break;
    //     case 5:
    //       updatedPrice = asset.price - 1;
    //       break;
    //     case 6:
    //       updatedPrice = asset.price - 0;
    //       break;
    //     default:
    //       updatedPrice = asset.price - 3;
    //   }
    //   return {
    //     ...asset,
    //     price: updatedPrice
    //   };
    // };
    // const assets = _map(state.assets, priceUpdater);
    // commit("initStocks", assets);
  }
};
