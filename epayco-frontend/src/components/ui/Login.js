import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { fetchSinToken } from '../../helper/fetchRest';
import validator from 'validator';
import Swal from 'sweetalert2';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export default function Login({history}) {
    const { dispatch } = useContext( AuthContext );
    const [formValues, handleInputChange] = useForm({
        email: ''
    });


    const {  email } = formValues;

    const handleSubmit =async (e) =>{
        e.preventDefault();
        formValid();
        //return Swal.fire('Error', 'Las contraseñas deben de ser iguales','error');
        const resp = await fetchSinToken( 'login', { email }, 'POST' );
        const body = await resp.json();
        console.log(body)
        if(body.ok){
            localStorage.setItem('user2', JSON.stringify( body.user) );
            localStorage.setItem('token', body.token ); //LocalStorage del token
            const lastPath = localStorage.getItem('lastPath') || '/catalogo';
            dispatch({
                type: types.login,
                payload: {
                    name: body.user.nombre
                }
            });
            history.replace(lastPath)
            window.location.reload();

        }else{
            console.log(body.error)
            return Swal.fire('Error',body.error,'error');
        }

    }
    const formValid = ()=>{
        if(!validator.isEmail( email)){
            return Swal.fire('Error', 'Email incorrecto','error');
        }
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
                                    <label>Email</label>
                                    <input
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
                                    
                                    
                                        Iniciar sesion
                                    
                                </button>  
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            


        </div>
    )
}