import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ROUTES } from 'ts/constants';

import { LazyNamingPage } from './lazy';
import { LinkListPage } from './link-list';

export const PageSwitcher: React.FC = () => {
  return (
    <Suspense fallback="Загружаем страницу...">
      <Switch>
        <Route exact path={ROUTES.HOME} component={LinkListPage} />
        <Route path={ROUTES.NAMING} component={LazyNamingPage} />
        <Route>
          <Redirect to={ROUTES.HOME} />
        </Route>
      </Switch>
    </Suspense>
  );
};
