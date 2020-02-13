import React from 'react';
import ReactDOM from 'react-dom';

import AppContextContainer from './containers/AppContextContainer.jsx';
import subjects from '#json/subjects.json';

export default () => {
  const $overlay = document.getElementById('page-overlay');
  const $root = document.getElementById('app-root');
  const app = React.createElement(AppContextContainer, { list: subjects.data });

  ReactDOM.render(app, $root);
  $overlay.classList.add('js_hidden');
};
