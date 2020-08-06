import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { Navbar } from '../components/ui/Navbar'
import ConsultarSaldo from '../components/Dashboard/ConsultarSaldo'
import RecargarSaldo from '../components/Dashboard/RecargarSaldo'
import Pagar from '../components/Dashboard/Pagar';
import Articulos from '../components/Dashboard/Articulos';


export default function DashboardRoutes() {
    return (
        <>
            <Navbar/>
            <div className="container mt-2">
            <Switch> 
                    <Route path="/catalogo" component={ Articulos } />        
                    <Route path="/pagar" component={ Pagar } />
                    <Route path="/consultar-saldo" component={ ConsultarSaldo } />
                    <Route path="/recargar-saldo" component={ RecargarSaldo } />
                    <Redirect to="/catalogo" />
                </Switch>
            </div>
        </>
    )
}
