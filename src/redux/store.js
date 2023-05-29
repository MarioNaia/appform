import { createStore, combineReducers } from 'redux';
import userReducer from '../redux/reducers/userReducer';
import toggleReducer from '../redux/reducers/toogleReducer';

const rootReducer = combineReducers({
  users: userReducer,
  toggle: toggleReducer,
});

const store = createStore(rootReducer);

export default store;