import { FC, useState, useRef, MutableRefObject } from 'react';
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

const Mine: FC = () => {
  const [currentEnt] = useState<string>('中国美术学院风景建筑设计研究院');
  const [enterpriseList] = useState(['中国美术学院风景建筑设计研究院']);
  const [isBind] = useState(false);
  const authModalRef = useRef() as MutableRefObject<IGlobalRef>;
  const onEntChange = e => {
    console.log('ent changed', e);
  };
  const handleClick = () => {
    console.log('handleClick');
  };
  return (
    <View className="page-container">
      <AuthModal ref={authModalRef} />
      <View className="header-container">
        {isBind ? (
          <>
            <AtAvatar
              circle
              className="avatar"
              image="https://storage.360buyimg.com/mtd/home/111543234387022.jpg"
            />
            <Text className="user-name">高姿态</Text>
            <Text className="enterprise-name">{currentEnt}</Text>
            <Picker
              mode="selector"
              range={enterpriseList}
              onChange={onEntChange}
            >
              <Text className="change-ent-btn">切换企业</Text>
            </Picker>
          </>
        ) : (
          <>
            <AtAvatar circle className="avatar" image={defaultAvatar} />
            <View className="login-tip" onClick={() => authModalRef.current.open()}>
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
