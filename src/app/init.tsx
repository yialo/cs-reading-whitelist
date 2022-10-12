import * as React from 'react';
import * as ReactDomClient from 'react-dom/client';

import { App } from './ui/c_app';

export const init = () => {
  const $rootNode = document.getElementById('app-root');

  if (!$rootNode) {
    return;
  }

  const appRoot = ReactDomClient.createRoot($rootNode);
  const app = <React.StrictMode><App /></React.StrictMode>;
  appRoot.render(app);
};
