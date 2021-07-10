import actionTypes from '../actionTypes';

const setLoginPromise: any = (loginPromise: Promise<boolean>) => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_LOGIN_PROMISE,
      loginPromise
    });
  };
};

export { setLoginPromise };
