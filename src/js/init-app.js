import React from 'react';
import ReactDOM from 'react-dom';

import App from '#components/App.jsx';
import subjects from '#json/subjects.json';

export default () => {
  const $overlay = document.getElementById('page-overlay');

  ReactDOM.render(
      <App list={subjects.entries} />,
      document.getElementById('react-app')
  );

  $overlay.classList.add('js-hidden');
};
