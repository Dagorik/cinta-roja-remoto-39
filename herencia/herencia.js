// Super clase/Clase padre
class Mascota {
    constructor(patas, nombre) {
        this.patas = patas;
        this.nombre = nombre;
        this.pelo = true;
    }

    dormir(){
        return this.nombre + ' esta durmiendo';
    }
}

//Sub-Clase/Clase hijo
class Perro extends Mascota {
    constructor(raza, vacunado, color, nombre) {
        super(4, nombre);
        this.raza = raza;
        this.vacunado = vacunado;
        this.color = color;
    }

    ladrar(){
        return `${this.nombre} esta ladrando`;
    }

}

//Sub-Clase/Clase hijo
class Gato extends Mascota {
    constructor(edad, name) {
        super(4, name);
        this.edad = edad;
        this.vidas = 7;
    }

    ronrronear(){
        return 'rrrrrrrrr';
    }
}

const snoopy = new Perro('Beagle', true, 'Blanco con Negro', 'Snoopy');
const donGato = new Gato(18, 'Don gato');

console.log(snoopy.ladrar());
// console.log(donGato.dormir());
