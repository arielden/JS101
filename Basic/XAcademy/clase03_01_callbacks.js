function sumar (a,b) {
  const resultado = a + b;
  return resultado;
}

//Expresion
const sumar2 = function(a,b){
  return a + b;
}

//Arrow function
const sumar3 = (a,b) => {
  return a + b;
}

//Si tengo una sola lína de código puedo borrar las llaves y el return.
const sumar4 = (a,b) => a + b;

//Si la función recibe un sólo parámetro puedo borrar los paréntesis
const saludo = nombre => console.log("Hola", nombre)

console.log(sumar(4,3))

//Callback function.
//Capacidad que nos dá JS de pasar una función por parámetro, a otra función

function cafetera(){
  return console.log("Preparando café");
}

console.log(cafetera());

function mi_callback(mi_funcion){
  mi_funcion();
}

mi_callback(cafetera)

// setTimeout espera un tiempo dado, para ejecutar una función
setTimeout(cafetera, 2000);

//setInterval es un loop de la función dada en un tiempo determinado por el usuario
//se repite y no sé como sacarlo
// setInterval(cafetera, 1000);