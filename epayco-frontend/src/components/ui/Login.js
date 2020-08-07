import React from 'react'
import { Link } from 'react-router-dom';

export default function Login({history}) {
    const handleLogin = () => {
         // history.push('/');
         history.replace('/');
    }
    return (
        
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <div className="card justify-content-md-center" style={{ maxWidth: 540 }}>
                <div className="row no-gutters">
                    <div className="col">

                        <div className="card-body ">
                            <h5 className="card-title"> asdasd</h5>
                            <p className="card-text"> asdasdasd </p> 
                                
                            <p className="card-text"> asdasdads </p>            

                            <p className="card-text">
                                <small className="text-muted">asdasdasd </small>
                            </p>
                            <p className="card-text">
                                <Link to={ `./nuevo-usuario` }>
                                    Nuevo usuario?
                                </Link>
                            </p>
                            <button
                                className="btn btn-primary"
                                onClick={handleLogin}
                            >
                                Login
                            </button>

                            

                        </div>

                    </div>
                </div>
            </div>
            
            


        </div>
    )
}