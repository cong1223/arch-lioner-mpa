import request, { IRequest } from './request';
import urls, { IUrls } from '../../config/uri';
import { IServiceResponse } from './types';
import Taro from '@tarojs/taro';

class BaseService {
  protected request: IRequest;
  protected urls: IUrls;
  constructor() {
    this.request = request;
    this.urls = urls;
  }
  output<R>(promise: Taro.RequestTask<R>) {
    return new Promise<IServiceResponse<R>>((resolve, reject) => {
      promise.then(
        // @ts-ignore
        (resp: Taro.request.SuccessCallbackResult<IServiceResponse<R>>) => {
          resolve(resp.data)
        }
      );
    });
  }
}

export default BaseService;
