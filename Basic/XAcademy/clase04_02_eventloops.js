// console.log(1) //código sincróno
// console.log(2) //código síncrono
// console.log(3) //código síncrono

console.log(1) //código sincróno
setTimeout(() => {
    console.log(2) //setTimeout es asíncrono 
}, 1000);

console.log(3) //código síncrono

//event loop está mirando todo el tiempo la pila "Call Stack", si la pila está vacía
//pide al "Callback Queue" el siguiente código que se terminó de ejecutar de forma asíncrona.