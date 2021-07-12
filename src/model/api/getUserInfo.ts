export interface UserInfo {
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

export interface UserEnterpriseVoList {
  avatar?: any;
  comment?: any;
  createBy: string;
  createTime: number;
  enterpriseId: string;
  enterpriseName: string;
  enterpriseUrl?: any;
  id: string;
  isAutoApprove: string;
  isAvailable: string;
  isCreator: string;
  isCurEnterprise: string;
  isInPro?: any;
  phone?: any;
  projectId?: any;
  projectPreferences?: any;
  realname?: any;
  stampIsCloud: string;
  status: string;
  updateBy?: any;
  updateTime: number;
  userDuties?: any;
  userId: string;
  userSpecialties?: any;
}

export interface IUserInfoDetail {
  userInfo: UserInfo;
  userSpecialtyList: any[];
  userEnterpriseVoList: UserEnterpriseVoList[];
  dutyList: any[];
}
