import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { fetchSinToken } from '../../helper/fetchRest';
import validator from 'validator';
import Swal from 'sweetalert2';

export default function RecargarSaldo() {
    const [user] = useState(JSON.parse(localStorage.getItem('user')));
    const [formValues, handleInputChange] = useForm({
        
        documento: user.documento,
        celular: user.celular,
        nuevo_monto: '0'
    });
    const id = user._id;
    
    const { documento, celular,nuevo_monto } = formValues;
    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(validator.isEmpty( documento)){
            return Swal.fire('Error', 'Documento incorrecto','error');
        }
       
        if(!validator.isMobilePhone( celular,"any")){
            return Swal.fire('Error', 'celular incorrecto','error');
        }
        if(!validator.isInt( nuevo_monto)){
            return Swal.fire('Error', 'Email incorrecto','error');
        }
        const resp = await fetchSinToken( 'recargar-saldo', {id, documento,celular,nuevo_monto }, 'PUT' );
        const body = await resp.json();
        console.log(body)
        if(body.ok){
            Swal.fire('Excelente', 'Operacion exitosa','success');
            console.log(body.ok)
        }else{
            console.log(body.error)
            Swal.fire('Ops!', JSON.stringify(body.error),'error');
        }
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
                                    <label>Documento</label>
                                    <input
                                        disabled
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
                                       disabled
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
                                    <label>Valor</label>
                                    <input
                                       
                                        type="number"
                                        name="nuevo_monto"
                                        className="form-control"
                                        placeholder="Valor"
                                        autoComplete="off"
                                        value={nuevo_monto}
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
