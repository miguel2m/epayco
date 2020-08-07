import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { fetchSinToken } from '../../helper/fetchRest';

export default function Signup({history}) {
    const [formValues, handleInputChange] = useForm({
        documento: '',
        nombre: '',
        email: '',
        celular: ''
    });

    
    

    const { documento,nombre, email,celular } = formValues;

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(formValues)
        const resp = await fetchSinToken( 'nuevo-usuario', { documento,nombre, email,celular }, 'POST' );
        const body = await resp.json();
        console.log(body)
        if(body.ok)
            history.replace('/');
        else{
            console.log(body.error)
        }
    }

    return (
        <div className="container mt-5">
            <h1>Registrar</h1>
            <hr />
            <div className="card justify-content-md-center" style={{ maxWidth: 540 }}>
                <div className="row no-gutters">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <div className="card-body ">
                                <div className="form-group">
                                    <label>Documento</label>
                                    <input
                                        
                                        type="text"
                                        name="documento"
                                        className="form-control"
                                        placeholder="Documento"
                                        autoComplete="off"
                                        value={documento}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        className="form-control"
                                        placeholder="Nombre"
                                        autoComplete="off"
                                        value={nombre}
                                        onChange={handleInputChange}
                                    />
                                </div>


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

                                <div className="form-group">
                                    <label>Celular</label>
                                    <input
                                        type="text"
                                        name="celular"
                                        className="form-control"
                                        placeholder="Celular"
                                        autoComplete="off"
                                        value={celular}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <p className="card-text">
                                    <Link to={ `./login` }>
                                        Ya estas registrado?
                                    </Link>
                                </p>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    //onClick={handleLogin}
                                >
                                    Registrar
                                </button>                          
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
