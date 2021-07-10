import { ReactNode, createContext } from 'react';
import 'taro-ui/dist/style/index.scss';
import './index.scss';
import Taro from '@tarojs/taro';
import UserService from './services/UserService';
import { Provider } from 'react-redux';
import configStore from './store';
import { setLoginPromise } from './store/actions/globalActions';
import { setUserInfo, setAccessToken } from './store/actions/userActions';

const store = configStore();

const loginPromise = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    Taro.login({
      success: function (loginRes) {
        const { code } = loginRes;
        if (loginRes.code) {
          Taro.getUserInfo({
            success: function (userInfoRes) {
              const { encryptedData, iv } = userInfoRes;
              UserService.getToken({ encryptedData, iv, code })
                .then(res => {
                  resolve(true);
                  const { result } = res;
                  store.dispatch(setUserInfo(result.user));
                  store.dispatch(setAccessToken(result.accessToken));
                })
                .catch(e => {
                  resolve(false);
                  console.log('登录失败', e);
                });
            }
          });
        } else {
          reject(false);
        }
      },
      fail: res => reject(false)
    });
  });
};

store.dispatch(setLoginPromise(loginPromise()));

const App: ReactNode = (props: { children: ReactNode }) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default App;
