import React from 'react';
import './card.css'

function Card(props){
    return(
        <div className="card fix">
            <img className="card-img-top" src="https://image.freepik.com/vector-gratis/plantilla-web-error-404-gato-aburrido_23-2147763346.jpg" alt="Card image cap" />
            <div className="card-body">
            <p className="card-text">{props.nombre}</p>
            </div>
        </div>
    )
}

export default Card;
