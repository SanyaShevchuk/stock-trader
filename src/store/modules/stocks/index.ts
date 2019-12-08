import { Module } from "vuex";
import { state, IStocksState } from "./state/index";
import { mutations } from "./mutations/index";
import { getters } from "./getters/index";
import { actions } from "./actions/index";
import { IRootState } from "@/store";

const namespaced: boolean = true;

export const stocksModule: Module<IStocksState, IRootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
};
