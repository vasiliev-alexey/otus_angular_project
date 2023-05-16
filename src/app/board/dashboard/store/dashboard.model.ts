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
  created: number,
  amount: number,
  coinCode: string,
  transactionType: TransactionType
}


export interface TransactionList  {
  transactions: Transactions[]
}
