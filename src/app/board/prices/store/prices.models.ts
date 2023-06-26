export interface Price {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}

export interface PriceRequestParams {
  page: number;
  size: number;
}

export interface PriceList {
  prices: Price[];
}
