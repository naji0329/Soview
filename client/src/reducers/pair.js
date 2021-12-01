import {
  GET_PAIR,
  PAIR_ERROR
} from '../actions/types';

const initialState = {
  pairs: [],
  pair: null,
  loading: true,
  error: {}
};

function pairReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PAIR:
      return {
        ...state,
        pairs: payload,
        loading: false
      };
    case PAIR_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

    
    default:
      return state;
  }
}

export default pairReducer;
