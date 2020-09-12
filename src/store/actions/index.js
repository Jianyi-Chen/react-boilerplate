import * as actionTypes from './types';

export const testActionCreator = (value) => {
  return {
    type: actionTypes.TEST,
    payload: {
      value,
    },
  };
};

export const immutableDataActionCreator = (data) => {
  return {
    type: actionTypes.IMMUTABLE,
    payload: {
      data,
    },
  };
};
