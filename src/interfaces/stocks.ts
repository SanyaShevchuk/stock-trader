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
