import { combineReducers } from 'redux';
import global from './globalReducer';
import user from './userReducer';
import enterprise from './enterpriseReducer';

const reducers = combineReducers({
  global,
  user,
  enterprise
});
export type RootState = ReturnType<typeof reducers>;
export default reducers;
