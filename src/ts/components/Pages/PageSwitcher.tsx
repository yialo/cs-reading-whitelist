import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ROUTES } from 'ts/constants';

// import { ClassNamesPage } from './ClassNamesPage';
import { LinkListPage } from './LinkListPage';

const Stub: React.FC = () => {
  const style = {
    marginTop: '0',
    marginBottom: '0',
    padding: '1rem 2rem',
    fontSize: '2rem',
    fontStyle: 'italic',
    color: '#777777',
  };

  return (
    <div>
      <p style={style}>Under construction</p>
    </div>
  );
};

export const PageSwitcher: React.FC = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={LinkListPage} />
      <Route path={ROUTES.CLASSNAMES} component={Stub} />
      <Route>
        <Redirect to={ROUTES.HOME} />
      </Route>
    </Switch>
  );
};
