import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ROUTES } from 'ts/constants';

import { LinkListPage } from './LinkListPage';

export const PageSwitcher: React.FC = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={LinkListPage} />
      <Route path={ROUTES.CLASSNAMES} render={() => <div>Classnames</div>} />
      <Route>
        <Redirect to={ROUTES.HOME} />
      </Route>
    </Switch>
  );
};
