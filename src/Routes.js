import React from 'react';
import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import { ROUTES } from './constants';
import Transactions from './pages/Transactions';
import TransactionDetails from './pages/TransactionDetails';

const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path={ROUTES.HOME} element={<Transactions />} />
      <Route
        path={`${ROUTES.DETAILS}/:transactionId`}
        element={<TransactionDetails />}
      />
    </ReactDomRoutes>
  );
};

export default Routes;
