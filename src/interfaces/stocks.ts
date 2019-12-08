export interface IAsset {
  id: number;
  name: string;
  price: number;
}

export interface IBoughtAsset extends IAsset {
  quantity: number;
}
