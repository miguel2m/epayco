import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { fetchSinToken } from '../../helper/fetchRest';
import validator from 'validator';
import Swal from 'sweetalert2';

export default function Login() {
    
    const [formValues, handleInputChange] = useForm({
        email: ''
    });


    const {  email } = formValues;

    const handleSubmit = async(e) =>{
        e.preventDefault();
        formValid();
        //return Swal.fire('Error', 'Las contraseñas deben de ser iguales','error');
        const resp = await fetchSinToken( 'login', { email }, 'POST' );
        const body = await resp.json();
        console.log(body)
        if(body.ok){
            localStorage.setItem('email', body.token );
            localStorage.setItem('token', body.token ); //LocalStorage del token
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