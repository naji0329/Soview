import api from '../utils/api';
import {
  GET_PAIR,
  PAIR_ERROR,
} from './types';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

// Get Latest Blocks
export const getPairs = (searchText) => async (dispatch) => {
  try {
    var res = await api.get(`https://api.solscan.io/amm/pairs?source=raydium`);
    res = res.data.data.items;
    if(searchText != null) {
      var data = res;
      var dod = [];
      for (let i = 0; i < data.length; i++) {
        var name = data[i]['name'];
        if(name.toLowerCase().includes(searchText.toLowerCase()) || data[i]['address'] ==  searchText) {
          console.log(data[i]); 
          dod.push(data[i]);
        }
        else if( data[i]['base'] != null ) {
          console.log(data[i]['base']['address']);
          if( data[i]['base']['address'] == searchText || data[i]['quote']['address'] == searchText  ) {
            console.log(data[i]); 
            dod.push(data[i]);
          }
        }
      }
      res = dod;
    }
    dispatch({
      type: GET_PAIR,
      payload: res
    });
  } catch (err) {
    dispatch({
      type: PAIR_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
