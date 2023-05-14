export interface Price {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
}

export interface PriceRequestParams {
  page: number;
  size: number;
}

export interface PriceList {
  prices: Price[];
}
