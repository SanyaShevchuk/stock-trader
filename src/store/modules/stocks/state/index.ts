import { IAsset, IBoughtAsset } from "@/interfaces/stocks";

export interface IStocksState {
  assets: IAsset[];
  boughtAssets: IBoughtAsset[];
}

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
  boughtAssets: []
};
