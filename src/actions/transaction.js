import api from '../utils/api';
import {
  GET_LATEST_TRANSACTIONS,
  TRANSACTION_ERROR,
} from './types';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/
let limit = 10;
// Get Latest Blocks
export const getLatestTransactions = (pairAddress) => async (dispatch) => {
  try {
    const res = await api.get(`https://api.solscan.io/amm/txs?address=${pairAddress}&type=all&offset=0&limit=${limit}`);
    limit += 10;
    dispatch({
      type: GET_LATEST_TRANSACTIONS,
      payload: res.data.data.items
    });
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

