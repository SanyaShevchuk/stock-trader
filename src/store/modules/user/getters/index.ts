import { GetterTree } from "vuex";
import _map from "lodash/map";
import _find from "lodash/find";
import _round from "lodash/round";

import store, { IRootState } from "@/store";
import { IUserState } from "../state";

export const getters: GetterTree<IUserState, IRootState> = {
  getBoughtAssets(state) {
    const { assets } = store.state.stocks;
    return _map(state.assets, asset => {
      const { quote } = _find(assets, ["id", asset.id])!;

      return {
        ...asset,
        price: quote["USD"].price
      };
    });
  },
  getRoundedCash(state) {
    return _round(state.cash!, 4);
  }
};
