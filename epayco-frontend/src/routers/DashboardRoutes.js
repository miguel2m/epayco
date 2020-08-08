import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import Articulos from '../components/Dashboard/Articulos';
import ConsultarSaldo from '../components/Dashboard/ConsultarSaldo';
import RecargarSaldo from '../components/Dashboard/RecargarSaldo';

import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {


    return (
        <>
           
        
        <div className="container mt-2">
            <Switch>
                <Route exact path="/catalogo" component={ Articulos } />
                <Route exact path="/consultar" component={ ConsultarSaldo } />
                <Route exact path="/recargar-saldo" component={ RecargarSaldo } />
                
                <Redirect to="/catalogo" />
                    
            </Switch>
        </div>

        </>
    )
}
