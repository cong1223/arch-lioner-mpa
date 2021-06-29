// https://github.com/iconfont-cli/taro-iconfont-cli
import { useGlobalIconFont } from './components/iconfont/helper';

export default {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  usingComponents: Object.assign(useGlobalIconFont()),
  pages: [
    'pages/mine/index',
    'pages/project/index',
    'pages/workflow/index',
    'pages/disk/index',
  ],
  tabBar: {
    color: '#bfbfbf',
    selectedColor: '#424143',
    backgroundColor: '#FBFBFB',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/project/index',
        text: '项目中心',
        iconPath: './assets/image/tabBar/project.png',
        selectedIconPath: './assets/image/tabBar/project-active.png'
      },
      {
        pagePath: 'pages/workflow/index',
        text: '流程中心',
        iconPath: './assets/image/tabBar/workflow.png',
        selectedIconPath: './assets/image/tabBar/workflow-active.png'
      },
      {
        pagePath: 'pages/disk/index',
        text: '我的网盘',
        iconPath: './assets/image/tabBar/disk.png',
        selectedIconPath: './assets/image/tabBar/disk-active.png'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: './assets/image/tabBar/mine.png',
        selectedIconPath: './assets/image/tabBar/mine-active.png'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#424143',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  }
};
