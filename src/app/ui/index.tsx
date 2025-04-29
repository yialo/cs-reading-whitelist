import * as React from 'react';
import * as ReactDomClient from 'react-dom/client';

import { DOM_ID } from '@/shared/config';

import { App } from './app';

export const init = () => {
  const rootNode = document.getElementById(DOM_ID.APP_ROOT);

  if (!rootNode) {
    return;
  }

  const appRoot = ReactDomClient.createRoot(rootNode);
  const app = (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  appRoot.render(app);
};
