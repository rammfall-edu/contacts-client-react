import { SAVE_ACCOUNT, SAVE_TRANSACTIONS } from './types';

const defaultState = {
  transactions: {},
  account: 0,
};

export const transactionReducer = (
  state = defaultState,
  { type, ...payload }
) => {
  switch (type) {
    case SAVE_TRANSACTIONS:
      return {
        ...state,
        transactions: {
          ...state.transactions,
          ...payload.transactions,
        },
      };

    case SAVE_ACCOUNT:
      return {
        ...state,
        account: payload.account,
      };
    default:
      return state;
  }
};
