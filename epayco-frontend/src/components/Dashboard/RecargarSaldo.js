import React from 'react'
import { useForm } from '../../hooks/useForm';
import { fetchSinToken } from '../../helper/fetchRest';

export default function RecargarSaldo() {
    const [formValues, handleInputChange] = useForm({
        documento: '',
        celular: '',
        monto: ''
    });
    const { documento, celular,monto } = formValues;
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const resp = await fetchSinToken( 'recargar-saldo', { documento,celular,monto }, 'POST' );
        const body = await resp.json();
        console.log(body)
        if(body.ok)
            console.log(body.ok)
        else{
            console.log(body.error)
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

                                <div className="form-group">
                                    <label>Valor</label>
                                    <input
                                       
                                        type="number"
                                        name="monto"
                                        className="form-control"
                                        placeholder="Valor"
                                        autoComplete="off"
                                        value={monto}
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
