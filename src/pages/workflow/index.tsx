import { FC } from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';

import 'taro-ui/dist/style/components/button.scss'; // 按需引入
import './index.scss';

const Workflow: FC = () => {
  return (
    <View>
      <Text>流程中心</Text>
    </View>
  );
};

export default Workflow;
