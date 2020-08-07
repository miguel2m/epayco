import React from 'react'
import Swal from 'sweetalert2';

export default function ArticuloCard({
    history,
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) {
    //const ipAPI = '//api.ipify.org?format=json';
    /*const inputValue = fetch(ipAPI)
        .then(response => response.json())
        .then(data => data.ip)*/


    const handlePagar = async () => {
        
        const { value: token } = await Swal.fire({
            title: 'Ingresar Token',
            input: 'text',
            //inputValue: inputValue,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                return 'Es obligario ingresar el TOKEN'
                }
                const re = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
                if (!re.test(value)){
                    return 'Es obligario ingresar un token valido'    
                }
            }
            })
        if (token) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        }else{
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Cancelado',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

    return (

        <div className="card ms-3 animate__animated animate__fadeIn" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/${id}.jpg`} className="card-img" alt={superhero} />
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
