import { IUserCredentials } from "@/interfaces/user";
import { IUserAsset, IStockHistory } from "@/interfaces/stocks";

export interface IUserState {
  assets: IUserAsset[];
  history: IStockHistory[];
  userCredentials?: IUserCredentials;
  avatar?: string;
  cash?: number;
  verified: boolean;
}

export const getDefaultUserState = () => ({
  assets: [],
  history: [],
  verified: false,
  cash: undefined,
  userCredentials: undefined,
  avatar: undefined
});

export const state: IUserState = getDefaultUserState();
