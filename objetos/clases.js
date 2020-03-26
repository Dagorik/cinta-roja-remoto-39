// Molde para crear objetos perros
class Perro {
    //Metodo constructor
    //  - Se ejecuta automaticamente
    //  - Sirve para inicializar los valores
    //  - El constructor inicializa solo atributos
    constructor(name, color) {
        console.log('Se ejecutró el metodo constructor');
        
        // this.atributo = valor;
        this.ojos = 2;
        this.cola = true;
        this.patas = 4;
        this.nombre = name;
        this.color = color;
    }

    ladrar() {
        return 'wau wau';
    }

    comer(alimento) {
        if (alimento === 'croquetas'){
            return 'wakala'
        } else {
            return 'yomi yomi'
        }
    }

    // this
    truco() {
        return `${this.nombre} dio vuelta`
    }

    // Getters/Setters
    getNombre() {
        return this.nombre
    }

    setColor(nuevoColor) {
        // Renombra el color por el nuevoColor
        // Cambia el valor del atributo
        this.color = nuevoColor;
    }

    // Crear un nuevo atributo
    crearRaza(raza) {
        this.raza = raza;
    }

}

// Instancia/Objeto
const snoopy = new Perro('Snoopy', 'Negro y Blanco');
const ayudanteDeSanta = new Perro('Ayudante de Santa', 'Cafe');
const scoobydoo = new Perro('Scoobydoo', 'Cafe');


console.log(snoopy);
snoopy.crearRaza('Beagle');
console.log(snoopy);

console.log(ayudanteDeSanta);
console.log(scoobydoo);
