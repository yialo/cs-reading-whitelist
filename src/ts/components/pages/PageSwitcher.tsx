import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ROUTES } from 'ts/constants';

import { NamingPage } from './naming';
import { LinkListPage } from './link-list';

export const PageSwitcher: React.FC = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={LinkListPage} />
      <Route path={ROUTES.NAMING} component={NamingPage} />
      <Route>
        <Redirect to={ROUTES.HOME} />
      </Route>
    </Switch>
  );
};
