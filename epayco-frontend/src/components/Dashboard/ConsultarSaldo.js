import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { fetchSinToken } from '../../helper/fetchRest';
import validator from 'validator';
import Swal from 'sweetalert2';

export default function ConsultarSaldo() {
    const [user] = useState(JSON.parse(localStorage.getItem('user2')));
    const [formValues, handleInputChange] = useForm({
        documento: user.documento,
        celular:  user.celular
    });
    const id = user._id;
    const { documento, celular } = formValues;
    const handleSubmit = async(e) =>{
        e.preventDefault();


        if(validator.isEmpty( documento)){
            return Swal.fire('Error', 'Documento incorrecto','error');
        }

        
        if(!validator.isMobilePhone( celular,"any")){
            return Swal.fire('Error', 'celular incorrecto','error');
        }
        const resp = await fetchSinToken( 'consultar-saldo', { id,documento,celular }, 'POST' );
        const body = await resp.json();
        console.log(body)
        if(body.ok){
            console.log(body.ok)
            return Swal.fire(JSON.stringify(body.user.saldo),'Saldo' ,'info');
        }else{
            return Swal.fire('Error',body.error,'error');
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
                    
                   
                </div>
            
            <hr />
            
        </div>
    )
}
