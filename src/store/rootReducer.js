import { combineReducers } from 'redux';

const appReducer = combineReducers({

});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT_SUCCESS') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
