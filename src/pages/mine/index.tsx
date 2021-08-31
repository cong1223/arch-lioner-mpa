import { FC, useState, useRef, MutableRefObject, useMemo } from 'react';
import { View, Text, Picker } from '@tarojs/components';
import { AtAvatar, AtList, AtListItem } from 'taro-ui';
import './index.scss';
import contactIcon from '@/assets/image/mine/icon_contact.png';
import feedbackIcon from '@/assets/image/mine/icon_feedback.png';
import aboutIcon from '@/assets/image/mine/icon_aboutzky.png';
import shareIcon from '@/assets/image/mine/icon_share.png';
import defaultAvatar from '@/assets/image/mine/default-avatar.png';
import AuthModal from '../../components/AuthModal';
import { IGlobalRef } from '../../model/global';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';

const Mine: FC = () => {
  const loginPromiseFunc: Promise<boolean> = useSelector(
    (state: RootState) => state.global.loginPromise
  );
  const userInfo = useSelector(
    (state: RootState) => state.user.userInfo
  );
  const currentEntId = useSelector((state: RootState) => state.enterprise.currentEntId);
  const enterpriseList = useSelector((state: RootState) => state.enterprise.enterpriseList);
  const currentEntName = useMemo(() => {
    return enterpriseList?.find(item => {
      return item.enterpriseId === currentEntId;
    })?.enterpriseName;
  }, [currentEntId]);
  const [isBind, setIsBind] = useState(false);
  const authModalRef = useRef() as MutableRefObject<IGlobalRef>;

  const onEntChange = e => {
    console.log('ent changed', e);
  };
  const handleClick = () => {
    console.log('handleClick');
  };

  loginPromiseFunc.then(bind => {
    setIsBind(bind);
  });

  return (
    <View className="page-container">
      <AuthModal ref={authModalRef} />
      <View className="header-container">
        {isBind ? (
          <>
            <AtAvatar
              circle
              className="avatar"
              image={userInfo?.avatar}
            />
            <Text className="user-name">{userInfo?.realname}</Text>
            <Text className="enterprise-name">{currentEntName}</Text>
            <Picker
              mode="selector"
              range={enterpriseList}
              rangeKey="enterpriseName"
              onChange={onEntChange}
            >
              <Text className="change-ent-btn">切换企业</Text>
            </Picker>
          </>
        ) : (
          <>
            <AtAvatar circle className="avatar" image={defaultAvatar} />
            <View
              className="login-tip"
              onClick={() => authModalRef.current.open()}
            >
              Hi~,您还没有登录,<Text>点击登录</Text>
            </View>
          </>
        )}
      </View>
      <AtList className="list-container">
        <AtListItem
          title="通讯录"
          arrow="right"
          thumb={contactIcon}
          onClick={handleClick}
        />
        <AtListItem
          title="帮助与反馈"
          arrow="right"
          thumb={feedbackIcon}
          onClick={handleClick}
        />
        <AtListItem
          title="关于营造狮"
          arrow="right"
          thumb={aboutIcon}
          onClick={handleClick}
        />
        <AtListItem
          title="分享应用"
          arrow="right"
          thumb={shareIcon}
          onClick={handleClick}
        />
      </AtList>
    </View>
  );
};

export default Mine;
