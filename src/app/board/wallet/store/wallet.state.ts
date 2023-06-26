export interface Asset {
  assetCode: string;
  assetAmount: number;
}

export interface WalletState {
  balance?: Set<Asset>;
}

export const initialState: WalletState = {};
