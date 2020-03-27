class Cine {
    constructor(pantallas, salas, butacas) {
        this.pantallas = pantallas;
        this.salas = salas;
        this.butacas = butacas;
    }

    reproducir(largometraje) {
        return `Se esta reproduciendo ${largometraje.titulo}`
    }
}

class Largometraje{
    constructor(titulo) {
        this.titulo = titulo;
    }
}

class Pelicula extends Largometraje{
    constructor(duracion, genero, titulo) {
        super(titulo);
        this.duracion = duracion;
        this.genero = genero;
    }
}

class Documental extends Largometraje{
    constructor(titulo, investigador, sponsor) {
        super(titulo);
        this.investigador = investigador;
        this.sponsor = sponsor;
    }
}

const titanic = new Pelicula('120 min', 'romantica', 'Titanic');
const theMinimalism = new Documental('The Minimalism', 'Un investigador', 'NatGeo');


const cineChaplin = new Cine(5, 5, 500);

const resultado = cineChaplin.reproducir(theMinimalism);
console.log(resultado);
