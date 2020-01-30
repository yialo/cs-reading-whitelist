import React from 'react';
import ReactDOM from 'react-dom';

import App from '#components/App.jsx';
import subjects from '#json/subjects.json';

export default () => {
  const $overlay = document.getElementById('page-overlay');
  const $root = document.getElementById('app-root');
  const app = React.createElement(App, { list: subjects.data });

  ReactDOM.render(app, $root);
  $overlay.classList.add('js-hidden');
};
