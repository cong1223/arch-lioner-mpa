export type IUrls = {
  BASE_URL: string
}
import Taro from '@tarojs/taro';
import systemConfig from './system';

const accountInfo = Taro.getAccountInfoSync();
const MPA_APP_ID = accountInfo.miniProgram.appId;

let BASE_URL: string;
if (MPA_APP_ID === systemConfig.HZZK_APPID) {
  BASE_URL = "https://hzzk.archlioner.com/hzzk-portal";
} else {
  BASE_URL = "https://test.archlioner.com/hzzk-portal";
}
const urls: IUrls = {
  BASE_URL,
};
export default urls;
