export interface BuyParams {
  coinCode: string;
  amount: number;
  cardNumber: string;
}

export   enum  TransactionType {
  BUY= 0,
  SELL= 1
}

export interface  Transactions {
  transactionDate: Date,
  transactionAmount: number,
  coinCode: string,
  transactionType: TransactionType
}
