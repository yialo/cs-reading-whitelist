import ReactDOM from 'react-dom/client';

import { App } from './c_app';

export const init = (): void => {
  const $rootNode = document.getElementById('app-root');

  if (!$rootNode) {
    return;
  }

  const appRoot = ReactDOM.createRoot($rootNode);
  appRoot.render(<App />);
};
