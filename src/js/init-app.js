import React from 'react';
import ReactDOM from 'react-dom';

import App from '#components/App.jsx';
import subjects from '#json/subjects.json';

export default () => {
  ReactDOM.render(
      <App list={subjects.entries} />,
      document.getElementById('react-app')
  );
};
