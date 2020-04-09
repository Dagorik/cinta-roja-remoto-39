const express = require('express');
const { Superheroe } = require('./models');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send({ mensaje: 'Hola desde express' });
});

// Post == CREAR
app.post('/heroe', (req, res) => {
    console.log(req.body);
    const heroe = {
        nombre: req.body.nombre,
        edad: req.body.edad,
        superNovie: req.body.superNovie,
        identidad: req.body.identidad,
        debilidad: req.body.debilidad,
        superPoderes: req.body.superPoderes
    };

    const newSuperHeroe = Superheroe(heroe);
    
    newSuperHeroe.save((err, superHeroe) => {
        if (err) res.status(400).send(err)
        else res.status(201).send(superHeroe);
    });
});

// TODOS LOS HEROES
app.get('/heroes', (req, res) => {
    Superheroe.find().exec()
        .then((respuesta) => {
            res.send(respuesta);
        })
        .catch((err) => {
            res.status(400).send(err)
        })
});

// Devolver un heroe por ID
// http://localhost:3000/hereo/5e8e8f8415ce7d10300ea7a1
app.get('/heroe/:id', (req, res) => {
    const idHeroe = req.params.id;
    Superheroe.findOne({ _id: idHeroe }).exec()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(400).send(err)
        });
});


app.listen(3000, () => {
    console.log('Server on');
});
