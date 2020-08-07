import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export default function Signup() {
    const [formValues, handleInputChange] = useForm({
        documento: '',
        nombre: '',
        email: '',
        celular: ''
    });

    const { documento,nombre, email,celular } = formValues;

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues)
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
                                    <input
                                        required="true"
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
                                    <input
                                        required="true"
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

                                <div className="form-group">
                                    <input
                                        required="true"
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
