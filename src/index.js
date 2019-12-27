import '@csstools/normalize.css';
import '@/css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './js/components/App/App.jsx';

const init = () => {
  ReactDOM.render(
      <App />,
      document.getElementById('react-app')
  );
};

window.addEventListener('DOMContentLoaded', init);
