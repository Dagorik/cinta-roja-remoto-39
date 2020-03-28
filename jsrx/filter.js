const miArreglo = ['Bocho','Mustang','BMW','Aveo','Sentra'];
const miArregloDeObjetos = [
    { id: 1, nombre: 'Luis', edad:16 },
    { id: 2, nombre: 'Maria', edad:20 },
    { id: 3, nombre: 'Jorge', edad:43 },
    { id: 4, nombre: 'Luisa', edad:11 },
    { id: 5, nombre: 'Mario', edad:32 },
]

const miNuevoArregloFor = [];
for(let i=0; i<miArregloDeObjetos.length; i++){
    if (miArregloDeObjetos[i].edad > 17){
        miNuevoArregloFor.push(miArregloDeObjetos[i]);
    }
}
// console.log(miNuevoArregloFor);

// Trater una lista con los objetos persona que son mayores de edad
const miNuevoArreglo = miArregloDeObjetos.filter((element,index,array) => {
    return element.edad > 17;
});

// console.log(miNuevoArreglo);


// Traer una lista con los nombres de las personas que son mayores de edad
const miNuevoArregloDeNombre = miArregloDeObjetos.filter((element,index,array) => {
    return element.edad > 17;
}).map((element) => {
    return element.nombre;
})

const miNuevoArregloComprimido = miArregloDeObjetos.filter(e => e.edad > 17).map(e => e.nombre);


console.log(miNuevoArregloDeNombre);
