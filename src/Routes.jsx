import React from 'react';
import {
  Route, BrowserRouter, Switch,
} from 'react-router-dom';

import Dashboard from './scenes/dashboard/Dashboard';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
