import { API_HOST } from '../constants';

const request = async (url, method = 'GET', body = null) => {
  const data = await fetch(`${API_HOST}${url}`, {
    body,
    method,
  });

  return await data.json();
};

export const getTransactions = async () => await request('transactions');

export const createTransaction = async (body) =>
  await request('transactions', 'POST', body);

export const getAccount = async () => await request('account');

export const getTransaction = async (id) => await request(`transaction/${id}`);
