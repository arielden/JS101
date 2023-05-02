function saludar(nombre, apellido){
    console.log("Hola", nombre, apellido);
}

saludar("Ariel", "Denaro");
saludar("Naty"); //Como no le pasé apellido, devuelve undefined

function suma (num1, num2) {
    return num1 + num2
}

const resultado = suma (1, 4)
console.log("El resultado de la función suma es ", resultado)

//Function expression

const sumatoria = function (num1, num2) {
    return num1 + num2
}

console.log("Es resultado de la function expression 'sumatoria' es: ", sumatoria(3,5))

function division(a,b){
    if (b == 0){
        throw "No se puede dividir por cero"
    }    
    return a / b
}

try {
    const resu_div = division(3,0)
    console.log("El resultado de la división es: ",resu_div)
}
catch (err){
    console.error("Ocurrió un error: ", err)
}
finally {
    console.log("Esta línea se ejecuta SIEMPRE!")
}
