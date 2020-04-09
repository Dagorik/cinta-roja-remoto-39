const mongoose = require('mongoose');
const Superheroe = require('./Superheroe');

const URL_MONGO = 'mongodb+srv://nuevousuario:qweqwe123@cluster0-in5es.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(URL_MONGO, { useNewUrlParser: true }, (err) => {
    if (!err) console.log('Conexión exitosa')
    else console.log(err);
});

module.exports = { Superheroe };
