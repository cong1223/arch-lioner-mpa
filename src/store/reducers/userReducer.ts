import actionTypes from '../actionTypes';
import { UserInfo } from '../../model/api/getUserInfo';

type userReducerState = {
  userInfo: UserInfo | null,
}
const init: userReducerState = {
  userInfo: null,
};
export default (state = init, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_INFO:
      const { userInfo } = action;
      return {
        ...state,
        userInfo
      } as userReducerState;
    default:
      return state;
  }
};
