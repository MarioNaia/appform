import { combineReducers } from 'redux';
import userReducer from '.userReducer';
import toggleReducer from '.toogleReducer';

const rootReducer = combineReducers({
  formData: userReducer,
  toggle: toggleReducer
});

export default rootReducer;