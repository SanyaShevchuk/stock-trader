import { Module } from "vuex";
import { state, IUserState } from "./state/index";
import { actions } from "./actions/index";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { IRootState } from "@/store/index";

const namespaced: boolean = true;

export const userModule: Module<IUserState, IRootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
};
