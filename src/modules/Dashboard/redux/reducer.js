
import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  test: false,
};

export default (state = INITIAL_STATE, action) => {
  const payload = action.payload;
  switch (action.type) {
    case actionTypes.SET_TEST:
      return {
        ...state,
        test: !state.test,
      };
    default:
      return state;
  }
};