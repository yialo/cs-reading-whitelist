import ReactDOM from 'react-dom';

import { App } from './c_app';

export const init = (): void => {
  const $rootNode = document.getElementById('app-root');
  ReactDOM.render(<App />, $rootNode);
};
