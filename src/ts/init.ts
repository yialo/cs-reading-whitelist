import { createElement } from 'react';
import ReactDOM from 'react-dom';

import { HotRoot } from './Root';

export const init = (): void => {
  const reactRoot = createElement(HotRoot);
  const $rootNode = document.getElementById('app-root');
  ReactDOM.render(reactRoot, $rootNode);
};
