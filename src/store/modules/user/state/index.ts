import { IUserCredentials } from "@/interfaces/user";
import { IUserAsset, IStockHistory } from "@/interfaces/stocks";

export interface IUserState {
  userCredentials?: IUserCredentials;
  assets: IUserAsset[];
  history: IStockHistory[];
  avatar?: string;
  cash: number;
  verified: boolean;
}

export const state: IUserState = {
  assets: [],
  history: [],
  cash: 0,
  verified: false
};
