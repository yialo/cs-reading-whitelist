import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ROUTES } from 'ts/constants';

import { LazyLinkListPage, LazyNamingPage } from './lazy';

export const PageSwitcher: React.FC = () => {
  return (
    <Suspense fallback="Загружаем страницу...">
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <LazyLinkListPage />
        </Route>

        <Route path={ROUTES.NAMING} exact>
          <LazyNamingPage />
        </Route>

        <Route>
          <Redirect to={ROUTES.HOME} />
        </Route>
      </Switch>
    </Suspense>
  );
};
