import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';
import { Button } from '@tarojs/components';
import { useState, FC, forwardRef, useImperativeHandle } from 'react';
import Taro from '@tarojs/taro';
import UserService from '../../services/UserService';

const AuthModal: FC<any> = forwardRef((props, ref) => {
  const [isOpened, setIsOpened] = useState(false);

  useImperativeHandle(ref, () => ({
    open: (): void => setIsOpened(true),
    close: (): void => setIsOpened(false)
  }));

  const getUserInfo = (e) => {
    Taro.login({
      success: function (loginRes) {
        const { code } = loginRes;
        if (loginRes.code) {
          Taro.getUserInfo({
            success: function(userInfoRes) {
              const { encryptedData, iv } = userInfoRes;
              UserService.getToken({encryptedData, iv, code}).then(res => {
                console.log('11111', res);
                // Taro.setStorageSync('accessToken', data.result.accessToken); // 保存accessToken
                // Taro.setStorageSync(
                //   'user',
                //   JSON.stringify(res.result.user)
                // );
              })
            }
          })
        } else {
          console.log('登录失败！')
        }
      }
    })
  }

  return (
    <AtModal isOpened={isOpened}>
      <AtModalHeader>授权登录</AtModalHeader>
      <AtModalContent>登录使用营造狮</AtModalContent>
      <AtModalAction>
        <Button onClick={() => setIsOpened(false)}>取消</Button>
        <Button
          openType="getUserInfo"
          onGetUserInfo={getUserInfo}
        >确定</Button>
      </AtModalAction>
    </AtModal>
  );
});

export default AuthModal;