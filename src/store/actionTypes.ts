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
   * 保存当前用户所有企业列表和当前企业id
   */
  'SET_ENTERPRISE': string,
};

const actionTypes: ActionTypes = {
  SET_LOGIN_PROMISE: 'SET_LOGIN_PROMISE',
  SET_USER_INFO: 'SET_USER_INFO',
  SET_ENTERPRISE: 'SET_ENTERPRISE',
};

export default actionTypes;
