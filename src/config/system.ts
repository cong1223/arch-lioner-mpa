import Taro from '@tarojs/taro';

const accountInfo = Taro.getAccountInfoSync();
const MPA_APP_ID = accountInfo.miniProgram.appId;
const HZZK_APPID = 'wxe0e42f96b5ec7550';
const TEST_APPID = 'wxc36af02e952e4da6';
let DOMAIN;
if (MPA_APP_ID === HZZK_APPID) {
  DOMAIN="https://archlioner.com";
} else {
  DOMAIN="https://dev.archlioner.com";
}
export default {
  HZZK_APPID, // 正式服appid
  TEST_APPID, // 测试服(智库信息)appid
  DOMAIN
}
