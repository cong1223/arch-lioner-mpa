import { ReactNode } from 'react';
import 'taro-ui/dist/style/index.scss';
import './index.scss';

const App: ReactNode = (props: { children: ReactNode }) => {
  return props.children;
};

export default App;
