export const transactionsSelector = ({ transactions }) =>
  Object.values(transactions);

export const accountSelector = ({ account }) => account;

export const transactionSelector = (id) => {
  return ({ transactions }) => {
    return transactions[id];
  };
};
