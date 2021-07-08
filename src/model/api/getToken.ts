export interface IGetTokenParams {
  iv: string,
  encryptedData: string,
  code: string
}

export interface User {
  activitiSync: string;
  avatar: string;
  birthday?: any;
  createBy?: any;
  createTime: number;
  curEnterpriseId: string;
  email: string;
  id: string;
  openId: string;
  phone: string;
  pinyinName: string;
  realname: string;
  regionCode?: any;
  sex: string;
  status: string;
  updateBy: string;
  updateTime: number;
  userType: string;
  userVersion?: any;
  username: string;
}

export interface getTokenRes {
  accessToken: string;
  expiresIn?: any;
  openid?: any;
  status: string;
  unionId: string;
  user: User;
}
