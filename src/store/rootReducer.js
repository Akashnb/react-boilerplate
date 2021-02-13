import { combineReducers } from 'redux';

import { dashboardReducer } from '../modules/Dashboard'

const appReducer = combineReducers({
  dashboard:  dashboardReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT_SUCCESS') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
