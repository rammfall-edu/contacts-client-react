import React, { useEffect } from 'react';
import Routes from './Routes';
import { Link } from 'react-router-dom';
import { ROUTES } from './constants';
import { getAccount } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { saveAccount } from './store/actions';
import { accountSelector } from './store/selectors';

const Application = () => {
  const dispatch = useDispatch();
  const account = useSelector(accountSelector);

  useEffect(() => {
    getAccount().then(({ account }) => {
      dispatch(saveAccount({ account }));
    });
  }, []);

  return (
    <div className="wrapper">
      <header>
        <div className="container">
          <Link to={ROUTES.HOME}>Home</Link>

          <p>Account: {account}</p>
        </div>
      </header>
      <Routes />
    </div>
  );
};

export default Application;
