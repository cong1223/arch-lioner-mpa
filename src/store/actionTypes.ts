type ActionTypes = {
  /**
   * 缓存登录异步函数
   */
  'SET_LOGIN_PROMISE': string,
  /**
   * 保存用户信息
   */
  'SET_USER_INFO': string,
  /**
   * 保存token
   */
  'SET_ACCESS_TOKEN': string
};

const actionTypes: ActionTypes = {
  SET_LOGIN_PROMISE: 'SET_LOGIN_PROMISE',
  SET_USER_INFO: 'SET_USER_INFO',
  SET_ACCESS_TOKEN: 'SET_ACCESS_TOKEN'
};

export default actionTypes;
