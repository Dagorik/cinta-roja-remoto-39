// La definición de var cambia por let
var x = '3';
let y = '3'

function equisLet() {
    let word = 'Hola cinta roja'
    word = 'Hello'
    return word;
}

function equisConst() {
    const word = 'Hola cinta roja'
    word = 'Hello'
    return word;
}


// let resultado = equisConst();


function suma(a, b) {
    return a + b;
}
// ARROW FUNCTION
const sumaArrow = (a, b) => {
    return a + b;
}

let resultadoSuma = sumaArrow(10,30)
// console.log(resultadoSuma);

