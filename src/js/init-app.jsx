import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/WithStore.jsx';

export default () => {
  const $root = document.getElementById('app-root');
  const app = (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  ReactDOM.render(app, $root);
};
