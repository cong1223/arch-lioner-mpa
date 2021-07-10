import Taro, { Chain, request } from '@tarojs/taro';
import codeMessage from './codeMessage';

enum HTTP_STATUS {
  SUCCESS = 200,
  CREATED = 201,
  ACCEPTED = 202,
  CLIENT_ERROR = 400,
  AUTHENTICATE = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504
}

let REQUEST_NUM = 0;
let TIME: NodeJS.Timeout | null;

export const interceptor = (chain: Chain) => {
  increaseRequest();
  const requestParams = chain.requestParams;
  const errorData = { data: { errcode: 1, errmsg: '', data: null } };
  return chain
    .proceed(requestParams)
    .then(
      (
        res: request.SuccessCallbackResult<{
          code: number;
          message: string;
          data: any;
        }>
      ) => {
        reduceRequest();
        // 先判断http请求状态码
        if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
          errShowToast('404->资源找不到');
        } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
          errShowToast('502->服务端问题');
        } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
          errShowToast('403->Forbidden');
        } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
          errShowToast('401->Unauthorized');
        } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
          // 再判断后端接口返回的状态码
          if (res.data.code === 200) {
            return res;
          } else if (codeMessage[res.data.code]) {
            errShowToast(`errorcode->${codeMessage[res.data.code]}`);
          }
        } else {
          errShowToast('statusError->服务器错误，请稍后重试');
        }
        return res;
      }
    )
    .catch(() => {
      reduceRequest();
      errShowToast('request:fail->接口请求超时失败');
      return errorData;
    });
};

const errShowToast = (message: string) => {
  isHideLoading();
  if (TIME) {
    REQUEST_NUM -= 1;
    clearTimeout(TIME);
    TIME = null;
  }
  Taro.showToast({
    title: message,
    icon: 'none',
    duration: 2000
  });
  setTimeout(() => {
    isShowLoading();
  }, 1500);
};

const isHideLoading = () => {
  if (REQUEST_NUM > 0) {
    Taro.hideLoading();
  }
};

const isShowLoading = () => {
  if (REQUEST_NUM > 0) {
    Taro.showLoading();
  }
};

const increaseRequest = () => {
  if (REQUEST_NUM === 0) {
    Taro.showLoading();
  }
  REQUEST_NUM += 1;
};

const reduceRequest = () => {
  TIME = setTimeout(() => {
    REQUEST_NUM -= 1;
    if (REQUEST_NUM === 0) {
      Taro.hideLoading();
    }
  }, 300);
};
