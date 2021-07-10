import actionTypes from '../actionTypes';
import { IUser } from '../../model/userEntity';

const setUserInfo: any = (userInfo: IUser) => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_USER_INFO,
      userInfo
    });
  };
};

const setAccessToken: any = (token: string) => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_ACCESS_TOKEN,
      token
    });
  };
};

export { setUserInfo, setAccessToken };
