export interface BuyParams {
  coinCode: string;
  amount: number;
  cardNumber: string;
  transactionType: TransactionType
}

export enum TransactionType {
  BUY = "Buy",
  SELL = "Sell",
  CONVERT = "Convert"
}

export interface Transactions {
  created: number,
  amount: number,
  coinCode: string,
  transactionType: TransactionType
}


export interface TransactionList {
  transactions: Transactions[];
}
