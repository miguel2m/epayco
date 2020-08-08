import React, { useState } from 'react'
import Swal from 'sweetalert2';
import validator from 'validator';
import { fetchConToken, fetchSinToken } from '../../helper/fetchRest';

export default function ArticuloCard({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) {
    const [user] = useState(JSON.parse(localStorage.getItem('user2')));
    const [token] = useState(localStorage.getItem('token'));

    const email = user.email;
    


    const handlePagar = async () => {
        Swal.showLoading()
        const resp = await fetchSinToken( 'pagar', { email , token }, 'POST' );
        const body = await resp.json();

        if(!body.ok)
            return Swal.fire(JSON.stringify(body.error),'Error Servidor' ,'error');
        else{
            const { value } = await Swal.fire({
                title: 'Ingresar Token',
                input: 'text',
                //inputValue: inputValue,
                showCancelButton: true,
                inputValidator: (value) => {
                    if (!value) {
                    return 'Es obligario ingresar el TOKEN'
                    }
                
                    if (!validator.isJWT(value)){
                        return 'Es obligario ingresar un token valido'    
                    }
                }
                })
            if (value) {
                const resp = await fetchConToken( 'confirmar', {value}, 'POST' );
                const body = await resp.json();
                console.log(body)
                if(body.ok)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Compra confirmada',
                        showConfirmButton: false,
                        timer: 1500
                    })
                else
                    return Swal.fire('Error',body.error,'error');

            }else{
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Cancelado',
                    showConfirmButton: true
                })
            }
        }
    }

    return (

        <div className="card ms-3 animate__animated animate__fadeIn" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`${window.location.origin }/assets/${id}.jpg`} className="card-img" alt={superhero} />
                </div>
                <div className="col-md-8">

                    <div className="card-body">
                        <h5 className="card-title"> {superhero} </h5>
                        <p className="card-text"> {alter_ego} </p>

                        {
                            (alter_ego !== characters)
                            && <p className="card-text"> {characters} </p>
                        }

                        <p className="card-text">
                            <small className="text-muted"> {first_appearance} </small>
                        </p>


                        <button
                            className="btn btn-success"
                            onClick={handlePagar}
                        >
                            Comprar
                            </button>

                    </div>

                </div>
            </div>
        </div>

    )
}
