import React, { useState } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";

import Login from '../components/ui/Login';
import Signup from '../components/ui/SignUp';
import DashboardRoutes from './DashboardRoutes';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';


export default function AppRouter() {
    const [values] = useState(localStorage.getItem('token'));
    
    
    return (
        <Router>
            <div>
                
                <Switch> 
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ Login }
                        isAuthenticated={ !!values }
                    />

                    <PublicRoute 
                        exact 
                        path="/nuevo-usuario" 
                        component={ Signup }
                        isAuthenticated={ !!values }
                    />

                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={ DashboardRoutes } 
                        isAuthenticated={ !!values }
                    />
                    
                    
                    
                    <Redirect to="/" />  
                </Switch>
            </div>
        </Router>
    )


}
