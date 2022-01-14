import {
  GET_LATEST_TRANSACTIONS,
  TRANSACTION_ERROR
} from '../actions/types';

const initialState = {
  transactions: [],
  transaction: null,
  loading: true,
  error: {}
};

function transactionReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LATEST_TRANSACTIONS:
      return {
        ...state,
        transactions: payload,
        loading: false
      };
    case TRANSACTION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    
    default:
      return state;
  }
}

export default transactionReducer;
