import { combineReducers } from 'redux';
import userReducer from './userReducer'
import cartReducer from './cartReducer'

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer
});


export default reducers