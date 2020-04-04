const request = require('request');

function getPeopleById(idPeople) {
    return new Promise((resolve, reject) => {
        const URL = `https://swapi.co/api/people/${idPeople}`;
        request.get(URL, (err, response, body) => {
            if (response.statusCode === 200){
                resolve(JSON.parse(body))
            } else {
                reject('Error en la peticion');
            }
        });
    });
}

function getFilmByUrl(url) {
    return new Promise((resolve, reject) => {
        request.get(url, (err, response, body) => {
            if (response.statusCode === 200){
                resolve(JSON.parse(body))
            } else {
                reject('Error en la peticion de FILM');
            }
        });
    });
}

//TRAER LA PRIMERA PELICULA DEL PEOPLE 20
getPeopleById(20)
    .then((people) => {
        console.log(people.name);
        return getFilmByUrl(people.films[0]);
    }).then((film) => {
        console.log(film.title);
    })
    .catch((err) => {
        console.log('ERROR: ', err);
    });
