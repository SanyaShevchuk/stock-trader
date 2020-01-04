export enum stockAction {
  BUY = "buy",
  SELL = "sell"
}

export interface IAssetPrice {
  [prop: string]: {
    price: number;
  };
}

export interface IAsset {
  id: number;
  name: string;
  quote: IAssetPrice;
  symbol?: string;
  cmc_rank?: number;
  last_updated?: string;
}

export interface IUserAsset {
  id: number;
  name: string;
  quantity: number;
  action: stockAction;
}

export interface IStockHistory {
  assetId: number;
  assetName: string;
  quote: IAssetPrice;
  quantity: number;
  summary: number;
  action: stockAction;
  date?: string;
}
