import React from 'react';

function Despedida(props) {
    console.log(props);
    console.log(props.palabra);
    return (
        <h2>{props.palabra}</h2>
    )
};

export default Despedida;
