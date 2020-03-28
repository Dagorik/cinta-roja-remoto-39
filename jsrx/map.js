const miArreglo = ['Bocho','Mustang','BMW','Aveo','Sentra'];
const miArregloDeObjetos = [
    { id: 1, nombre: 'Luis', edad:16 },
    { id: 2, nombre: 'Maria', edad:20 },
    { id: 3, nombre: 'Jorge', edad:43 },
    { id: 4, nombre: 'Luisa', edad:11 },
    { id: 5, nombre: 'Mario', edad:32 },
]

// const nuevoArregloFor = [];
// for(let i = 0; i<miArregloDeObjetos.length; i++){
//     nuevoArregloFor.push(miArregloDeObjetos[i].nombre);
// }
// console.log(nuevoArregloFor);

const nuevoArreglo = miArregloDeObjetos.map((element,index,array) => {
    return element.nombre;
});

console.log(nuevoArreglo);
