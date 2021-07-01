import { FC, useState } from 'react';
import { View, Text, Picker } from '@tarojs/components';
import { AtAvatar, AtList, AtListItem } from 'taro-ui';
import './index.scss';
import contactIcon from '@/assets/image/mine/icon_contact.png';

const Mine: FC = () => {
  const [currentEnt] = useState<string>('中国美术学院风景建筑设计研究院');
  const [enterpriseList] = useState(['中国美术学院风景建筑设计研究院']);
  const onEntChange = e => {
    console.log('ent changed', e);
  };
  return (
    <View className="page-container">
      <View className="header-container">
        <AtAvatar
          circle
          className="avatar"
          image="https://storage.360buyimg.com/mtd/home/111543234387022.jpg"
        />
        <Text className="user-name">高姿态</Text>
        <Text className="enterprise-name">{currentEnt}</Text>
        <Picker mode="selector" range={enterpriseList} onChange={onEntChange}>
          <Text className="change-ent-btn">切换企业</Text>
        </Picker>
      </View>
      <AtList className="list-container">
        <AtListItem
          title="标题文字"
          note="描述信息"
          arrow="right"
          thumb={contactIcon}
        />
        <AtListItem
          title="标题文字"
          note="描述信息"
          extraText="详细信息"
          arrow="right"
          iconInfo={{ size: 25, color: '#FF4949', value: 'bookmark' }}
        />
      </AtList>
    </View>
  );
};

export default Mine;
