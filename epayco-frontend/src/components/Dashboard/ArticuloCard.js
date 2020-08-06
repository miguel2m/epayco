import React from 'react'
import { Link } from 'react-router-dom';

export default function ArticuloCard({
    history,
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) {

    const handlePagar = () => {

        if (history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
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
