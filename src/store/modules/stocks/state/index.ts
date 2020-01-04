import { IAsset } from "@/interfaces/stocks";

export interface IStocksState {
  assets: IAsset[];
}

export const state: IStocksState = {
  assets: []
};

// export const state: IStocksState = {
//   assets: [
//     {
//       id: 1,
//       name: "BMW",
//       price: 81
//     },
//     {
//       id: 2,
//       name: "Google",
//       price: 44
//     },
//     {
//       id: 3,
//       name: "Apple",
//       price: 280
//     },
//     {
//       id: 4,
//       name: "Twitter",
//       price: 6
//     }
//   ],
// };
