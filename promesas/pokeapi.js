const request = require('request');

function getPokemonByName(nombrePokemon) {
    return new Promise((resolve, reject) => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}/`
        const URL = 'https://pokeapi.co/api/v2/pokemon/'+nombrePokemon+'/'
        request.get(URL, (err, response, body) => {
            if (response.statusCode === 200) {
                const json = JSON.parse(body);
                resolve(json);
            } else {
                reject('NO existe el pokemon');
            }
        });
    }); 
}

getPokemonByName('mewtwo')
    .then((pokemon) => {
        console.log('THEN:', pokemon);
    }).catch((err) => {
        console.log('CATCH:', err);
    });
