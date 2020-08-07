import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Navbar } from '../components/ui/Navbar'
import ConsultarSaldo from '../components/Dashboard/ConsultarSaldo'
import RecargarSaldo from '../components/Dashboard/RecargarSaldo'
import Pagar from '../components/Dashboard/Pagar';
import Articulos from '../components/Dashboard/Articulos';
import { PrivateRoute } from './PrivateRoute';


export default function DashboardRoutes() {
    const [values] = useState(localStorage.getItem('token'));
    return (
        <>
            <Navbar/>
            <div className="container mt-2">
            <Switch> 
                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={ Articulos } 
                        isAuthenticated={ !!values }
                    />
                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={ Pagar } 
                        isAuthenticated={ !!values }
                    />
                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={ ConsultarSaldo } 
                        isAuthenticated={ !!values }
                    />
                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={ RecargarSaldo } 
                        isAuthenticated={ !!values }
                    />
                    <Redirect to="/catalogo" />
                </Switch>
            </div>
        </>
    )
}
