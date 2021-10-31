import * as React from 'react';
import ReactDOM from 'react-dom';

import { HotApp } from './self';

export const init = (): void => {
  const $rootNode = document.getElementById('app-root');
  ReactDOM.render(<HotApp />, $rootNode);
};
