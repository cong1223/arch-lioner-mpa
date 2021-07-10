import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  globalReducer,
  userReducer
});
export type RootState = ReturnType<typeof reducers>;
export default reducers;
