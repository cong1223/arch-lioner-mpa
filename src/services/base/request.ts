import Taro from '@tarojs/taro';
import { interceptor } from './interceptor';
import Keys from '../../constants/StorageConstants';
import { IUser } from '../../model/userEntity';

Taro.addInterceptor(interceptor);

interface options<T> {
  url: string;
  data?: T;
  baseUrl?: string;
  header?: any;
  method:
    | 'GET'
    | 'OPTIONS'
    | 'HEAD'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'TRACE'
    | 'CONNECT';
}

type baseHeaderOptions = {
  'X-User-Agent': string,
  'X-Ent'?: string,
  'X-Access-Token'?: string
}

export interface IRequest {
  get<T, R>(url: string, data?: T, baseUrl?: string, header?: any): Taro.RequestTask<R>
  post<T, R>(url: string, data?: T, baseUrl?: string, header?: any): Taro.RequestTask<R>
  put<T, R>(url: string, data?: T, baseUrl?: string, header?: any): Taro.RequestTask<R>
  delete<T, R>(url: string, data?: T, baseUrl?: string, header?: any): Taro.RequestTask<R>
}

const create = <T, R>({
  url,
  data,
  baseUrl,
  header,
  method
}: options<T>): Taro.RequestTask<R> => {
  const baseHeaderOptions: baseHeaderOptions = { 'X-User-Agent': 'mini' };
  const token: string = Taro.getStorageSync(Keys.accessToken);
  const enterpriseId = Taro.getStorageSync(Keys.user) && (JSON.parse(Taro.getStorageSync('user')) as IUser).curEnterpriseId;
  if (token) baseHeaderOptions['X-Access-Token'] = token;
  if (enterpriseId) baseHeaderOptions['X-Ent'] = enterpriseId;
  const options = {
    url: `${baseUrl}${url}`,
    data,
    method,
    header: Object.assign(baseHeaderOptions, header)
  };
  return Taro.request(options);
};

const request: IRequest = {
  get: <T, R>(
    url: string,
    data?: T,
    baseUrl?: string,
    header?: any
  ): Taro.RequestTask<R> => {
    return create<T, R>({ url, data, baseUrl, header, method: 'GET' });
  },
  post: <T, R>(
    url: string,
    data?: T,
    baseUrl?: string,
    header?: any
  ): Taro.RequestTask<R> => {
    return create<T, R>({ url, data, baseUrl, header, method: 'POST' });
  },
  put: <T, R>(
    url: string,
    data?: T,
    baseUrl?: string,
    header?: any
  ): Taro.RequestTask<R> => {
    return create<T, R>({ url, data, baseUrl, header, method: 'PUT' });
  },
  delete: <T, R>(
    url: string,
    data?: T,
    baseUrl?: string,
    header?: any
  ): Taro.RequestTask<R> => {
    return create<T, R>({ url, data, baseUrl, header, method: 'DELETE' });
  }
};

export default request;
