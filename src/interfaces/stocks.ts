export enum stockAction {
  BUY = "buy",
  SELL = "sell"
}

export interface IAsset {
  id: number;
  name: string;
  price: number;
  quantity?: number;
  sell?: number;
}

export interface IBoughtAsset {
  id: number;
  quantity: number;
}

export interface IStockHistory {
  assetId: number;
  assetName: string;
  price: number;
  quantity: number;
  summary: number;
  action: stockAction;
  date?: string;
}
