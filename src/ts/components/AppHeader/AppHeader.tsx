import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import style from './style.scss';

export const AppHeader = (props) => {
  return (
    <header className={classNames(style.root, classNames)}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/classnames">Classnames</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

AppHeader.defaultProps = {
  className: '',
};
