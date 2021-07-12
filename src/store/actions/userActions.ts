import actionTypes from '../actionTypes';
import { UserInfo } from '../../model/api/getUserInfo';

const setUserInfo: any = (userInfo: UserInfo) => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_USER_INFO,
      userInfo
    });
  };
};

export { setUserInfo };
