import { shell, MenuItemConstructorOptions } from 'electron';

const Signature = 'com.archlioner';
const Menus: MenuItemConstructorOptions[] = [
  {
    // 对于 OSX 而言，应用菜单的第一个菜单项是应用程序的名字
    label: '营造狮',
    submenu: [
      {
        label: '网页版',
        role: 'help',
        submenu: [
          {
            label: '网页版',
            click: function() {
              shell.openExternal('https://www.archlioner.com');
            }
          }
        ]
      }
    ]
  },
  {
    label: '窗口',
    submenu: [
      {
        label: '退出',
        role: 'quit',
        accelerator: 'CmdOrCtrl+Q'
      },
      {
        label: '控制台',
        role: 'toggleDevTools',
        accelerator: 'F12'
      },
      {
        label: '重新加载',
        role: 'reload',
        accelerator: 'CmdOrCtrl+R'
      }
    ]
  }
];
export {
  Signature,
  Menus
};
