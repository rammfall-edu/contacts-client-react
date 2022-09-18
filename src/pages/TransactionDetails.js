import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTransaction } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { saveTransactions } from '../store/actions';
import { transactionSelector } from '../store/selectors';

const TransactionDetails = () => {
  const { transactionId } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const transaction = useSelector(transactionSelector(transactionId));

  useEffect(() => {
    getTransaction(transactionId).then((transaction) => {
      dispatch(
        saveTransactions({
          transactions: {
            [transaction.id]: transaction,
          },
        })
      );
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          <p>Type: {transaction.type}</p>
          <p>Amount: {transaction.amount}</p>
          <p>Description: {transaction.description}</p>
          <p>Date: {transaction.date}</p>
        </div>
      )}
    </div>
  );
};

export default TransactionDetails;
