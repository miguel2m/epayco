import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Login from '../components/ui/Login';
import Signup from '../components/ui/SignUp';
import DashboardRoutes from './DashboardRoutes';

export default function AppRouter() {
    return (
        <Router>
            <div>
                
                <Switch> 
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/nuevo-usuario" component={ Signup } />
                    <Route path="/" component={ DashboardRoutes } />
                </Switch>
            </div>
        </Router>
    )
}
