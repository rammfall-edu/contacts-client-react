import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { createTransaction, getTransactions } from '../api';
import { saveTransactions } from '../store/actions';
import { transactionsSelector } from '../store/selectors';
import Input from '../components/Input';
import Select from '../components/Select';
import { TYPE_SELECT_OPTIONS } from '../constants';

const Transactions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const transactions = useSelector(transactionsSelector);

  useEffect(() => {
    getTransactions().then((transactions) => {
      dispatch(saveTransactions({ transactions }));
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="container">
      <h1>Transactions</h1>
      <Formik
        initialValues={{
          type: 'Receiving',
          date: '',
          description: '',
          amount: 0,
        }}
        onSubmit={(values, { resetForm }) => {
          const body = new FormData();

          Object.entries(values).forEach(([key, value]) => {
            body.append(key, value);
          });

          createTransaction(body).then((transaction) => {
            dispatch(
              saveTransactions({
                transactions: {
                  [transaction.id]: transaction,
                },
              })
            );
            resetForm();
          });
        }}
        validationSchema={yup.object().shape({
          type: yup
            .string()
            .oneOf(TYPE_SELECT_OPTIONS.map(({ value }) => value))
            .required(),
          date: yup.string().required(),
          description: yup.string().required(),
          amount: yup.number().min(1).required(),
        })}
      >
        <Form>
          <Input name="description" label="Description" />
          <br />
          <Select options={TYPE_SELECT_OPTIONS} name="type" label="Type" />
          <br />
          <Input name="amount" label="Amount" type="number" />
          <br />
          <Input name="date" label="Date" type="datetime" />

          <button type="submit">Create</button>
        </Form>
      </Formik>

      {isLoading ? (
        <p>Loading</p>
      ) : (
        <ul>
          {transactions.map(({ id, description, type, amount, date }) => {
            return (
              <li key={id}>
                <Link to={`/transaction/${id}`}>
                  <p>{description}</p>
                  <p>{type}</p>
                  <p>{amount}</p>
                  <p>{date}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Transactions;
