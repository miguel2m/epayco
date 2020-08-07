import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export default function Login({history}) {
    
    const [formValues, handleInputChange] = useForm({
        email: ''
    });

    /*const handleLogin = () => {
        // history.push('/');
        history.replace('/');
   }*/

    const {  email } = formValues;

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues);
        history.replace('/');
    }
    return (
        
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <div className="card justify-content-md-center" style={{ maxWidth: 540 }}>
                <div className="row no-gutters">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <div className="card-body ">
                                <div className="form-group">
                                    <input
                                        required="true"
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email"
                                        autoComplete="off"
                                        value={email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <p className="card-text">
                                    <Link to={ `./nuevo-usuario` }>
                                        Nuevo usuario?
                                    </Link>
                                </p>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    //onClick={handleLogin}
                                >
                                    Login
                                </button>  
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            


        </div>
    )
}