import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { LinkListPage } from './LinkList';

export const PageSwitcher: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={LinkListPage} />
      <Route path="/classnames" render={() => <div>Classnames</div>} />
    </Switch>
  );
};
