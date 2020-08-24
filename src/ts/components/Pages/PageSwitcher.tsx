import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ROUTES } from 'ts/constants';

import { CommonClassNamesPage } from './CommonClassNamesPage';
import { LinkListPage } from './LinkListPage';

export const PageSwitcher: React.FC = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={LinkListPage} />
      <Route path={ROUTES.CLASSNAMES} component={CommonClassNamesPage} />
      <Route>
        <Redirect to={ROUTES.HOME} />
      </Route>
    </Switch>
  );
};
