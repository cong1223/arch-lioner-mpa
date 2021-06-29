module.exports = {
  'extends': ['taro/react'],
  'rules': {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-undef': 0, // 解决变量undefined的问题
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }], // 解决 JSX not allowed in files with extension '.tsx
  }
};
