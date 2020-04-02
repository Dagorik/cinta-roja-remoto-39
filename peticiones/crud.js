const request = require('request');

function createAuthor(nombre, apellidos, biografia, genero, edad) {
    const URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';
    const body = {
        name: nombre,
        last_name: apellidos,
        nacionalidad: "MX",
        biography: biografia,
        gender: genero,
        age: edad
    };

    const obj = { url: URL, form: body  };
    request.post(obj, (err, response, body) => {
        console.log(err);
        console.log(response.statusCode);
        const respuesta = JSON.parse(body);
        console.log(respuesta);
    });
}

createAuthor('Mi post', 'Desde js', 'MI primer post en js', 'M', 37);

function updateIsAliveByAuthorId(idAuthor, isAlive) {
    const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${idAuthor}/`;
    const body = {
        is_alive: isAlive
    };
    const obj = { url: URL, form: body };
    request.patch(obj, (err, response, body) => {
        if (response.statusCode === 200){
            const respuesta = JSON.parse(body);
            console.log(respuesta);
        } else {
            console.log('Error en la petición');
        }
    });
}

updateIsAliveByAuthorId(4161, true);

function todoEnUno(nombre, apellidos, biografia, genero, edad){
    const URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';
    const body = {
        name: nombre,
        last_name: apellidos,
        nacionalidad: "MX",
        biography: biografia,
        gender: genero,
        age: edad
    };

    const obj = { url: URL, form: body  };
    request.post(obj, (err, response, body) => {
        console.log(err);
        console.log(response.statusCode);
        const respuesta = JSON.parse(body);
        console.log(respuesta);

        //PATCH
        const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${respuesta.id}/`;
        const body = {
            is_alive: true
        };
        const obj = { url: URL, form: body };
        request.patch(obj, (err, response, body) => {
            if (response.statusCode === 200) {
                const respuesta = JSON.parse(body);
                console.log(respuesta);
                
                //GET
                const URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'+respuesta.id;
                request.get(URL, (err, response, body  ) => {
                    const respuesta = JSON.parse(body);
                    console.log(respuesta);

                    //DELETE
                    const URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'+respuesta.id;
                    request.delete(URL, (err, response, body) => {
                        if (response.statusCode === 204) {
                            console.log('Se borro el usuario');
                        }
                    });
                })
            } else {
                console.log('Error en la petición');
            }
        });
    });
}

function callbackHell() {
    //CODE
    request.post(URL, () => {
        //CODE
        request.patch(URL, () => {
            //CODE
            request.get(URL, () => {
                //CODE
                request.delete(URL, () => {
                    //CODE
                    request.get(URL, () => {
                        //CODE
                    });
                });
            });
        });
    }); // ---> Bigotones tristes
}
