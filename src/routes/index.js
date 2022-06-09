import React, { Component } from 'react'
import {  Switch, Route } from "react-router-dom";
import Login from '../pages/login/Login';
import DashboardRoute from './Dashboard.routes';





export default class index extends Component {
    render() {
        return (
            <Switch>
         <Route exact path="/" component={Login}/>
          <Route path="/dashboard">
            <DashboardRoute />
          </Route>
          
         
            </Switch>
        )
    }
}
