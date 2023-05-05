// Array

const my_array = [
    1,2,4,6
]

//llamo a la tercer posición, recordar que inicia en [0]
console.log(my_array[2])

//se puede crear un arrar de dos formas.
//Literal
let colores = ['azul', 'blanco', 'negro']

//Contructor
let array2 = new Array(2,3,'a')

console.log(colores)
console.log(array2)

colores.push('marrón')

console.log(colores)

const elimina_ultimo = colores.pop()

console.log(elimina_ultimo)

const elimina_primero = colores.shift()

console.log(elimina_primero)
console.log(colores)

let coloresIndex = colores.indexOf('negro')
console.log(coloresIndex)

//Devuelve True o False si encuentra (o no) el valor
let colorEncontrado = colores.includes('negro')
console.log(colorEncontrado)

let countries = ['Argentina', 'Brasil', 'Chile', 'Perú', 'Paraguay']

for (let i = 0; i < countries.length; i++) {
    console.log(countries[i])
}