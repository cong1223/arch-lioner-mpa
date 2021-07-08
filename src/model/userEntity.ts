export interface IUnknowObject {
  [key: string]: any;
}

export interface ILoginFormData extends IUnknowObject {
  username: string;
  password: string;
}
export interface UserInfo {
  activitiSync: string;
  avatar?: any;
  birthday?: any;
  createBy?: any;
  createTime: number;
  curEnterpriseId: string;
  email?: any;
  id: string;
  openId?: any;
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

export interface VipLevel {
  caNum: number;
  cdcVipLevel: string;
  cost?: any;
  createBy: string;
  createTime?: any;
  customerType: string;
  deadline: number;
  diskCapacity: string;
  entVipLevel: string;
  enterpriseId: string;
  id: string;
  isCloud: string;
  numPeople: string;
  personName?: any;
  price?: any;
  updateBy?: any;
  updateTime: number;
  userId?: any;
  userVipLevel: string;
}

export interface EnterpriseVoList {
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
  status: string;
  updateBy?: any;
  updateTime: number;
  userDuties?: any;
  userId: string;
  userSpecialties?: any;
}

export interface ILoginResponseEntity {
  userInfo: UserInfo;
  vipLevel: VipLevel;
  enterpriseVoList: EnterpriseVoList[];
  personVipLevel?: any;
  token: string;
}
