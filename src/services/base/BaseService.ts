import request, { IRequest } from './request';
import urls, { IUrls } from '../../config/uri';
import { TaroResponse } from './types';
import Taro from '@tarojs/taro';

class BaseService {
  protected request: IRequest;
  protected urls: IUrls;
  constructor() {
    this.request = request;
    this.urls = urls;
  }
  static output<R>(promise: Taro.RequestTask<R>, isTotal = false) {
    return new Promise<R>((resolve, reject) => {
      promise.then(
        (resp: Taro.request.SuccessCallbackResult ) => {
          console.log('====', resp.data)
        },
        // (resp: TaroResponse<R>) => {
        //   reject(resp.data);
        // }
      );
    });
  }
}

export default BaseService;
