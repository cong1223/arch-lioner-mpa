import actionTypes from '../actionTypes';
import { IUser } from '../../model/userEntity';

type userReducerState = {
  userInfo: IUser | null,
  accessToken: string
}
const init: userReducerState = {
  userInfo: null,
  accessToken: ''
};
export default (state = init, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_INFO:
      const { userInfo } = action;
      return {
        ...state,
        userInfo
      } as userReducerState;
    case actionTypes.SET_ACCESS_TOKEN:
      const { token } = action;
      return {
        ...state,
        token
      } as userReducerState;
    default:
      return state;
  }
};
