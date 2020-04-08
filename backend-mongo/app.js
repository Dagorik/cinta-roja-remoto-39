const express = require('express');
const Superheroe = require('./models');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send({ mensaje: 'Hola desde express' });
});

app.listen(3000, () => {
    console.log('Server on');
});
