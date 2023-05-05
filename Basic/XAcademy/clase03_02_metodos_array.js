const numbers = [2,3,4,5,6];

//find() devuelve el primer valor que cumple con la condición dada.
const found = numbers.find(n => n !== 5);
console.log(found);

//filter() devuelve un array de elementos que cumplen con la condición dada.
const filtered = numbers.filter(n => n>4);
console.log(filtered);

//map() convertimos un array en otro array modificado, según el criterio dado.
const mapped = numbers.map(n => n*2);
console.log(mapped)

// reduce() Reduce un array a un sólo valor

const funcionCallback = (acumulador, actual) => {
    acumulador = acumulador + actual;
    return acumulador;
}

const valorInicial = 0


const resultado = numbers.reduce(funcionCallback, valorInicial)
    

console.log(resultado)