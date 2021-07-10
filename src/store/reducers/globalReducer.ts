import actionTypes from '../actionTypes';

type globalReducerState = {
  loginPromise: Promise<boolean>
}
const init: globalReducerState = {
  loginPromise: new Promise<boolean>((resolve => false))
};
export default (state = init, action) => {
  switch (action.type) {
    case actionTypes.SET_LOGIN_PROMISE:
      const { loginPromise } = action;
      return {
        ...state,
        loginPromise
      } as globalReducerState;
    default:
      return state;
  }
};
