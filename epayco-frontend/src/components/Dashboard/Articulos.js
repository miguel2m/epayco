import React from 'react'
import { heroes } from '../../data/heroes';
import ArticuloCard from './ArticuloCard';

export default function Articulos() {
    
    return (
        <div className="container">
            <h1>Catalogo</h1>
             <hr/>
        
            <div className="card-columns">
                {
                    heroes.map( hero => (
                        <ArticuloCard 
                            key={ hero.id }
                            { ...hero }
                        />
                        
                    ))
                }
            </div>
        </div>
        
    )
}
