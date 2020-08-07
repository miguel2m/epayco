import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to={ `./` }
            >
                Epayco
            </Link>
   

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to={ `./catalogo` }
                    >
                        Catalogo
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to={ `./consultar-saldo` }
                    >
                        Consultar
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to={ `./recargar-saldo` }
                    >
                        Recargar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <button 
                        className="btn btn-outline-danger"
                        onClick={ handleLogout }
                    >
                        <i className="fas fa-sign-out-alt"></i>
                        <span> Salir</span>
                    </button>
                </ul>
            </div>
        </nav>
    )
}