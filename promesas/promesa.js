// Definición de las funcion que retorna una promesa
function miPrimeraPromesa(numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numero > 5){
                resolve('El numero es mayor a 5');
            } else {
                reject('ERROR: El numero es menor a 5');
            }
        }, 2000);    
    });
}

// Ejecución de la promesa
miPrimeraPromesa(1)
    .then((respuesta) => {
        console.log('THEN ' + respuesta);
    }).catch((err) => {
        console.log('CATCH:' + err);
    });
