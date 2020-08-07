import React, { useState } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";

import Login from '../components/ui/Login';
import Signup from '../components/ui/SignUp';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import Articulos from '../components/Dashboard/Articulos';
import ConsultarSaldo from '../components/Dashboard/ConsultarSaldo';
import RecargarSaldo from '../components/Dashboard/RecargarSaldo';
import { Navbar } from '../components/ui/Navbar';


export default function AppRouter() {
    const [values] = useState(localStorage.getItem('token'));
    
    
    return (
        <Router>
            <div>
                <Navbar/>
                <div className="container mt-2">
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
                        path="/catalogo" 
                        component={ Articulos } 
                        isAuthenticated={ !!values }
                    />
                    
                    <PrivateRoute 
                        exact 
                        path="/consultar-saldo" 
                        component={ ConsultarSaldo } 
                        isAuthenticated={ !!values }
                    />
                    <PrivateRoute 
                        exact 
                        path="/recargar-saldo" 
                        component={ RecargarSaldo } 
                        isAuthenticated={ !!values }
                    />
                    
                    <Redirect to="/catalogo" />  
                </Switch>
                </div>
            </div>
        </Router>
    )


}
