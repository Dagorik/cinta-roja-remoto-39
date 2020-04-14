import React, { useState } from 'react';

// HACER UNA RESTA

function Contador() {

    const [number, setNumber] = useState(1);

    const onClickhandler = () => {
        console.log('Se le dio click');
        setNumber(number + 1)
        console.log(number);
    }

    const onClickHandlerRestar = () => {
        setNumber(number - 1);
    }

    return(
        <div>
            <h1>Soy el componente contador</h1>
            <p>{number}</p>
            <button onClick={onClickhandler}> Sumar +</button>
            <button onClick={onClickHandlerRestar}>Restar -</button>
        </div>
    );
}

export default Contador;
