import VuexPersistence from "vuex-persist";
import { IRootState } from ".";

export const vuexPersistStore = new VuexPersistence<IRootState>({
  storage: localStorage,
  modules: ["stocks", "user"]
});
