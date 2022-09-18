import { SAVE_TRANSACTIONS, SAVE_ACCOUNT } from './types';

export const saveTransactions = ({ transactions }) => ({
  type: SAVE_TRANSACTIONS,
  transactions,
});

export const saveAccount = ({ account }) => ({
  type: SAVE_ACCOUNT,
  account,
});
