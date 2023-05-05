//Objeto literal

const persona1 = {
    nombre: "Gastón",
    apellido: "Fernández",
    edad: 35,
}

// clase
class Persona {

    //al usar new pasa por acá.
    constructor(nombreInicial, apellidoInicial, edadInicial){
        this.nombre = nombreInicial
        this.apellido = apellidoInicial
        this.edad = edadInicial
        console.log("Objeto creado. Hola: ", nombreInicial,apellidoInicial)
    }

}

// al usar new en la creación del objeto, la clase está obligada a usar el "constructor"
const persona2 = new Persona("Mono", "Benitez", 33)
console.log(persona1)
console.log(persona2)

console.log(persona2.apellido)

class Alumno extends Persona {
    colegio;
    constructor(nombreInicial, apellidoInicial, cole){
        super(nombreInicial, apellidoInicial)
        this.colegio = cole
    }
}

const alumno = new Alumno("Chori", "Rodriguez", "Escuela 7")
console.log(alumno)