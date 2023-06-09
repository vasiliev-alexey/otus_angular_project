export interface MarketParams {
  coinCode: string;
  amount: number;
  cardNumber: string;
  transactionType: TransactionType;
}

export enum TransactionType {
  BUY = 'Buy',
  SELL = 'Sell',
  CONVERT = 'Convert',
}

export interface Transactions {
  created: number;
  amount: number;
  coinCode: string;
  transactionType: TransactionType;
}

export interface Portfolio {
  amount: number;
  coinCode: string;
  changePercent: number;
}
export interface TransactionList {
  transactions: Transactions[];
}
export interface PortfolioList {
  portFolio: Portfolio[];
}
