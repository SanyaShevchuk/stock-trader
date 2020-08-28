import { Module } from "vuex";
import { state, IStocksState } from "./state/index";
import { mutations } from "./mutations/index";
import { actions } from "./actions/index";
import { IRootState } from "@/store";

const namespaced: boolean = true;

export const stocksModule: Module<IStocksState, IRootState> = {
  namespaced,
  state,
  mutations,
  actions
};
