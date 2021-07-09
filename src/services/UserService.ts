import { IGetTokenParams, getTokenRes } from 'src/model/api/getToken';
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
}

export default new UserService();
