// Mandar a llamar la biblioteca request (import)
const request = require('request');

const URL = 'https://swapi.co/api/people/20';
request.get(URL, (error, response, body) => {
    console.log(error);
    console.log(response.statusCode);
    const json = JSON.parse(body);
    console.log(json.name);
});

