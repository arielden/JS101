//Objeto lapicera.

const lapicera = {
    marca: "Faber",
    color: "Negro",
    precio: 100,
    tieneTapa: true,
    escribir: function (){
        console.log("Escribiendo...")
    }
}

//accede a la propiedad precio del objecto lapicera
console.log(lapicera['precio'])
//otra forma de acceder a la propiedad de un objeto
console.log(lapicera.color)
console.log(lapicera.marca)

//modificar una propiedad
lapicera.marca = "Pilot"

console.log(lapicera.marca)

//agregar propiedades
lapicera.origen = "China"

//borrar propiedades
delete lapicera.tieneTapa

//pertenenecia, devuelve un booleano
console.log('precio' in lapicera)