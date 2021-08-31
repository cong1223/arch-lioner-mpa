import { IGetProjectListParams, IPageInfo } from 'src/model/api/getProjectList';
import BaseService from './base/BaseService';

class ProjectService extends BaseService {
  constructor() {
    super();
  }

  /**
   * 获取token
   */
  getProjectList(params: IGetProjectListParams) {
    return this.output<IPageInfo>(
      this.request.get<IGetProjectListParams, IPageInfo>(
        '/v2/proInfo/getProList',
        params,
        this.urls.BASE_URL
      )
    );
  }
}

export default new ProjectService();
