module.exports = {
  extends: ['taro/react'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-undef': 0, // 解决变量undefined的问题
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx'] }], // 解决 JSX not allowed in files with extension '.tsx
    'jsx-quotes': [2, 'prefer-double'], // jsx中使用双引号
    'import/first': 0, // 取消绝对引入必须要在相对引用的上面的警告或者错误提示
  }
};
