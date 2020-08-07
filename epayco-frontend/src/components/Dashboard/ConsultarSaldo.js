import React from 'react'
import { useForm } from '../../hooks/useForm';
import { fetchSinToken } from '../../helper/fetchRest';
import validator from 'validator';
import Swal from 'sweetalert2';

export default function ConsultarSaldo() {
    const [formValues, handleInputChange] = useForm({
        documento: '',
        celular: ''
    });
    const { documento, celular } = formValues;
    const handleSubmit = async(e) =>{
        e.preventDefault();


        if(validator.isEmpty( documento)){
            return Swal.fire('Error', 'Documento incorrecto','error');
        }

        
        if(!validator.isMobilePhone( celular,"any")){
            return Swal.fire('Error', 'celular incorrecto','error');
        }
        const resp = await fetchSinToken( 'consultar-saldo', { documento,celular }, 'POST' );
        const body = await resp.json();
        console.log(body)
        if(body.ok){
            console.log(body.ok)
        }else{
            console.log(body.error)
        }
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
