import React, { useContext } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import Login from '../components/ui/Login';
import Signup from '../components/ui/SignUp';

import Articulos from '../components/Dashboard/Articulos';
import ConsultarSaldo from '../components/Dashboard/ConsultarSaldo';
import RecargarSaldo from '../components/Dashboard/RecargarSaldo';
import { Navbar } from '../components/ui/Navbar';



export default function AppRouter() {
    const { user } = useContext(AuthContext );
    
    
    return (
        <Router>
            <div>
            <Navbar />
                <div className="container mt-2">
                <Switch> 
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ Login }
                        isAuthenticated={ user.logged }
                    />
                    
                    <PublicRoute 
                        exact 
                        path="/nuevo-usuario" 
                        component={ Signup }
                        isAuthenticated={ user.logged }
                    />

                    <PrivateRoute 
                        exact 
                        path="/catalogo" 
                        component={ Articulos   }
                        isAuthenticated={ user.logged }
                    />

                    <PrivateRoute 
                        exact 
                        path="/consultar-saldo" 
                        component={ ConsultarSaldo  }
                        isAuthenticated={ user.logged }
                    />

                    <PrivateRoute 
                        exact 
                        path="/recargar-saldo" 
                        component={ RecargarSaldo  }
                        isAuthenticated={ user.logged }
                    />


                    <Redirect to="/login" />

                </Switch>
                </div>
            </div>
        </Router>
    )


}
