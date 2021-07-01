import { ReactNode } from 'react';
import 'taro-ui/dist/style/index.scss';
import './index.scss';
import './assets/theme/custom-theme.scss';
import './assets/theme/taro-ui.css';

const App: ReactNode = (props: { children: ReactNode }) => {
  return props.children;
};

export default App;
