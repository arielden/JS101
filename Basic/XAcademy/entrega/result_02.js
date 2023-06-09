/*
En el archivo tarea2.js podemos encontrar un código de un supermercado que vende productos.
El código contiene 
    - una clase Producto que representa un producto que vende el super
    - una clase Carrito que representa el carrito de compras de un cliente
    - una clase ProductoEnCarrito que representa un producto que se agrego al carrito
    - una función findProductBySku que simula una base de datos y busca un producto por su sku
El código tiene errores y varias cosas para mejorar / agregar
​
Ejercicios
1) Arreglar errores existentes en el código
    a) Al ejecutar agregarProducto 2 veces con los mismos valores debería agregar 1 solo producto con la suma de las cantidades.    
    b) Al ejecutar agregarProducto debería actualizar la lista de categorías solamente si la categoría no estaba en la lista.
    c) Si intento agregar un producto que no existe debería mostrar un mensaje de error.
​
2) Agregar la función eliminarProducto a la clase Carrito
    a) La función eliminarProducto recibe un sku y una cantidad (debe devolver una promesa)
    b) Si la cantidad es menor a la cantidad de ese producto en el carrito, se debe restar esa cantidad al producto
    c) Si la cantidad es mayor o igual a la cantidad de ese producto en el carrito, se debe eliminar el producto del carrito
    d) Si el producto no existe en el carrito, se debe mostrar un mensaje de error
    e) La función debe retornar una promesa
​
3) Utilizar la función eliminarProducto utilizando .then() y .catch()
​
*/


// Cada producto que vende el super es creado con esta clase
class Producto {
    sku;            // Identificador único del producto
    nombre;         // Su nombre
    categoria;      // Categoría a la que pertenece este producto
    precio;         // Su precio
    stock;          // Cantidad disponible en stock

    constructor(sku, nombre, precio, categoria, stock=10) {
        this.sku = sku;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
}


// Creo todos los productos que vende mi super
const queso = new Producto('KS944RUR', 'Queso', 10, 'lacteos', 4);
const gaseosa = new Producto('FN312PPE', 'Gaseosa', 5, 'bebidas');
const cerveza = new Producto('PV332MJ', 'Cerveza', 20, 'bebidas');
const arroz = new Producto('XX92LKI', 'Arroz', 7, 'alimentos', 20);
const fideos = new Producto('UI999TY', 'Fideos', 5, 'alimentos');
const lavandina = new Producto('RT324GD', 'Lavandina', 9, 'limpieza');
const shampoo = new Producto('OL883YE', 'Shampoo', 3, 'higiene', 50);
const jabon = new Producto('WE328NJ', 'Jabon', 4, 'higiene', 3);

// Genero un listado de productos. Simulando base de datos
const productosDelSuper = [queso, gaseosa, cerveza, arroz, fideos, lavandina, shampoo, jabon];


// Cada cliente que venga a mi super va a crear un carrito
class Carrito {
    productos = [];      // Lista de productos agregados
    categorias = [];     // Lista de las diferentes categorías de los productos en el carrito
    precioTotal = 0;    // Lo que voy a pagar al finalizar mi compra

    // Al crear un carrito, empieza vacío
    constructor() {
        this.productos;
        this.categorias;
        this.precioTotal;
    }
    async agregarProducto(sku, cant){
        console.log(`Consultando por: ${sku}, cantidad: ${cant}...`);
        try{
            const foundProd = await findProductBySku(sku);
            //
            if (foundProd) {
                console.log(`Producto encontrado! ${foundProd.nombre}`)
                const nuevoProd = new ProductoEnCarrito (sku, foundProd.nombre, cant, foundProd.precio);
                const consulta = this.productos.find(prod => prod.sku === sku)
                if (!consulta) {
                    this.productos.push(nuevoProd);
                    this.precioTotal += foundProd.precio * cant;
                    if (!this.categorias.includes(foundProd.categoria)) {
                        this.categorias.push(foundProd.categoria);
                    }
                } else {
                    const consultaIndex = this.productos.findIndex((prod) => prod.sku === sku)
                    this.precioTotal += foundProd.precio * cant;
                    this.productos[consultaIndex].cantidad += cant;
                    }
                }   
            } catch (err) {
            console.error(err);
        }
    }
    eliminarProducto(sku, cant){
        return new Promise((resolve, reject) => {
            const prodElim = this.productos.find(prod => prod.sku === sku);
            if (prodElim) {
                //Se ejectuta si el producto existía en el carrito
                if (cant < prodElim.cantidad) {
                    prodElim.cantidad -= cant
                    this.precioTotal -= cant*prodElim.precio
                    resolve(`Se eliminan ${cant} unidad/es de ${prodElim.nombre}`)
                }else if (cant >= prodElim.cantidad) {
                    const prodElimIndex = this.productos.indexOf(prodElim.sku);
                    delete this.productos[prodElimIndex]
                    this.precioTotal -= prodElim.cantidad * prodElim.precio
                    resolve(`Se elimina ${prodElim.nombre} del carrito`)
                }
            } else {
                reject("El producto a eliminar NO se encuentra en el carrito");
            }
        })
    }
}

// Cada producto que se agrega al carrito es creado con esta clase
class ProductoEnCarrito {
        sku;       // Identificador único del producto
        nombre;    // Su nombre
        cantidad;  // Cantidad de este producto en el carrito
        precio; //precio del producto agregado al carrito
    
        constructor(sku, nombre, cantidad, precio) {
            this.sku = sku;
            this.nombre = nombre;
            this.cantidad = cantidad;
            this.precio = precio;
        }
    
    }
    
// Función que busca un producto por su sku en "la base de datos"
function findProductBySku(sku) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundProduct = productosDelSuper.find(product => product.sku === sku);
            if (foundProduct) {
                resolve(foundProduct);
            } else {
                reject(`SKU: ${sku} No encontrado`);
            }
        }, 3000);
    });
}

function elimina(sku, cant) {
    setTimeout(()=>{
        const eliminado = mi_carrito.eliminarProducto(sku, cant)
        eliminado.then((msg) => {
            console.log(msg)
        }).catch((msg) => {
            console.error(msg)
        })
    }, 3500)
}
//--------ZONA TEST-----------------------------------
const mi_carrito = new Carrito();
console.log(mi_carrito);

mi_carrito.agregarProducto('UI999TY', 1); //Fideos
mi_carrito.agregarProducto('KS944RUR', 2); //Queso
mi_carrito.agregarProducto('RT324GD', 1); //Lavandina
mi_carrito.agregarProducto('UI999TY', 3); //Fideos
mi_carrito.agregarProducto('RT324XX', 2); // NO existe
mi_carrito.agregarProducto('XX92LKI', 1); //Arroz
// mi_carrito.agregarProducto('PV332MJ', 1); //Cerveza
// mi_carrito.agregarProducto('OL883YE', 1); //Shampoo
// mi_carrito.agregarProducto('FN312PPE', 1); //Gaseosa


elimina('UI999TY', 2) //pasa los parámetros a eliminarProducto que está dentro de un setTimeout para facilitar la prueba
//disminuye el precioTotal, pero no se trabajó para eliminar las cateogrías asociadas.

//-------- FIN ZONA TEST--------------------------------