import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Preloader } from 'ts/common/c_preloader';
import { ROUTES } from 'ts/constants';

import { LazyLinkListPage, LazyNamingPage } from './lazy';

export const PageSwitcher: React.FC = () => {
  return (
    <Suspense fallback={<Preloader />}>
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
