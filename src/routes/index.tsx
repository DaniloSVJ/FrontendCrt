import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Dashboard from '../pages/Dashboard/index';
// import Repository from '../pages/Repository/index';
import PDV from '../pages/PDV/index';
// Switch vai garantir que apenas uma rota seja visivel
const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={PDV} />
        {/* <Route path="/" exact component={Dashboard} />
        <Route path="/repositories/:repository+" component={Repository} /> */}
    </Switch>
);

export default Routes;
