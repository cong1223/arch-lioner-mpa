import { IGetTokenParams, getTokenRes } from 'src/model/api/getToken';
import { IUserInfoDetail } from 'src/model/api/getUserInfo';
import BaseService from './base/BaseService';

class UserService extends BaseService {
  constructor() {
    super();
  }

  /**
   * 获取token
   */
  getToken(params: IGetTokenParams) {
    return this.output<getTokenRes>(
      this.request.post<IGetTokenParams, getTokenRes>(
        '/weChat/save',
        params,
        this.urls.BASE_URL
      )
    );
  }

  /**
   * 获取用户具体信息
   */
  getUserInfo() {
    return this.output<IUserInfoDetail>(
      this.request.get<null, IUserInfoDetail>(
        '/sys/user/getDetailUserInfo',
        null,
        this.urls.BASE_URL
      )
    );
  }
}

export default new UserService();
