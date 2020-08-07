import React from 'react'
import { useForm } from '../../hooks/useForm';

export default function ConsultarSaldo() {
    const [formValues, handleInputChange] = useForm({
        documento: '',
        celular: ''
    });
    const { documento, celular } = formValues;
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues)
    }
    
    return (
        <div className="container mt-5">
            <h1>Consultar Saldo</h1>
            <hr />
            
            
                <div className="row">
                    
                    <div className="col-md-6">
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
                                
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    //onClick={handleLogin}
                                >
                                    Consultar Saldo
                                </button>                           
                            </div>
                        </form>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="card-body ">
                            <h4>Saldo: </h4>
                            <p>123456</p>
                        </div>                        
                        
                    </div>
                </div>
            
            <hr />
            
        </div>
    )
}
