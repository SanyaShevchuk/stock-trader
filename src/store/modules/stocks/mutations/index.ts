import { MutationTree } from "vuex";
import { IStocksState } from "../state/index";
import { IAsset } from "@/interfaces/stocks";

export const mutations: MutationTree<IStocksState> = {
  setAssets(state, assets: IAsset[]) {
    state.assets = assets;
  }
};
