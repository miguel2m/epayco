import React from 'react'
import { useForm } from '../../hooks/useForm';

export default function RecargarSaldo() {
    const [formValues, handleInputChange] = useForm({
        documento: '',
        celular: '',
        valor: ''
    });
    const { documento, celular,valor } = formValues;
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues)
    }
    return (
        <div className="container mt-5">
            <h1>Recargar Saldo</h1>
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
                                        name="celular"
                                        className="form-control"
                                        placeholder="Celular"
                                        autoComplete="off"
                                        value={celular}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        required="true"
                                        type="number"
                                        name="valor"
                                        className="form-control"
                                        placeholder="Valor"
                                        autoComplete="off"
                                        value={valor}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    //onClick={handleLogin}
                                >
                                    Recargar Saldo
                                </button>                           
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
