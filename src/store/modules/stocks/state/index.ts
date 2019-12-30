import { IAsset, IBoughtAsset, IStockHistory } from "@/interfaces/stocks";

export interface IStocksState {
  assets: IAsset[];
  boughtAssets: IBoughtAsset[];
  cash: number;
  history: IStockHistory[];
}

export const defaultFunds = 10000;

export const state: IStocksState = {
  assets: [
    {
      id: 1,
      name: "BMW",
      price: 81
    },
    {
      id: 2,
      name: "Google",
      price: 44
    },
    {
      id: 3,
      name: "Apple",
      price: 280
    },
    {
      id: 4,
      name: "Twitter",
      price: 6
    }
  ],
  boughtAssets: [],
  cash: defaultFunds,
  history: []
};
