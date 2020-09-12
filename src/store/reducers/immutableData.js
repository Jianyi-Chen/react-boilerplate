import { Map } from 'immutable';
import * as actionTypes from '../actions/types';
const initialState = Map({
  test: 'test',
});

const immutableData = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.IMMUTABLE:
      return state.set('test', action.payload.data);
    default:
      return state;
  }
};

export default immutableData;
