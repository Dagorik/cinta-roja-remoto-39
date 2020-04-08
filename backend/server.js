// Import de express
const express = require('express');

const app = express();

// Configuración para aceptar body.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (request, response) => {
    const respuesta = {
        mensaje: 'Hola mundo desde express'
    }
    response.send(respuesta);
});

app.get('/users', (req, res) => {
    const users = [
        {id:1, name:'Itzel'},
        {id:2, name:'Ramon'},
        {id:3, name:'Cesar'},
    ];
    res.send(users);
});

// Params --> http://localhost:3000/users/1 --> El 1 es una variable
app.get('/users/:idUser', (req, res) => {
    console.log(req.params);
    if (req.params.idUser === '2'){
        const respuesta = {
            id:2,
            name:'Ramon'
        };
        res.send(respuesta);
    } else {
        res.status(404).send({ mensaje: 'No encontrado' });
    }
});

// Querys --> http://localhost:3000/search/user?name=Itzel&color=cafe
app.get('/search/user', (req, res) => {
    console.log(req.query);
    if (req.query.name === 'Itzel') {
        const respuesta = {
            id: 1,
            nombre: 'Itzel'
        };
        res.send(respuesta);
    } else {
        res.status(404).send({ mensaje: 'No encontrado' });
    }
});

app.post('/crear/user', (req, res) => {
    console.log(req.body);
    const respuesta = {
        id: 1,
        nombre: req.body.name,
        edad: req.body.age,
        color: req.body.color
    };
    res.send(respuesta);
});

// http://localhost:3000/api/suma?num1=5&num2=10 ---> { suma: 15 }
app.get('/api/suma', (req, res) => {
    console.log(req.query);
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    const suma = parseInt(num1) + parseInt(num2);
    console.log(suma);
    res.status(200).send({ suma: suma })
});

// Siempre va al final
app.listen(3000, () => {
    console.log('Server on');
});

