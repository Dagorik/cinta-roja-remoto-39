const miPrimeraListaDeSaludos = ['Hola','Que onda','Saludos'];

const miSegundaLista = ['String', 40, true, 20, false, "otro string"]

// console.log(miSegundaLista[2]); // --> Saludos
// console.log(miSegundaLista[1]); // --> 40

const objetoUno = { id: 1, nombre: 'Maria', edad:22 };
const objetoDos = { id: 2, nombre: 'Jorge', edad:33 };
const objetoTres = { id: 3, nombre: 'Luis', edad:16 };

const terceraLista = [objetoUno, objetoDos, objetoTres];
// console.log(terceraLista[1].nombre); // --> Jorge

// for(let i = 0; i<terceraLista.length; i++){
//     console.log('----- Iteración -----');
//     console.log(terceraLista[i].nombre);
// };

const listaMayoresDeEdad = [];
for(let i = 0; i<terceraLista.length; i++) {
    const objeto = terceraLista[i];
    if (objeto.edad > 17) {
        listaMayoresDeEdad.push(objeto)
    }
}

console.log(listaMayoresDeEdad);
console.log(terceraLista);