import * as actionTypes from '../actions/types';
const initialState = 'initial';
const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TEST:
      return action.payload.value;
    default:
      return state;
  }
};

export default testReducer;
