import React from 'react'
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import PrivateRoute from "./privateRoute";
import {useEffect} from "react";
import { useHistory } from 'react-router-dom';

import Home from '../pages/homepage/Home';
import Transfer from '../pages/transfer/Transfer';

function App() {

  const { path } = useRouteMatch();

  return (
    <Switch>
      <Dashboard>
        <Route
          component={({ match }) => (
            <>
              <PrivateRoute exact path={path} component={Home} />
              <PrivateRoute
                exact
                path={`${path}/approvedtransfer`}
                component={Transfer}
              />
             
             
            </>
          )}
        />
      </Dashboard>
    </Switch>
  );
}

export default App;
