import { createStore } from 'redux';
import { transactionReducer } from './reducer';

const store = createStore(transactionReducer);

export default store;
