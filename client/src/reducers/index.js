import { combineReducers } from 'redux';
import transaction from './transaction';
import pair from './pair';

export default combineReducers({
  pair,
  transaction
});
