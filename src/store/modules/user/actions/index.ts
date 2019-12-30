import { ActionTree } from "vuex";
import { IUserState } from "../state";
import { IRootState } from "@/store";

export const actions: ActionTree<IUserState, IRootState> = {
  signUp({ commit, state }, userData: any) {
    state.name = userData.name;
    state.email = userData.email;
    state.password = userData.password;
    state.verified = true;

    console.log(state);
  }
};
